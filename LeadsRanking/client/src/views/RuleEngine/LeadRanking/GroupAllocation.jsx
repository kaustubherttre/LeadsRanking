import React, { Component, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from 'axios'
import Axios from 'axios';
import { Button } from 'reactstrap';
import SweetAlert from "react-bootstrap-sweetalert";


const GroupAllocation = (props) => {

    const { columns, unRankedLeads, display } = props;
    const [unrankedLeadsloading, setunrankedLeadsloading] = useState(false)
    const [rankAllocated, setrankAllocated] = useState(false)
    const [leadsData, setleadsData] = useState([])
    const [groupData, setgroupData] = useState([])
    const [unrankedLeads, setunrankedLeads] = useState([])
    const [overflow, setOverFlow] = useState(false)
    const [overflowStartTime, setOverFlowStartTime] = useState(0)
    const [isAgent, setIsAgent] = useState(false)
    const [isGroup, setIsGroup] = useState(false)
    const [isSpecialRank, setIsSpecialRank] = useState(false)

    const handleAllocateClick = (e) => {

        e.preventDefault()

        setunrankedLeadsloading(true)

        const URL = `http://localhost:8080/api/v1/ruleengine/processGroupAllocation`;
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
                setunrankedLeadsloading(false)
                setunrankedLeads(data)
                setrankAllocated(true)
                setIsAgent(false)
                setIsGroup(true)
                setIsSpecialRank(false)
            })
            .catch((err) => console.log(err));



    }


    const sendLeadInfo = (unrankedLeads) => {



        const URL = `http://localhost:8080/api/v1/ruleengine/saveLeadInfo`;

        const data = unrankedLeads.map((item) => {
            return {
                leadid: item.leadid,
                leadrank: item.leadrank,
                Group: item.group,
                isgroup: isGroup,
                isagent: isAgent,
                isspecialRank: isSpecialRank,
                isOverflow: overflow,
                overflowStartTime: overflowStartTime
            }
        })

        let result = axios.post(URL, data).then((res) => console.log(res))

        return result

    }
    const handleClose = () =>{
        console.log("close")
    }

    const handleClick = () => {
        sendLeadInfo(unrankedLeads) 
        return (alert("File Uploaded"))
    }

    const handleOverFlow = (e) => {

        setOverFlow(true)
    }

    const setTime = (e) => {
        e.preventDefault()

        setOverFlowStartTime(e.target.value)


    }








    return (
        <>
            <br />
            <Button color="primary"
                size="lg"
                onClick={handleAllocateClick}
                style={{ marginRight: "auto", display: "block", marginLeft: "auto" }}
            >
                Group Allocation
            </Button>
            <br />

            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>IsOverFlow</span> &nbsp;
                <input style={{ float: 'left', borderColor: 'red', border: '3px' }} type="checkbox" onChange={handleOverFlow} />
                {overflow && <div >
                    <span>Overflow start Time</span> &nbsp;
                    <input type="time" onChange={setTime} />
                </div>}

                {rankAllocated && <Button color="secondary" onClick={handleClick} style={{ float: "right" }}>Upload Lead Data</Button>}
            </div>
            <br />


            <DataTable
                columns={columns}
                data={rankAllocated == false ? unRankedLeads: unrankedLeads}
                pagination
                striped
                highlightOnHover
                progressPending={unrankedLeadsloading}
                title={"Group Allocation"}
            /> 

        </>
    )
}

export default GroupAllocation