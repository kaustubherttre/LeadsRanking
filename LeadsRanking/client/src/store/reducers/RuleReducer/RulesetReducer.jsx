import * as ActionTypes from '../../actions/RuleActions/ActionTypes';
import { cloneDeep } from 'lodash/lang';
import { findIndex } from 'lodash/array';

const initialState = {
    rulesets: [],
    activeRuleset: 0,
    updatedFlag: false,
    uploadedRules: [],
    factData: {}
}


const replaceRulesetByIndex = (rulesets, targetset, index) => {
     return [ ...rulesets.slice(0, index), targetset, ...rulesets.slice(index + 1)];
}


function ruleset(state = initialState, action='') {

    switch(action.type) {

        case ActionTypes.UPLOAD_RULESET: {

            const { ruleset } = action.payload;
            const rulesets = state.rulesets.concat(ruleset);
             return { ...state, rulesets: cloneDeep(rulesets),  uploadedRules: cloneDeep(rulesets)}
        }

        case ActionTypes.ADD_RULESET: {

            let payload = action.payload;
            const rulset = { ...payload, attributes: [], decisions: [] };
            const count = state.rulesets.length === 0 ? 0 : state.rulesets.length;
            return { ...state, rulesets: state.rulesets.concat(rulset),  activeRuleset: count}
        }

        case ActionTypes.UPDATE_RULESET_INDEX: {

            const { name } = action.payload;
            const index = findIndex(state.rulesets, { name });
             return { ...state, activeRuleset: index}
        }
        
        case ActionTypes.ADD_DECISION: {

            const { condition } = action.payload;
            const activeRuleSet =  state.rulesets[state.activeRuleset];
            activeRuleSet.decisions = activeRuleSet.decisions.concat(condition);

            return { ...state,
                updatedFlag: true,
                rulesets: replaceRulesetByIndex(state.rulesets, activeRuleSet, state.activeRuleset)}
        }

        case ActionTypes.UPDATE_DECISION: {
            const { condition, decisionIndex } = action.payload;
            const activeRuleSet =  { ...state.rulesets[state.activeRuleset] };
 
            activeRuleSet.decisions[decisionIndex] = condition;
 
             return { ...state,
                updatedFlag: true,
                rulesets: replaceRulesetByIndex(state.rulesets, activeRuleSet, state.activeRuleset)}
         }
        case ActionTypes.REMOVE_DECISION: {

            const { decisionIndex } = action.payload;
            const activeRuleSet =  { ...state.rulesets[state.activeRuleset] };
 
            activeRuleSet.decisions.splice(decisionIndex, 1);
 
             return { ...state,
                     updatedFlag: true,
                     rulesets: replaceRulesetByIndex(state.rulesets, activeRuleSet, state.activeRuleset)}
        }

        case ActionTypes.REMOVE_DECISIONS: {

            const { outcome } = action.payload;
            const activeRuleSet =  { ...state.rulesets[state.activeRuleset] };
 
            activeRuleSet.decisions = activeRuleSet.decisions.filter(decision => decision.event && decision.event.type !== outcome);
 
             return { ...state,
                     updatedFlag: true,
                     rulesets: replaceRulesetByIndex(state.rulesets, activeRuleSet, state.activeRuleset)}
        }

        case ActionTypes.COPY_DECISIONS: {            
            let { decision } = action.payload;
            const activeRuleSet =  { ...state.rulesets[state.activeRuleset] };
            let copy = cloneDeep(decision);
            let type = decision.event.type;
            copy.event.type = type + ' copy';
            activeRuleSet.decisions = activeRuleSet.decisions.concat(copy);
        
             return { ...state,
                     updatedFlag: true,
                     rulesets: replaceRulesetByIndex(state.rulesets, activeRuleSet, state.activeRuleset)}
        }

        case ActionTypes.ADD_ATTRIBUTE: {
           const { attribute } = action.payload;
           const activeRuleSet =  { ...state.rulesets[state.activeRuleset] };
           activeRuleSet.attributes.push(attribute);

            return { ...state,
                    updatedFlag: true,
                    rulesets: replaceRulesetByIndex(state.rulesets, activeRuleSet, state.activeRuleset)}
        }
            
        case ActionTypes.UPDATE_ATTRIBUTE: {
            const { attribute, index } = action.payload;
            const activeRuleSet =  { ...state.rulesets[state.activeRuleset] };
            activeRuleSet.attributes.splice(index, 1, attribute);

            return { ...state,
                updatedFlag: true,
                rulesets: replaceRulesetByIndex(state.rulesets, activeRuleSet, state.activeRuleset)}
        }

        case ActionTypes.REMOVE_ATTRIBUTE: {

            const { index } = action.payload;
            const activeRuleSet =  { ...state.rulesets[state.activeRuleset] };
            activeRuleSet.attributes.splice(index, 1);

            return { ...state,
                updatedFlag: true,
                rulesets: replaceRulesetByIndex(state.rulesets, activeRuleSet, state.activeRuleset)}
        }

        case ActionTypes.RESET_ATTRIBUTE: {
            const activeRuleSet =  { ...state.rulesets[state.activeRuleset] };
            if(state.uploadedRules[state.activeRuleset] && state.uploadedRules[state.activeRuleset].attributes) {
                activeRuleSet.attributes = cloneDeep(state.uploadedRules[state.activeRuleset].attributes);

            return { ...state,
                rulesets: replaceRulesetByIndex(state.rulesets, activeRuleSet, state.activeRuleset)}
            }
            return { ...state };
        }

        case ActionTypes.RESET_DECISION: {
            const activeRuleSet =  { ...state.rulesets[state.activeRuleset] };
            if(state.uploadedRules[state.activeRuleset] && state.uploadedRules[state.activeRuleset].decisions) {
                activeRuleSet.decisions = cloneDeep(state.uploadedRules[state.activeRuleset].decisions);

            return { ...state,
                rulesets: replaceRulesetByIndex(state.rulesets, activeRuleSet, state.activeRuleset)}
            }
            return { ...state };
        }

        case ActionTypes.ADD_RULESETS_DB: {
           return { ...state, rulesets: action.payload }
        }

        case ActionTypes.ADD_FACTS_DATA_SQL: {           
            return { ...state, factData: action.payload }
        }

        case ActionTypes.EDIT_RULE_DETAILS: {
            // , incentiveMonth
            let { name, description ,isActive, priority } = action.payload;
            const activeRuleSet =  state.rulesets[state.activeRuleset];
            activeRuleSet.name = name;
            activeRuleSet.description = description;
            // if(activeRuleSet.searchKeys.length > 1) {
            //     activeRuleSet.searchKeys[1].value = incentiveMonth;
            // }
            activeRuleSet.isActive = isActive;
            activeRuleSet.priority = priority;

            return { ...state,
                updatedFlag: true,
                rulesets: replaceRulesetByIndex(state.rulesets, activeRuleSet, state.activeRuleset)
                } 
            }

        default:
            return { ...state };
    }
}

export default ruleset;