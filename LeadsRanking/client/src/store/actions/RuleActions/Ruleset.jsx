import * as ActionTypes from './ActionTypes';
import { updateState } from './App';
import config from "../../../config.jsx";
import axios from 'axios';

export const uploadRuleset = (ruleset)  => (dispatch) => {
    dispatch(updateState('open'));
    return dispatch({
        type: ActionTypes.UPLOAD_RULESET,
        payload: { ruleset }
    });
}

export const addRuleset = (payload) => (dispatch) => {
    dispatch(updateState('open'));
    return dispatch({
        type: ActionTypes.ADD_RULESET,
        payload: payload
    });
}

export const updateRulesetIndex = (name) => {
    return ({
        type: ActionTypes.UPDATE_RULESET_INDEX,
        payload: { name }
    })
}

export const addRulesetsFromDb = (name) => {
    return ({
        type: ActionTypes.ADD_RULESETS_DB,
        payload: name
    })
}

export const addFactsValuesSql = (factData) => {
   
    return ({
        type: ActionTypes.ADD_FACTS_DATA_SQL,
        payload: factData
    })
}

export const editRuleDetailsAction = (details) => {
    console.log('details', details);
    return ({
        type: ActionTypes.EDIT_RULE_DETAILS,
        payload: details
    })
}

export const addRule = async (data) => {
    try{
        let headers = {'Content-Type': 'application/json'};
        let url = config.api.base_url + '/ruleengine/addRule';
        let result = await axios.post(url, data, { headers: headers} );
        return result;
    } catch (err) {
        console.log(err);
    }
}

export const getRules = async () => {
    try {
        let url = config.api.base_url + '/ruleengine/getRules';
        let rules = await axios.get(url);
        return rules.data.data;
    } catch(err) {
        console.log(err);
    }
}

export const editRule = async (data, ruleId) => {
    try{
        let headers = {'Content-Type': 'application/json'};
        let url = config.api.base_url + '/ruleengine/editRule/' + ruleId;
        console.log('url edit', url);
        let result = await axios.patch(url, data, { headers: headers} );
        return result;
    } catch (err) {
        console.log(err);
    }
}

export const editRuleDetails = async (data, ruleId) => {
    try{
        let headers = {'Content-Type': 'application/json'};
        let url = config.api.base_url + '/ruleengine/editRuleDetails/' + ruleId;
        console.log('url edit', url);
        let result = await axios.patch(url, data, { headers: headers} );
        return result;
    } catch (err) {
        console.log(err);
    }
}

export const toggleFactIsActive = async (data) => {
    try{
        let headers = {'Content-Type': 'application/json'};
        let url = config.api.base_url + '/ruleengine/toggleFactIsActive/';
        console.log('url edit', url);
        let result = await axios.post(url, data, { headers: headers} );
        return result;
    } catch (err) {
        console.log(err);
    }
}

export const calculateBookingIncentive = async (bookingId) => {
    try {
        let url = config.api.base_url + '/ruleengine/bookingIncentive/?leadid='+ bookingId;
        let booking = await axios.get(url);
        if(booking !== null &&
            booking.data !== undefined &&
                booking.data.status !== undefined &&
                    booking.data.status == 200) {
            return booking.data.data;
        } else {
            return null;
        }
    } catch(err) {
        console.log(err);
        return null;
    }
}

export const resolveRules = async (data) => {
    try{
        let headers = {'Content-Type': 'application/json'};
        let url = config.api.base_url + '/ruleengine/resolveRules';
        let result = await axios.post(url, data, { headers: headers} );
        return result;
    } catch (err) {
        console.log(err);
    }
}