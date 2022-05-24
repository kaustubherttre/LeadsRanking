import React from "react";
import { useState } from "react";
import Tabs from '../Tabs/Tabs';
import LeadRanking from "./LeadRanking";
import GroupAllocation from "./GroupAllocation";


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

const LeadsRanking = (props) =>{
    const [activeTab, setActiveTab] = useState("Lead Ranking")

    const setActiveTabCreate = (tab) => {
        setActiveTab(tab);
    }
    return (
        <>
         <Tabs tabs = {tabs} onConfirm = {setActiveTab} activeTab = {activeTab} key = {activeTab}/>
        {activeTab === "Lead Ranking" && <LeadRanking/>}

        {activeTab === "Group Allocation" && <GroupAllocation/>}
        
        
        </>
    )
}

export default LeadsRanking