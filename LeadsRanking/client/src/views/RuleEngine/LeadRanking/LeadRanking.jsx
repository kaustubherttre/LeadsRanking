import React, { Component } from 'react';
import ReactDOM from "react-dom";
import DataTable from "react-data-table-component";
import { Button } from 'reactstrap';
import Axios from 'axios';
import Tabs from '../Tabs/Tabs';
import GroupAllocation from './GroupAllocation';
import SpecialRank from './SpecialRank';

const tabs = [
    {
        name: "Lead Ranking"
    },

    {
        name: "Group Allocation"
    },
    {
        name: "Special Rank"
    }
]

class LeadRanking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            unrankedLeadsloading: false,
            rankAllocated: false,
            leadsData: [],
            groupData: [],
            unrankedLeads: [],
            activeTab: "Lead Ranking",
            isAgent: false,
            isGroup: false,
            isSpecialRank: false,
            isOverflow: false,
            overflowStartTime: 0

        }

        this.handleLeadsClick = this.handleLeadsClick.bind(this);
        this.handleTab = this.handleTab.bind(this);
        this.sendLeadInfo = this.sendLeadInfo.bind(this)
    }

    handleTab(curTab) {
        this.setState({
            activeTab: curTab
        })
    }

    componentDidMount() {
        // getLeadsData
        const URL = `http://localhost:8080/api/v1/ruleengine/getLeadsData`;
        Axios.get(URL)
            .then((res) => {
                console.log(res);
                this.setState({
                    unrankedLeadsloading: true
                })
                const data = res.data.data.map((item) => {
                    return {
                        leadid: item.LeadID,
                        leadrank: item.LeadRank,
                        annualincome: item.AnnualIncome,
                        age: item.Age,
                        lead_source: item.LeadSource,
                        utm_source: item.Utm_source,
                        group: item.Group,
                        city: item.CityID
                    }
                })
                this.setState({
                    unrankedLeadsloading: false,
                    unrankedLeads: data
                })
            })
            .catch((err) => console.log(err));
    }

    handleLeadsClick(e) {
        e.preventDefault();
        console.log(e);
        this.setState({
            unrankedLeadsloading: true,
        })
        const URL = `http://localhost:8080/api/v1/ruleengine/leadRankingAllocation`;
        Axios.get(URL)
            .then((res) => {
                console.log(res);
                const data = res.data.data.map((item) => {
                    return {
                        leadid: item.LeadID,
                        leadrank: item.LeadRank,
                        annualincome: item.AnnualIncome,
                        age: item.Age,
                        lead_source: item.LeadSource,
                        utm_source: item.Utm_source,
                        group: item.Group,
                        city: item.CityID
                    }
                })
                this.setState({
                    unrankedLeadsloading: false,
                    unrankedLeads: data,
                    rankAllocated: true,

                })
            })
            .catch((err) => console.log(err));

    }

    sendLeadInfo(unrankedLeads) {



        const URL = `http://localhost:8080/api/v1/ruleengine/saveLeadInfo`;

        const data = unrankedLeads.map((item) => {
            return {
                leadid: item.leadid,
                leadrank: item.leadrank,
                Group: item.group,
                isagent: false,
                isgroup: false,
                isspecialRank: false,
                isOverflow: false,
                overflowStartTime: 0
            }
        })

        let result = Axios.post(URL, data).then((res) => console.log(res))

        return result

    }

    handleClick = () => {
        this.sendLeadInfo(this.state.unrankedLeads)
        return (alert("File Uploaded"))
    }




    render() {
        const unrankedLeadsColumns = [
            {
                name: 'Lead Id',
                selector: row => row.leadid,
            },
            {
                name: 'Lead Rank',
                selector: row => row.leadrank,
            },
            {
                name: 'Group',
                selector: row => row.group,
            },
            {
                name: 'Annual Income',
                selector: row => row.annualincome,
            },
            {
                name: 'Age',
                selector: row => row.age,
            },
            {
                name: 'UTM Source',
                selector: row => row.utm_source,
            },
            {
                name: 'Lead Source',
                selector: row => row.lead_source,
            },
            {
                name: 'City',
                selector: row => row.city,
            },
        ];

        console.log(this.state.rankAllocated)



        return (
            <>
                <React.Fragment>
                    {this.state.rankAllocated && <Tabs tabs={tabs} onConfirm={this.handleTab} activeTab={this.state.activeTab} />}
                    {this.state.activeTab === 'Group Allocation' && <GroupAllocation columns={unrankedLeadsColumns} unRankedLeads={this.state.unrankedLeads} />}
                    {this.state.activeTab === 'Special Rank' && <SpecialRank columns={unrankedLeadsColumns} unRankedLeads={this.state.unrankedLeads} />}

                </React.Fragment>
                {this.state.activeTab === 'Lead Ranking' && <Button color="primary"
                    size="lg"
                    onClick={this.handleLeadsClick}
                    style={{ marginRight: "auto", display: "block", marginLeft: "auto" }}
                >
                    Lead Ranking Allocation
                </Button>} <br />
                {this.state.rankAllocated && this.state.activeTab == "Lead Ranking" && <Button color="secondary" onClick={this.handleClick} style={{ float: "right" }}>Upload Lead Data</Button>}
                <br />

                {this.state.activeTab == "Lead Ranking" && <DataTable
                    columns={unrankedLeadsColumns}
                    data={this.state.unrankedLeads}
                    pagination
                    striped
                    highlightOnHover
                    progressPending={this.state.unrankedLeadsloading}
                    title={"Leads Table"}
                />}
            </>
        );
    }
}

export default LeadRanking;
