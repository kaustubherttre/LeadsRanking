import { combineReducers } from "redux";
import AppReducer from './RuleReducer/AppReducer';
import RulesetReducer from './RuleReducer/RulesetReducer';

const rootReducer = combineReducers({
    App : AppReducer,
    Ruleset : RulesetReducer
});

export default rootReducer;
