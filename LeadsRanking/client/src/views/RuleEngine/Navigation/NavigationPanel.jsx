import React, { Component } from 'react';
import NavLinks from './NavigationLink';
import PropTypes from 'prop-types';
import { createHashHistory } from 'history';
import FooterLinks from '../Footer/Footer';
import footerLinks from '../../../data-objects/FooterLinks.json';
import { isContains } from '../../../utility/RuleUtils/StringUtils';
import InputField from '../Forms/InputField';

const navmenu = [
    { name: 'Create Rules', navigate: './CreateRuleset', iconClass: "icon fa fa-plus-square-o", linkClass: 'navmenu'},
    { name: 'Rules List', navigate: './RulesList', iconClass: "icon fa fa-list", linkClass: 'navmenu' },
    // { name: 'Process Booking', navigate: './Booking', iconClass: "icon fa fa-spinner", linkClass: 'navmenu' },
    // { name: 'Agent Bookings', navigate: './AgentBooking', iconClass: "icon fa fa-list", linkClass: 'navmenu' },
    // { name: 'Upload Rules', navigate: './', iconClass: "icon fa fa-cloud-upload", linkClass: 'navmenu' },
    { name: 'Resolve Rules', navigate: './Resolve', iconClass: "icon fa fa-spinner", linkClass: 'navmenu' },
    { name: 'Lead Ranking', navigate: './leadRanking', iconClass: "icon fa fa-spinner", linkClass: 'navmenu' },
];

class NavigationPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            links: [],
            txtToSearch:''
        };
        this.handleNavLink = this.handleNavLink.bind(this);
        this.handleNavBtn = this.handleNavBtn.bind(this);
        this.handleRuleSearch = this.handleRuleSearch.bind(this);
        this.handleRulesListNav = this.handleRulesListNav.bind(this);
    }

    handleNavBtn() {
        const history = createHashHistory();
        history.push('./CreateRuleset');
    }

    handleNavLink(name) {
        const history = createHashHistory();
        this.props.setActiveRulesetIndex(name);
        history.push('./Ruleset');

    }
    handleRuleSearch(e){
        let text = e.target.value;
        this.setState({ txtToSearch: text });
    }

    handleRulesListNav(e){
        e.preventDefault();
        const history = createHashHistory();
        history.push('./RulesList');
    }
    
    handleProcessBookingNav(e){
        e.preventDefault();
        const history = createHashHistory();
        history.push('./Booking');
    }

    render() {
        const { closedState, loggedIn, rulenames } = this.props;
        const { txtToSearch } = this.state;

        const filteredRuleNames = rulenames.filter(name => isContains(name, txtToSearch));
        
        let rulesetLink = filteredRuleNames.length > 0 ?
         [{ name: 'Ruleset', sublinks: filteredRuleNames, iconClass:"rules-icon", linkClass: 'link-heading'}] : [];

        rulesetLink = rulesetLink.concat(navmenu);

        //let sideNav = loggedIn && closedState ? 'open' : 'closed';
        let sideNav = closedState ? 'open' : 'closed';

        return (
            <div className={`nav-container ${!closedState ? 'open': 'closed'}`}>
                <div className="sidebar-navigation">
                    <div className="menu-bar">
                        <a href="" onClick={(e) => { e.preventDefault();  this.props.updateState(sideNav)}}> <span className="close-icon fa fa-reorder" ></span></a>
                    </div>
                   
                   
                </div>
                {/* <div className="ruleslist-link">
                       <a href="" onClick={(e) => this.handleRulesListNav(e)}> RulesList</a>
                       <a href="" onClick={(e) => this.handleProcessBookingNav(e)}> Process Booking</a>

                    </div> */}
                
                {!closedState && <div className="links-section">
                    <InputField
                        value={this.state.txtToSearch}
                        onChange={this.handleRuleSearch}
                        placeholder="Search"
                    />
                    <div>
                        <NavLinks 
                            links={rulesetLink}
                            onConfirm={this.handleNavLink}
                            activeIndex={this.props.activeIndex}
                        />
                    </div>
                 </div>
                }
            </div>
        )
    }
}

NavigationPanel.defaultProps = {
    closedState: false,
    rulenames: [],
    setActiveRulesetIndex: () => false,
    loggedIn: false,
    updateState: () => false,
    activeIndex: 0,
};

NavigationPanel.propTypes = {
    closedState: PropTypes.bool,
    rulenames: PropTypes.array,
    setActiveRulesetIndex: PropTypes.func,
    loggedIn: PropTypes.bool,
    updateState: PropTypes.func,
    activeIndex: PropTypes.number,
}

export default NavigationPanel;