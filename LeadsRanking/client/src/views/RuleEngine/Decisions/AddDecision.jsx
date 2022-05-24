import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Panel from '../Panel/Panel';
import InputField from '../Forms/InputField';
import SelectField from '../Forms/SelectedMenuField';
import Button from '../Button/Button';
import ButtonGroup from '../Button/ButtonGroups';
import operator from '../../../data-objects/Operator.json';
import decisionValidations from '../../../rule-validations/DecisionValidation';
import Tree from '../Tree/Tree';
import { has } from 'lodash/object';
import { getNodeDepthDetails, getNodeDepth } from '../../../utility/RuleUtils/TreeUtils';
import { transformTreeToRule } from '../../../utility/RuleUtils/Transform';
import { sortBy } from 'lodash/collection';
import { validateAttribute } from '../../../rule-validations/DecisionValidation';
import { PLACEHOLDER } from '../../../Constants/RuleConstants/DataTypes';
import { getRuleParams, getFactsDataSql } from '../../../store/actions/RuleActions/Attributes';
import { addFactsValuesSql } from '../../../store/actions/RuleActions/Ruleset';
import MultiSelect from "react-multi-select-component";
import { connect } from 'react-redux';

const nodeStyle = {
    shape: 'circle',
    shapeProps: {
        fill: '#1ABB9C',
        r: 10,
    },
};

const factsButton = [{ label: 'Add Facts', disable: false },
{ label: 'Add All', disable: false },
{ label: 'Add Any', disable: false },
{ label: 'Remove', disable: false }];

const topLevelOptions = [{ label: 'All', active: false, disable: false },
{ label: 'Any', active: false, disable: false }];

const outcomeOptions = [{ label: 'Add Outcome', active: false, disable: false },
{ label: 'Edit Conditions', active: false, disable: false }];

class AddDecision extends Component {
    constructor(props) {
        super(props);

        const outcome = props.editDecision ? props.outcome : ({ value: '', error: {}, params: [] });
        const addAttribute = { error: {}, name: '', operator: '', value: '' };
        const node = props.editDecision ? props.editCondition.node : {};
        const activeNode = { index: 0, depth: 0 };

        this.state = {
            attributes: props.attributes,
            outcome,
            addAttribute,
            enableTreeView: props.editDecision,
            enableFieldView: false,
            enableOutcomeView: false,
            node,
            topLevelOptions,
            factsButton: factsButton.map(f => ({ ...f, disable: true })),
            outcomeOptions: outcomeOptions.map(f => ({ ...f, disable: true })),
            formError: '',
            addPathflag: false,
            activeNodeDepth: [activeNode],
            field: '',
            activeFieldIndex: 0,
            factData: {},
            multiSelectValue: [],
            FactsActualName: {},
            selectedNodeName: '',
            selectedNodeLevel: ''
        };
        this.handleAdd = this.handleAdd.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.onChangeNewFact = this.onChangeNewFact.bind(this);
        this.onChangeOutcomeValue = this.onChangeOutcomeValue.bind(this);
        this.handleTopNode = this.handleTopNode.bind(this);
        this.handleActiveNode = this.handleActiveNode.bind(this);
        this.handleChildrenNode = this.handleChildrenNode.bind(this);
        this.handleFieldCancel = this.handleFieldCancel.bind(this);
        this.handleOutputPanel = this.handleOutputPanel.bind(this);
        this.handleOutputParams = this.handleOutputParams.bind(this);
        this.addParams = this.addParams.bind(this);
        this.addPath = this.addPath.bind(this);
        this.setMultiSelected = this.setMultiSelected.bind(this);
        this.selectedNodeDetails = this.selectedNodeDetails.bind(this);
    }

    async componentDidMount() {
        getRuleParams().then(data => {
            this.setState({ ruleParams: data });
        }).catch(err => {
            // console.log(err);
        });

        const { attributes, factData } = this.state;
        let mapAttributeValues = {};
        let mapActualName = {};
        for (let index = 0; index < attributes.length; index++) {
            const attribute = attributes[index];
            mapActualName[attribute.name] = attribute.actualname;
            if (attribute.field === 'dropdown' && attribute.source === 'api') {
                
                let data = await getFactsDataSql(attribute.key);
                if (data.key !== undefined) {
                    mapAttributeValues[attribute.name] = data.data;
                } else {
                    mapAttributeValues[attribute.name] = [];
                }
            };
        }
        this.setState({ factData: mapAttributeValues, FactsActualName: mapActualName });
    }

    handleAdd(e) {
        e.preventDefault();
        const error = decisionValidations(this.state.node, this.state.outcome);

        if (error.formError) {
            this.setState({ formError: error.formError, outcome: { ...this.state.outcome, error: error.outcome } })
        } else {
            let operationType = '';
            let { ruleset } = this.props;
            console.log('handleadd', ruleset);
            if(ruleset !== null && 
                ruleset.operationType !== undefined) {
                    operationType = ruleset.operationType;
                }
            let outcomeParams = {
                ruleId: this.props.ruleId,
                description: this.props.description,
                operationType: operationType
            };
            this.state.outcome.params.forEach(param => {
                outcomeParams[param.pkey] = param.pvalue;
            })
            const condition = transformTreeToRule(this.state.node, this.state.outcome, outcomeParams);
            this.props.addCondition(condition);
        }
    }

    handleCancel() {
        this.props.cancel();
    }

    onChangeNewFact(e, name) {
        const addAttribute = { ...this.state.addAttribute };
        const { mapActualName } = this.props.factData;

        const value = e.target.value;
        if (value !== '-1' && mapActualName !== null && mapActualName !== undefined && 
            !(Object.keys(mapActualName).length === 0 &&
            mapActualName.constructor === Object)) {
            if(name === 'name'){
                addAttribute[name] = mapActualName[value];
            } else {
                addAttribute[name] = value;
            }
             
        }
        if (name === 'name') {
            addAttribute.value = '';
            this.setState({ multiSelectValue: []});
        }
        this.setState({ addAttribute });
    }

    setMultiSelected(list, value) {
        const addAttribute = { ...this.state.addAttribute };
        let item='';
        addAttribute['value'] = '-1';
        for (let index = 0; index < list.length; index++) {
            item = list[index];
            addAttribute['value'] += ","+item.value;
        }

        this.setState({ addAttribute });
        this.setState({ multiSelectValue: list});
    }

    onChangeOutcomeValue(e, type) {
        const outcome = { ...this.state.outcome };
        outcome[type] = e.target.value;
        this.setState({ outcome });
    }

    addParams() {
        const { outcome } = this.state;
        const newParams = outcome.params.concat({ pkey: '', pvalue: '' });
        this.setState({ outcome: { ...outcome, params: newParams } });
    }

    addPath() {
        this.setState({ addPathflag: true });
    }

    handleOutputParams(e, type, index) {
        if (type === 'pkey' && e.target.value === 'EXPRESSION') {
            this.setState({ field: 'dropdown', activeFieldIndex: index });
        } else {
            this.setState({ field: '', activeFieldIndex: index });
        }

        const { outcome } = this.state;
        const params = [...outcome.params];
        const newParams = params.map((param, ind) => {
            if (index === ind) {
                if (type === 'pkey') {
                    return { ...param, pkey: e.target.value };
                } else {
                    return { ...param, pvalue: e.target.value };
                }
            }
            return param;
        });
        this.setState({ outcome: { ...outcome, params: newParams } });
    }

    handleTopNode(value) {
        let parentNode = { ...this.state.node };
        const activeNode = { index: 0, depth: 0 };
        if (has(parentNode, 'name')) {
            parentNode.name = value === 'All' ? 'all' : 'any';
        } else {
            parentNode = { name: value === 'All' ? 'all' : 'any', nodeSvgShape: nodeStyle, children: [] };
        }
        const topLevelOptions = this.state.topLevelOptions.map(option => {
            if (option.label === value) {
                return { ...option, active: true };
            }
            return { ...option, active: false };
        })

        const factsButton = this.state.factsButton.map(button => ({ ...button, disable: false }));
        const outcomeOptions = this.state.outcomeOptions.map(button => ({ ...button, disable: false }));

        this.setState({
            enableTreeView: true, topNodeName: value, node: parentNode,
            activeNodeDepth: [activeNode], topLevelOptions, factsButton, outcomeOptions
        });
    }

    mapNodeName(val) {
        const node = {};
        const { addAttribute: { name, operator, value, path }, attributes } = this.state;
        if (val === 'Add All' || val === 'Add Any') {
            node['name'] = val === 'Add All' ? 'all' : 'any';
            node['nodeSvgShape'] = nodeStyle;
            node['children'] = [];
        } else {
            node['name'] = name;
            let factValue = value.trim();
            const attProps = attributes.find(att => att.actualname === name);
            if (attProps.type === 'number') {
                factValue = Number(value.trim());
            }
            let fact = { [operator]: factValue };
            if (path) {
                fact['path'] = `.${path}`;
            }
            node['attributes'] = { ...fact };
        }
        return node;
    }

    handleChildrenNode(value) {

        let factOptions = [...factsButton];
        if (value === 'Add Facts') {
            this.setState({ enableFieldView: true });
        } else {
            const { activeNodeDepth, node, attributes } = this.state;
            const addAttribute = { error: {}, name: '', operator: '', value: '' };
            if (value === 'Add fact node') {
                const error = validateAttribute(this.state.addAttribute, attributes);
                if (Object.keys(error).length > 0) {
                    let addAttribute = this.state.addAttribute;
                    addAttribute.error = error;
                    this.setState({ addAttribute });
                    return undefined;
                }
            }
            if (activeNodeDepth && node) {
                const newNode = { ...node };

                const getActiveNode = (pNode, depthIndex) => pNode[depthIndex];

                let activeNode = newNode;
                const cloneDepth = value === 'Remove' ? activeNodeDepth.slice(0, activeNodeDepth.length - 1) : [...activeNodeDepth]
                cloneDepth.forEach(nodeDepth => {
                    if (nodeDepth.depth !== 0) {
                        activeNode = getActiveNode(activeNode.children, nodeDepth.index);
                    }
                });
                const childrens = activeNode['children'] || [];
                if (value !== 'Remove') {
                    activeNode['children'] = childrens.concat(this.mapNodeName(value));
                } else {
                    const lastNode = activeNodeDepth[activeNodeDepth.length - 1];
                    childrens.splice(lastNode.index, 1);
                    factOptions = this.state.factsButton.map(button =>
                        ({ ...button, disable: true }));
                }

                this.setState({ node: newNode, enableFieldView: false, addAttribute, factsButton: factOptions });
            }
        }
    }


    handleActiveNode(node) {
        const depthArr = getNodeDepthDetails(node);
        const sortedArr = sortBy(depthArr, 'depth');
        console.log(node);
        this.setState({ 
            selectedNodeName: node.name,
            selectedNodeLevel: node.depth
        });

        const factsNodemenu = this.state.factsButton.map(button => {
            if (button.label !== 'Remove') {
                return { ...button, disable: true };
            }
            return { ...button, disable: false };
        });

        const parentNodeMenu = this.state.factsButton.map(button => {
            if (sortedArr.length < 1 && button.label === 'Remove') {
                return { ...button, disable: true };
            }
            return { ...button, disable: false };
        });

        const facts = node.name === 'all' || node.name === 'any' ? parentNodeMenu : factsNodemenu;
        const outcomeMenus = outcomeOptions.map(option => ({ ...option, disable: false }));
        this.setState({ activeNodeDepth: sortedArr, factsButton: facts, outcomeOptions: outcomeMenus });
    }

    handleFieldCancel() {
        const addAttribute = { error: {}, name: '', operator: '', value: '' };
        this.setState({ enableFieldView: false, addAttribute });
    }

    handleOutputPanel(value) {
        if (value === 'Add Outcome') {
            const factsOptions = this.state.factsButton.map(fact => ({ ...fact, disable: true }))
            const options = this.state.outcomeOptions.map(opt => {
                if (opt.label === 'Add Outcome') {
                    return { ...opt, active: true };
                }
                return { ...opt, active: false };
            });
            this.setState({
                enableOutcomeView: true, enableTreeView: false,
                enableFieldView: false, outcomeOptions: options, factsButton: factsOptions
            });
        }
        if (value === 'Edit Conditions') {
            const options = this.state.outcomeOptions.map(opt => {
                if (opt.label === 'Edit Conditions') {
                    return { ...opt, active: true };
                }
                return { ...opt, active: false };
            });
            this.setState({ enableOutcomeView: false, enableTreeView: true, enableFieldView: false, outcomeOptions: options });
        }
    }

    handleRemoveOutCome(e,ind){
        e.preventDefault();
        const { outcome } = this.state;
        const newParams = outcome.params.filter((item,index)=>ind!=index);
        this.setState({ outcome: { ...outcome, params: newParams } });
    }

    topPanel() {
        const { topLevelOptions, factsButton, outcomeOptions } = this.state;

        return (<div className="add-decision-step">
            <div className="step1"><div>Step 1: Add Toplevel</div><ButtonGroup buttons={topLevelOptions} onConfirm={this.handleTopNode} /></div>
            <div className="step2"><div> Step 2: Add / Remove facts</div><ButtonGroup buttons={factsButton} onConfirm={this.handleChildrenNode} /></div>
            <div className="step3"><div> Step 3: Add Outcome</div><ButtonGroup buttons={outcomeOptions} onConfirm={this.handleOutputPanel} /></div>
        </div>)
    }

    fieldPanel() {
        const { attributes, addAttribute, addPathflag } = this.state;
        const { factData } = this.props;
        let AttributeFieldDropDown = {};
        let AttributeValues = {};
        let AttributeDate = {};
        let DropDownKeyType = {};
        let DropDownMultiselect = {};
        
        for (let index = 0; index < attributes.length; index++) {
            let attribute = attributes[index];

            if (attribute.field === 'dropdown') {

                AttributeFieldDropDown[attribute.actualname] = true;

                if (attribute.source === 'api') {
                    if( !(Object.keys(factData).length === 0 &&
                      factData.constructor === Object) &&
                      factData.AttributeValues !== undefined
                    ) {
                       
                        let factMapping = factData.AttributeValues;
                        if(attribute.name in factMapping){
                            AttributeValues[attribute.actualname] = factMapping[attribute.name];
                        } else {
                            AttributeValues[attribute.actualname] = [];
                        }
                       
                        if(attribute.factValueType === 'key'){
                            DropDownKeyType[attribute.actualname] = true;
                        }
                    }

                } else {
                    AttributeValues[attribute.actualname] = attribute.values;
                    DropDownKeyType[attribute.actualname] = false;
                }

                if(attribute.multiselect === true){
                    DropDownMultiselect[attribute.actualname] = true;
                } else {
                    DropDownMultiselect[attribute.actualname] = false;
                }

            } else if (attribute.field === 'date') {
                AttributeDate[attribute.actualname] = true;
            } else {
                AttributeFieldDropDown[attribute.actualname] = false;
            }
        };


        let dropdownValues = [];
        let enableDropDown = false;
        let showDateField = false;
        let dropDownKeyValue = false;
        let multiSelect=false;

        if (addAttribute.name !== '-1' && AttributeFieldDropDown[addAttribute.name]) {
            dropdownValues = AttributeValues[addAttribute.name];
            dropDownKeyValue = DropDownKeyType[addAttribute.name];
            multiSelect = DropDownMultiselect[addAttribute.name];

            let dropdownValuesMulti = [];
            if(multiSelect === true) {
                for (let index = 0; index < dropdownValues.length; index++) {
                    const element = dropdownValues[index];
                    let obj = { label: element.value, value: element.key};
                    if(DropDownKeyType[addAttribute.name]){
                        dropdownValuesMulti.push(obj);
                    } else {
                        obj = {label: element, value: element};
                        dropdownValuesMulti.push(obj);
                    }
                }
                dropdownValues = dropdownValuesMulti;
            }
            enableDropDown = true;
        }

        if (AttributeDate[addAttribute.name]) {
            enableDropDown = false;
            showDateField = true;
        }

        const attributeOptions = attributes.map(attr => attr.name);
        const attribute = addAttribute.name && attributes.find(attr => attr.actualname === addAttribute.name);
        let operatorOptions= [], placeholder="";
        if(attribute!=null && attribute!==undefined) {
            operatorOptions = attribute && operator[attribute.type];

            placeholder = addAttribute.operator === 'contains' || addAttribute.operator === 'doesNotContain' ?
                PLACEHOLDER['string'] : PLACEHOLDER[attribute.type]
        }
         

        return (<Panel>

            <div className="attributes-header">
                <div className="attr-link" onClick={this.addPath}>
                    <span className="plus-icon" /><span className="text">Add Path</span>
                </div>
            </div>

            <div className="add-field-panel">
                <div>
                    <SelectField
                        options={attributeOptions}
                        onChange={(e) => this.onChangeNewFact(e, 'name')}
                        value={addAttribute.name}
                        error={addAttribute.error.name}
                        label="Facts"
                    />
                </div>
                <div>
                    <SelectField
                        options={operatorOptions ?? []}
                        onChange={(e) => this.onChangeNewFact(e, 'operator')}
                        value={addAttribute.operator}
                        error={addAttribute.error.operator}
                        label="Operator"
                    />
                </div>
                {
                    enableDropDown && !multiSelect &&
                    <div>
                        <SelectField
                            options={dropdownValues}
                            onChange={(e) => this.onChangeNewFact(e, 'value')}
                            error={addAttribute.error.value}
                            label="Value"
                            placeholder={placeholder}
                            dropDownKeyValue={dropDownKeyValue}
                        />
                    </div>
                }
                { 
                    enableDropDown && multiSelect &&
                    <div className="multiselect-dropdown-fact">
                         <MultiSelect
                            options={dropdownValues}
                            value={this.state.multiSelectValue}
                            onChange={this.setMultiSelected}
                        />
                    </div>
                }
                {
                    !enableDropDown && !showDateField &&
                    <div>
                        <InputField
                            onChange={(value) => this.onChangeNewFact(value, 'value')}
                            value={addAttribute.value}
                            error={addAttribute.error.value}
                            label="Value"
                            placeholder={placeholder}
                        />
                    </div>
                }
                {
                    showDateField &&
                    <div className="form-field">
                        <label>Value</label>
                        <input
                            type="date"
                            value={addAttribute.value}
                            error={addAttribute.error.value}
                            label="Value"
                            onChange={(e) => this.onChangeNewFact(e, 'value')}
                        >
                        </input>
                    </div>
                }
            </div>

            {addPathflag && <div className="add-field-panel half-width">
                <div>
                    {/*<InputField onChange={(value) => this.onChangeNewFact(value, 'path')} value={addAttribute.path}
                        label="Path" placeholder={"Enter path value - dont give prefix ' . ' "}/> */}
                    <SelectField options={attributeOptions} onChange={(e) => this.onChangeNewFact(e, 'path')}
                        value={addAttribute.path} label="Path" />
                </div>
            </div>}

            <div className="btn-group">
                <Button label={'Add'} onConfirm={() => this.handleChildrenNode('Add fact node')} classname="btn-toolbar" type="submit" />
                <Button label={'Cancel'} onConfirm={this.handleFieldCancel} classname="btn-toolbar" />
            </div>
        </Panel>)
    }

    outputPanel() {
        const { outcome, field, activeFieldIndex } = this.state;
        const { editDecision, ruleParams } = this.props;
        let mapRuleParamKey = {};
        let mapRuleParamField = {};

        let ruleParamsOptions = ruleParams.map((item) => {
            if (item.field === 'dropdown') {
                mapRuleParamKey[item.key] = item.values;
                mapRuleParamField[item.key] = true;
            } else {
                mapRuleParamKey[item.key] = [];
                mapRuleParamField[item.key] = false;
            }
            return item.key;
        });


        return (<Panel>
            <div className="attributes-header">
                <div className="attr-link" onClick={this.addParams}>
                    <span className="plus-icon" /><span className="text">Add Params</span>
                </div>
            </div>
            <div className="add-field-panel half-width">
                <div>
                    <InputField onChange={(value) => this.onChangeOutcomeValue(value, 'value')} value={outcome.value}
                        error={outcome.error && outcome.error.value} label="Type" />
                </div>
            </div>
            <div>
                {outcome.params.length > 0 && outcome.params.map((param, ind) =>
                (<div>
                    {
                        param.pkey !== 'ruleId' && param.pkey !== 'description' && param.pkey !== 'operationType'&&
                        <div key={ind} className="add-field-panel">
                            <SelectField
                                options={ruleParamsOptions}
                                onChange={(value) => this.handleOutputParams(value, 'pkey', ind)}
                                value={param.pkey}
                                label="key"
                            />
                            {
                                mapRuleParamField[param.pkey] &&
                                <SelectField
                                    options={mapRuleParamKey[param.pkey]}
                                    onChange={(value) => this.handleOutputParams(value, 'pvalue', ind)}
                                    value={param.pvalue}
                                    label="Value"
                                />
                            }
                            {
                                !mapRuleParamField[param.pkey] &&
                                <InputField
                                    onChange={(value) => this.handleOutputParams(value, 'pvalue', ind)}
                                    value={param.pvalue}
                                    label="Value"
                                />
                            }
                            <div 
                                style={{marginTop:"45px"}}
                                onClick = {(e)=>this.handleRemoveOutCome(e,ind)}
                            >
                            <   a href=""><span class="fa fa-trash-o fa-2x"></span></a>
                            </div>
                        </div>

                    }

                </div>))}
            </div>
        </Panel>)
    }

    treePanel() {
        const { node } = this.state;
        const depthCount = getNodeDepth(node);

        return (<Panel>
            <Tree treeData={node} count={depthCount} onConfirm={this.handleActiveNode} />
        </Panel>)
    }

    selectedNodeDetails() {
        const { selectedNodeLevel, selectedNodeName } = this.state;
        return (
            <div className = "selected-node-details-tree">
                {selectedNodeName !== '' && selectedNodeLevel !=='' &&
                <>
                    <div className = "node-name">
                        <label htmlFor="nodename">Selected Node Name: </label>
                        <h5>{selectedNodeName}</h5>
                    </div>
                    <div className = "node-level">
                        <label htmlFor="nodename">Selected Node Level: </label>
                        <h5>{selectedNodeLevel}</h5>                  
                    </div>
                </>
            }
            </div>
        )
    }


    addPanel() {
        const { enableTreeView, enableFieldView, enableOutcomeView } = this.state;

        return (<div>
            {this.topPanel()}
            {enableFieldView && this.fieldPanel()}
            {enableOutcomeView && this.outputPanel()}
            {!enableOutcomeView && this.selectedNodeDetails()}
            {enableTreeView && this.treePanel()}
        </div>);

    }

    render() {
        const { buttonProps } = this.props;
        return (
            <form>
                <div className="add-rulecase-wrapper">
                    {this.addPanel()}
                    {this.state.formError && <p className="form-error"> {this.state.formError}</p>}
                    <div className="btn-group">
                        <Button label={buttonProps.primaryLabel} onConfirm={this.handleAdd} classname="primary-btn" type="submit" />
                        <Button label={buttonProps.secondaryLabel} onConfirm={this.handleCancel} classname="cancel-btn" />
                    </div>

                </div>
            </form>
        );
    }
}

AddDecision.defaultProps = ({
    addCondition: () => false,
    cancel: () => false,
    attribute: {},
    buttonProps: {},
    attributes: [],
    outcome: {},
    editDecision: false,
    editCondition: {},
    factData: {},
    ruleset: {}
});

AddDecision.propTypes = ({
    addCondition: PropTypes.func,
    cancel: PropTypes.func,
    attribute: PropTypes.object,
    buttonProps: PropTypes.object,
    attributes: PropTypes.array,
    outcome: PropTypes.object,
    editDecision: PropTypes.bool,
    editCondition: PropTypes.object,
    factData: PropTypes.object,
    ruleset: PropTypes.object
});

const mapStateToProps = (state) => ({
    factData: state?.Ruleset?.factData,
    ruleset: state?.Ruleset?.rulesets[state?.Ruleset?.activeRuleset],
});
  
export default connect(mapStateToProps)(AddDecision);