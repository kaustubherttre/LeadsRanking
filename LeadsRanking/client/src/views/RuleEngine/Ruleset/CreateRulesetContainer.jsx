import React, { Component } from 'react';
import { TitlePanel } from '../Panel/Panel';
import InputField from '../Forms/InputField';
import Button from '../Button/Button';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { includes } from 'lodash/collection';
import { createHashHistory } from 'history';
import { addRuleset, addRule } from '../../../store/actions/RuleActions/Ruleset';
import Notification from '../Notification/Notification.jsx';
import { RULE_AVAILABLE_CREATE } from '../../../Constants/RuleConstants/Messages';
import SweetAlert from 'react-bootstrap-sweetalert';

class CreateRulesetContainer extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            description: '',
            searchKeys: [],
            ruleId: '',
            isActive: false,
            error: {},
            fileExist: false,
            message: {},
            product: '',
            criteria: '',
            // operationType: '',
            invalidInput : false,
            RuleTypeMapping : {
                "booking" : [
                    { key : "Basic", value: "basic"}
                ],
                "agent" : [
                    { key : "Basic", value: "basic"},
                    { key : "Deduction", value: "deduction"},
                    { key : "Addon", value: "addon"}
                ]
            }
         };
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.addSearchKeys = this.addSearchKeys.bind(this);
        this.handleProductChange = this.handleProductChange.bind(this);
        // this.handleIncentiveMonthChange = this.handleIncentiveMonthChange.bind(this);
        this.handleCriteriaChange = this.handleCriteriaChange.bind(this);
        // this.handleOperationTypeChange =  this.handleOperationTypeChange.bind(this);

    }



    onChangeName(e) {
        this.setState({ name: e.target.value });
    }

    onChangeDescription(e) {
        this.setState({ description: e.target.value });
    }

    async handleAdd(e) {
        e.preventDefault();
        if(this.state.name=='' ||
           this.state.description == '' || 
           this.state.product == '' || 
           this.state.criteria == '' 
        //    this.state.operationType == '' ||
        //    ||
        //    this.state.incentiveMonth == ''
           ){  
               let invalidInputMessage = [];
               if(this.state.name == ''){
                     invalidInputMessage.push("Invalid Name");
               }
               if(this.state.description == ''){
                    invalidInputMessage.push("Invalid Description");
                }
                if(this.state.product == ''){
                    invalidInputMessage.push("Invalid Product");
                }
                if(this.state.criteria == ''){
                    invalidInputMessage.push("Invalid Criteria");
                }
                
               this.setState({
                   invalidInput : true,
                   invalidInputMessage : invalidInputMessage
               })
               return;
            }
        const history = createHashHistory();
        if (!this.state.name || !this.state.name.trim()) {
            this.setState({ error: { name: 'Please specify value' } });
        } else if (includes(this.props.rulesetnames, this.state.name)) {
            this.setState({ fileExist: true, message: RULE_AVAILABLE_CREATE });
        } else {
            let { 
                name,
                description,
                searchKeys,
                ruleId,
                isActive,
                criteria,
                // operationType
            } = this.state;

            let body = {
                name,
                description,
                criteria,
                // operationType,
                searchKeys,
                isActive,
                decisions: []
            };

            let result = await addRule(body);
            let insertedId='';
            if(result !== null &&
                result.data !== undefined &&
                    result.data.data !== undefined &&
                        result.data.data.insertedId !== undefined ) {
                            insertedId = await result.data.data.insertedId;
                }

            this.setState({ ruleId: insertedId });
            let payload = {
                name,
                description,
                searchKeys,
                ruleId: insertedId,
                criteria,
                // operationType
            }
            this.props.addRuleset(payload);
            this.props.history.push('/Ruleset');
        }

    }

    addSearchKeys() {
        const { searchKeys } = this.state;
        this.setState({ searchKeys: [...searchKeys, { key: '', value: '' }]});
     }

     handleSearchKeys(e, type, index){
        const { searchKeys } = this.state;
        const newParams = searchKeys.map((param, ind) => {
            if (index === ind) {
               if (type === 'key') {
                   return { ...param, key: e.target.value };
               } else {
                   return { ...param, value: e.target.value };
               }
            }
            return param;
        });
        this.setState({searchKeys: newParams});
    }

    handleProductChange(e) {
        const productId = e.target.value;
        this.setState({ product: productId })
        this.setState({
            searchKeys: [
                {
                    key: 'Product',
                    value: parseInt(productId)
                }
                // ,
                // {
                //     key: 'IncentiveMonth',
                //     value: this.state.incentiveMonth
                // }
            ]
        });
    }

    handleCriteriaChange(e) {
        const criteria = e.target.value;
        this.setState({ criteria: criteria });
    }

    // handleOperationTypeChange(e) {
    //     const operation = e.target.value;
    //     this.setState({ operationType: operation });
    // }

    // handleIncentiveMonthChange(e) {
    //     let date = e.target.value;
    //     this.setState({ incentiveMonth: date });
    //     this.setState({
    //         searchKeys: [
    //             {
    //                 key: 'Product',
    //                 value: parseInt(this.state.product)
    //             },
    //             {
    //                 key: 'IncentiveMonth',
    //                 value: date
    //             }
    //         ]
    //     })
    // }

    render() {
        const { fileExist, message, description, searchKeys, RuleTypeMapping } = this.state;

        return (
            <div className="single-panel-container">
                {this.state.invalidInput && 
                    <SweetAlert
                        danger
                        confirmBtnBsStyle="danger"
                        title="Incomplete Input"
                        onConfirm= {()=>{
                                            this.setState({
                                                invalidInput: false
                                            })
                                        }
                                    }
                    >
                        {this.state.invalidInputMessage.map((item)=>{
                            console.log(item);
                            return <p>{item}</p>;
                        })}
                    </SweetAlert>
                }
                {fileExist && <Notification body={message.body} heading={message.heading} type={message.type} />}
                <TitlePanel title="Create Rules" titleClass="fa fa-plus-square-o">
                    <form>
                        <div className="upload-panel">
                            <InputField
                                label="Name" 
                                onChange={this.onChangeName}
                                value={this.state.name}
                                error={this.state.error.name}
                                required={true}
                            />
                             
                            {/* <InputField label="Description" onChange={this.onChangeDescription} value={this.state.description} />
                            <div className="attributes-header">
                                <div className="attr-link" onClick={this.addSearchKeys}>
                                    <span className="plus-icon" /><span className="text">Add Params</span>
                                </div>
                            </div> */}
                        </div>
                        <label htmlFor="description"> Description</label>
                        <textarea 
                            name="description"
                            id="description"
                            cols="59"
                            rows="2"
                            onChange={this.onChangeDescription}
                            value={this.state.description}
                            required></textarea>
                        
                        <div className = "create-ruleset-input">
                            <div className="form-field">
                                <label for="product">Product</label>
                                <select 
                                    name="product" 
                                    id="product"
                                    onChange={this.handleProductChange}
                                    required>
                                    <option value="">Select Product</option>
                                    <option value="7">Term</option>
                                    <option value="117">Motor</option>
                                    <option value="2">Health</option>
                                    <option value="115">Investment</option>
                                </select>
                            </div>
                            <div className="form-field">
                                <label for="criteria">Criteria</label>
                                <select 
                                    name="criteria"
                                    id="criteria"
                                    onChange={this.handleCriteriaChange}
                                    required>
                                    <option value="">Select Criteria</option>
                                    <option value="leadallocation">Lead Allocation</option>
                                    <option value="groupallocation">Group Allocation</option>
                                    <option value="specialrank">Special Rank</option>

                                </select>                            
                            </div>

                            {/* <div className="form-field">
                                <label for="criteria">Criteria</label>
                                <select name="criteria" id="criteria" onChange={this.handleCriteriaChange}>
                                    <option value="">Select</option>
                                    <option value="booking">Booking</option>
                                    <option value="agent">Agent</option>
                                </select>                            
                            </div> */}
                            
                                {/* <div className = "form-field">
                                    <label for="IncentiveMonth">Month</label>
                                    <input 
                                        type="date" 
                                        id="IncentiveMonth"
                                        name="IncentiveMonth"
                                        onChange={this.handleIncentiveMonthChange}
                                        required></input>
                                </div> */}
                            {/* } */}
                        </div>             
                
                        <Button label={'Create'} onConfirm={this.handleAdd} classname="primary-btn" type="submit" />
                    </form>
                </TitlePanel>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    rulesetnames: state?.Ruleset?.rulesets?.map(r => r.name),
    ruleset: state?.Ruleset?.rulesets[state?.Ruleset?.activeRuleset]
})

const mapDispatchToProps = dispatch => ({
    addRuleset: (payload) => dispatch(addRuleset(payload))
});

CreateRulesetContainer.defaultProps = {
    addRuleset: () => false,
    rulesetnames: [],
    ruleset: {}
};

CreateRulesetContainer.propTypes = {
    rulesetnames: PropTypes.array,
    addRuleset: PropTypes.func,
    ruleset: PropTypes.object,
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateRulesetContainer);