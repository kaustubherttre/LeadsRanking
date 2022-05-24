import axios from 'axios';
import * as ActionTypes from './ActionTypes';
import config from "../../../config.jsx";

export const add = (attribute) => {
    const payload = { attribute };
    return ({ type: ActionTypes.ADD_ATTRIBUTE, payload});
}

export const update = (attribute, index) => {
    const payload = { attribute, index };

    return ({ type: ActionTypes.UPDATE_ATTRIBUTE, payload});
}

export const remove = (attribute, index) => {
    const payload = { attribute, index };

    return ({ type: ActionTypes.REMOVE_ATTRIBUTE, payload});
}

export const reset = () => {
    return ({type: ActionTypes.RESET_ATTRIBUTE})
}


export const handleAttribute = (action, attribute, index) => (dispatch) => {
    switch(action) {
        case 'ADD':
            return dispatch(add(attribute));
        case 'UPDATE':
            return dispatch(update(attribute, index));
        case 'REMOVE':
            return dispatch(remove(attribute, index));
        case 'RESET':
            return dispatch(reset());
    }
};


export const getFacts = async () => {
    try{
        let facts = await axios.get(config.api.base_url + '/ruleengine/facts');
        return facts.data.data;
    } catch (err) {
        console.log(err);
    }
}

export const getRuleParams = async () => {
    try{
        let ruleParams = await axios.get(config.api.base_url + '/ruleengine/getRuleParams');
        return ruleParams.data.data;
    } catch (err) {
        console.log(err);
    }
}

export const getFactsDataSql = async (key, datasource) => {
    try{
        let response = await axios.get(config.api.base_url + '/ruleengine/getFactsData/?key='+key+'&datasource='+datasource);
        return response.data.data;
    } catch (err) {
        console.log(err);
    }
}
 