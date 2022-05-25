import React, { Component, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Axios from "axios";
import { Button } from 'reactstrap';
const SpecialRank = (props) => {
    const { unRankedLeads, columns } = props
    const [overflow, setOverFlow] = useState(false)
    const [overflowStartTime, setOverFlowStartTime] = useState(0)
    const [isAgent, setIsAgent] = useState(false)
    const [isGroup, setIsGroup] = useState(false)
    const [isSpecialRank, setIsSpecialRank] = useState(false)

    const sendLeadInfo = (unrankedLeads) => {

        setIsAgent(false)
        setIsGroup(false)
        setIsSpecialRank(true)

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

        let result = Axios.post(URL, data).then((res) => console.log(res))

        return result

    }

    const handleClick = () => {
        sendLeadInfo(unRankedLeads)
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
        
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>IsOverFlow</span> &nbsp;
                <input style={{ float: 'left', borderColor: 'red', border: '3px' }} type="checkbox" onChange={handleOverFlow} />
                {overflow && <div >
                    <span>Overflow start Time</span> &nbsp;
                    <input type="time" onChange={setTime} />
                </div>}
                <Button color="primary" onClick={handleClick} style={{ float: "right" }}>Upload Lead Data</Button>

                
            </div>
            
            <br />
            <br />

            <DataTable
                columns={columns}
                data={unRankedLeads}
                pagination
                striped
                highlightOnHover
                title={"Special Rank"} />
        </>
    )
}

export default SpecialRank