
/* eslint-disable no-undef */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PageTitle from '../Title/PageTitle';
import Tabs from '../Tabs/Tabs';
import Attributes from '../Attributes/Attributes';
import Decisions from '../Decisions/Decision';
import ValidateRules from '../Validate/ValidateRules';
import { handleAttribute } from '../../../store/actions/RuleActions/Attributes';
import { handleDecision } from '../../../store/actions/RuleActions/Decisions';
import Banner from '../Panel/Banner';
import * as Message from '../../../Constants/RuleConstants/Messages';
import { groupBy } from 'lodash/collection';
import RuleErrorBoundary from '../Error/RulesetError';
import SweetAlert from 'react-bootstrap-sweetalert';
import Button from '../Button/Button';
import { getFacts, getRuleParams, getFactsDataSql } from '../../../store/actions/RuleActions/Attributes';
import { editRule, addFacts } from '../../../store/actions/RuleActions/Ruleset';

const tabs = [{name: 'Facts'}, {name: 'Decisions'}, {name: 'Validate'}, {name: 'Generate'}];
class RulesetContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
          activeTab: 'Facts',
          generateFlag: false,
          facts: [],
          ruleParams: [],
          saveRuleAlert: false,
          factData: {}
        };
        this.generateFile = this.generateFile.bind(this);
        this.cancelAlert = this.cancelAlert.bind(this);
        this.handleSaveRule = this.handleSaveRule.bind(this);
        this.handleTab = this.handleTab.bind(this);
    }

    async componentDidMount() {

      getFacts().then((data) => {
        this.setState({ facts: data});
      }).catch(err => {
        // console.log(err);
      });

      getRuleParams().then(data => {
        this.setState({ ruleParams: data[0].params});
      }).catch(err => {
        // console.log(err);
      });

    }
     
    async handleTab(tabName) {
        this.setState({activeTab: tabName});
    }

    generateFile() {
      const { ruleset } = this.props;
      const fileData = JSON.stringify(ruleset, null,'\t');
      const blob = new Blob([fileData], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.download = ruleset.name +'.json';
      link.href = url;
      link.click();
      this.setState({ generateFlag: true });
    }

    async handleSaveRule() {
      let { decisions, ruleId, _id } = this.props.ruleset;
     
      if(ruleId === undefined){
        ruleId = _id;
      }
      this.setState({ saveRuleAlert: true});
      let result = await editRule(decisions, ruleId);
    }

    cancelAlert() {
      this.setState({ generateFlag: false });
      this.setState({ saveRuleAlert: false });
    }

    successAlert = () => {
      const { name } = this.props.ruleset;
      return (
        <SweetAlert
          success
          title={"File generated!"}
          onConfirm={this.cancelAlert}
        > {`${name} rule is succefully generated at your default download location`}
        </SweetAlert>);
    }

    saveRuleSuccessAlert = () => {
      const { name } = this.props.ruleset;
      return (
        <SweetAlert
          success
          title={"Rule Saved!"}
          onConfirm={this.cancelAlert}
        > {`${name} rule is succefully saved.`}
        </SweetAlert>);
    }


    render() {
      const { 
        attributes,
        decisions,
        name,
        description,
        searchKeys,
        ruleId,
        criteria
      } = this.props.ruleset;

      const { ruleParams } = this.state;
      const { factData } = this.props;

      console.log('factData', factData);

      const indexedDecisions = decisions && decisions.length > 0 && 
          decisions.map((decision, index) => ({ ...decision, index }));

      let outcomes;
      if (indexedDecisions && indexedDecisions.length > 0) {
          outcomes = groupBy(indexedDecisions, data => data.event.type);
      }
      let filteredFactsCriteria = this.state.facts;
      // .filter((fact) => {
      //   if(criteria === 'final') {
      //     return fact.criteria === 'agent';
      //   } else {
      //     return fact.criteria === criteria;
      //   }
      // });

      for (let index = 0; index < filteredFactsCriteria.length; index++) {
        let fact = filteredFactsCriteria[index];
        if( factData !==null && factData !== undefined && factData.AttributeValues) {
          let obj = factData.AttributeValues;
          if(fact.source === 'api' && fact.name in obj){
            fact.values = obj[fact.name];
          }
        }
        
      }
      let filteredFactsIsActive = filteredFactsCriteria.filter((fact)=>fact.isActive);
      console.log('filteredFactsCriteria', filteredFactsCriteria)
      //const message = this.props.updatedFlag ? Message.MODIFIED_MSG : Message.NO_CHANGES_MSG;
      const message =  Message.MODIFIED_MSG;
      const saveMessage = Message.SAVE_MSG;
      return <div>
        {/* <RuleErrorBoundary> */}
          <PageTitle name={name} description={description} />
          <Tabs tabs={tabs} onConfirm={this.handleTab} activeTab={this.state.activeTab} />
          <div className="tab-page-container">
              {this.state.activeTab === 'Facts' &&
                <Attributes
                  attributes={filteredFactsCriteria} 
                  handleAttribute={this.props.handleAttribute }
                />
              }

              {this.state.activeTab === 'Decisions' && 
                <Decisions 
                  decisions={indexedDecisions || []}
                  attributes={filteredFactsIsActive} 
                  handleDecisions={this.props.handleDecisions}
                  ruleId={ruleId}
                  description={description}
                  outcomes={outcomes}
                  ruleParams={ruleParams}
                />
              }

              {this.state.activeTab === 'Validate' && 
                <ValidateRules
                  attributes={filteredFactsCriteria} 
                  decisions={decisions}
                />
              }

              {this.state.activeTab === 'Generate' && 
              <div>
                <Banner 
                message={message}
                ruleset={this.props.ruleset}
                onConfirm={this.generateFile}
                />
                 <Banner 
                message={saveMessage}
                ruleset={this.props.ruleset}
                onConfirm={this.handleSaveRule}
                />
{/* 
                <Button
                  label="Save Rule"
                  classname="btn-primary"
                  onConfirm={this.handleSaveRule}
                 /> */}
              </div>
                 
              }
              {this.state.saveRuleAlert && this.saveRuleSuccessAlert()}
              {this.state.generateFlag && this.successAlert()}
          </div>
        {/* </RuleErrorBoundary> */}
      </div>
    }
}

RulesetContainer.propTypes = {
  ruleset: PropTypes.object,
  handleAttribute: PropTypes.func,
  handleDecisions: PropTypes.func,
  updatedFlag: PropTypes.bool,
  runRules: PropTypes.func,
  factData: PropTypes.object
}

RulesetContainer.defaultProps = {
  ruleset: {},
  handleAttribute: () => false,
  handleDecisions: () => false,
  updatedFlag: false,
  factData: {}
}

const mapStateToProps = (state) => ({
  ruleset: state?.Ruleset?.rulesets[state?.Ruleset?.activeRuleset],
  updatedFlag: state?.Ruleset?.updatedFlag,
  factData: state?.Ruleset?.factData
});

const mapDispatchToProps = (dispatch) => ({
  handleAttribute: (operation, attribute, index) => dispatch(handleAttribute(operation, attribute, index)),
  handleDecisions: (operation, decision) => dispatch(handleDecision(operation, decision))
});

export default connect(mapStateToProps, mapDispatchToProps)(RulesetContainer);