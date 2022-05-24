import { combineReducers } from 'redux';
import AppReducer from './AppReducer';
import RulesetReducer from './RulesetReducer';

const reducers = combineReducers({
    app: AppReducer,
    ruleset: RulesetReducer,
});

export default reducers;