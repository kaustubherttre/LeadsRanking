import React, {Component} from 'react';
import { connect } from 'react-redux';
import Title from '../Title/Title';
import NavigationPanel from '../Navigation/NavigationPanel';
import AppRoutes from '../Routes/AppRoutes';
import PropTypes from 'prop-types';
import { updateRulesetIndex, addRulesetsFromDb } from '../../../store/actions/RuleActions/Ruleset';
import { updateState } from '../../../store/actions/RuleActions/App';
import { createHashHistory } from 'history';
import { getRules } from '../../../store/actions/RuleActions/Ruleset';
import "../../../assets/scss/rule-engine.scss";

class RuleEngineApp extends Component {

    constructor(props){
        super(props);
        this.state = {rules: []};
        // const history = createHashHistory();
        // if (!this.props.loggedIn) {
        //     // history.push('./home');
        // }
    }

    componentDidMount() {
        getRules().then(data => {
            this.setState({rules: data});
            this.props.handleAddRulesets(data);
        })
    }
    componentWillUnmount() {
        if (this.unlisten){
            this.unlisten();
        }
    }

    render() {
        const closednav = this.props.navState !== 'open';
        return(
            <React.Fragment>
                <Title
                    title={'Lead Ranking and Allocation'}
                />

                <NavigationPanel
                    closedState={closednav}
                    updateState={this.props.updateState}
                    activeIndex={this.props.activeIndex}
                    rulenames={this.props.rulenames}
                    setActiveRulesetIndex={this.props.setActiveRulesetIndex}
                    loggedIn={this.props.loggedIn}
                />

                <AppRoutes
                    closedState={closednav}
                    loggedIn={this.props.loggedIn}
                />
            </React.Fragment>
        )
    }
}

RuleEngineApp.defaultProps = {
    rulenames: [],
    setActiveRulesetIndex: () => false,
    navState: undefined,
    activeIndex: 0,
    loggedIn: false,
    updateState: () => false,
};

RuleEngineApp.propTypes = {
    rulenames: PropTypes.array,
    setActiveRulesetIndex: PropTypes.func,
    navState: PropTypes.string,
    loggedIn: PropTypes.bool,
    updateState: PropTypes.func,
    activeIndex: PropTypes.number,
}


const mapStateToProps = (state, ownProps) => ({
    navState: state?.App?.navState,
    rulenames: state?.Ruleset?.rulesets?.map(r => r.name),
    loggedIn: state?.app?.loggedIn,
    activeIndex: state?.Ruleset?.activeRuleset,
    ownProps
});

const mapDispatchToProps = (dispatch) => ({
    handleClick: () => {
        return false;
    },
    setActiveRulesetIndex: (name) => dispatch(updateRulesetIndex(name)),
    updateState: (val) => dispatch(updateState(val)),
    handleAddRulesets: (rules) => dispatch(addRulesetsFromDb(rules))
});

export default connect(mapStateToProps, mapDispatchToProps)(RuleEngineApp);