import React, { useState, useEffect } from 'react';
import {HashRouter, Switch, Route } from 'react-router-dom';
import HomeContainer from '../Home/HomeContainer';
import RulesetContainer from '../Ruleset/RulesetContainer';
import CreateRulesetContainer from '../Ruleset/CreateRulesetContainer';
import RulesList from '../RulesList';
import ResolveRule from '../ResolveRule/ResolveRule';
import LeadRanking from '../LeadRanking/LeadRanking';
import PropTypes from 'prop-types';
import { getFacts,getFactsDataSql } from '../../../store/actions/RuleActions/Attributes';
import { useDispatch } from 'react-redux';

const AppRoutes = (props) => {

    let [AttributeValues, setAttributeValues] = useState([]);
    let dispatch = useDispatch();
    let closedState = props.closedState;

    useEffect(async () => {
        let facts = await getFacts();
        let AttributeValues = {};
        let mapActualName = {};
        for (let index = 0; index < facts.length; index++) {
            const attribute = facts[index];
            mapActualName[attribute.name] = attribute.actualname;
            if (attribute.field === 'dropdown' && attribute.source === 'api') {
                let datasource = "";
                if(attribute.datasource !== undefined) {
                    datasource = attribute.datasource
                }
                let data = await getFactsDataSql(attribute.key, datasource);
                if ( data !== null && data.key !== undefined) {
                    AttributeValues[attribute.name] = data.data;
                }
            };
        }
        dispatch({type: 'ADD_FACTS_DATA_SQL', payload: { AttributeValues, mapActualName }});
        
    }, []);

   
         
    return (<div className={`main-container ${props.closedState ? 'closed': 'open'}`}>
        <HashRouter>
            <Switch>
                <Route path="/" exact component={HomeContainer} />
                <Route path="/Ruleset" exact component={RulesetContainer} />
                <Route path="/CreateRuleset" exact component={CreateRulesetContainer} />   
                <Route path="/RulesList" exact component={RulesList} />
                <Route path="/Resolve" exact component={ResolveRule} />
                <Route path="/leadRanking" exact component={LeadRanking} />
            </Switch>   
        </HashRouter>
    </div>);

};

AppRoutes.defaultProps = {
    closedState: false,
    loggedIn: false,
};

AppRoutes.propTypes = {
    closedState: PropTypes.bool,
    loggedIn: PropTypes.bool,
}

export default AppRoutes;