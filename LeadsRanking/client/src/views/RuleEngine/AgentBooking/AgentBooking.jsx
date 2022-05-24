import axios from 'axios';
import React, { Component } from 'react';
import { Form , Button } from 'react-bootstrap';
import BeatLoader from "react-spinners/BeatLoader";
import Pagination from 'react-bootstrap/Pagination';
import config from './../../../config';


class AgentBooking extends Component{
    constructor(props){
        super(props);
        this.state = {
            agentId : '',
            incentiveMonth : "2021-09",
            alertInvalidAgentId : false,
            alertInvalidDate : false,
            bookings : [],
            currentPage: 1,
            firstPage: 1,
            lastPage: 1,
            allPages: Array.from({ length: 1 }, (_, index) => index + 1),
            response : false,
            loading : false,
        }
        this.handleAgentIdChange = this.handleAgentIdChange.bind(this);
        this.handleIncentiveMonthChange = this.handleIncentiveMonthChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.handleFirst = this.handleFirst.bind(this);
        this.handleLast = this.handleLast.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }
    
    handleClick(event) {
        const x = parseInt(event.target.innerText);
        this.setState({ currentPage: x });
    }

    handleFirst(event) {
        this.setState({ currentPage: 1 });
    }

    handleLast(event) {
        this.setState({ currentPage: this.state.lastPage });
    }

    handleNext(event) {
        const next = Math.min(this.state.lastPage, this.state.currentPage + 1);
        this.setState({
            currentPage: next,
        })
    }

    handlePrev(event) {
        const prev = Math.max(1, this.state.currentPage - 1);
        this.setState({
            currentPage: prev,
        })
    }

    handleAgentIdChange(event){
        event.preventDefault();
        this.setState({
            agentId : event.target.value,
            alertInvalidAgentId : false,
            alertInvalidDate : false,
        });
    }
    
    handleIncentiveMonthChange(event){
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
            alertInvalidAgentId : false,
            alertInvalidDate : false,
        });
    }

    handleSubmit(event){
        event.preventDefault();
        let startDate = this.state.incentiveMonth + "-01";
        let endDate = this.state.incentiveMonth + "-31";
        this.setState({
            loading : true,
        })
        const URL = `${config.api.base_url}/ruleengine/agentBookings/?startDate=${startDate}&endDate=${endDate}&agentId=${this.state.agentId}`;
        axios.get(URL)
        .then((res)=>{
            const len = res.data.data.length;
            const lastPage  = Math.floor((len+29)/30);
            this.setState({
                bookings : res.data.data,
                currentPage : 1,
                lastPage : lastPage,
                allPages: Array.from({ length: lastPage }, (_, index) => index + 1),
                loading : false,
                response : true,
            });
        });

    }


    render(){
        console.log(this.state);
        const currentPage = this.state.currentPage;
        const lowerIndex = (currentPage - 1) * 30;
        return (
            <React.Fragment>
                <h4>Agent Bookings</h4>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <table>
                            <tr>
                                <td>
                                    <label>Agent Id</label>    
                                    <input 
                                        name="agentId" 
                                        type = "string"
                                        value={this.state.agentId}
                                        placeholder="PW00012"
                                        onChange = {this.handleAgentIdChange}
                                    />
                                </td>
                                <td>
                                    <label 
                                        style={{marginLeft:"50px"}}
                                    >Incentive Month</label>    
                                    <input 
                                        name="incentiveMonth" 
                                        type = "month"
                                        value={this.state.incentiveMonth}
                                        onChange = {this.handleIncentiveMonthChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <Button type="submit">
                                        Search
                                    </Button>
                                </td>
                            </tr>
                        </table>
                    </form>
                </div>
                {this.state.loading &&
                    <div style={{textAlign:"center"}}>
                        <BeatLoader size={20}
                            color={"#3498db"}
                            loading={true}
                        />
                    </div>
                }
                <div>
                    {!this.state.loading && this.state.alertInvalidAgentId && <h1>Invalid Agent Id</h1>}
                    {!this.state.loading && this.state.alertInvalidDate && <h1>Invalid Date</h1>}
                </div>
                {!this.state.loading && this.state.bookings.length>0 && !this.state.alertInvalidAgentId && !this.state.alertInvalidDate &&
                <div className="RulesListTable">
                    <table>
                        <thead>
                            <tr key='Heading'>
                                <th itemScope="col">S No.</th>
                                <th itemScope="col">Booking Id</th>
                                <th itemScope="col"> Booking Date</th>
                                <th itemScope="col">Insurer Name</th>
                                <th itemScope="col">Booking Status</th>
                                <th itemScope="col">APE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.bookings.slice((this.state.currentPage - 1) * 30, this.state.currentPage * 30).map((item,i) => 
                                    {
                                        return (
                                            <tr key={lowerIndex + i}>
                                                <td>{lowerIndex + i + 1}</td>
                                                <td>{item['leadid']}</td>
                                                <td>{item['bookingdate']}</td>
                                                <td>{item['insurershortname']}</td>
                                                <td>{item['status']}</td>
                                                <td>{item['ape']}</td>
                                            </tr>
                                        )
                                    }
                                )
                            }
                        </tbody>
                    </table>
                </div>
                }
                {!this.state.loading && this.state.bookings.length>0 && 
                    <Pagination>
                        <Pagination.First onClick={this.handleFirst} />
                        <Pagination.Prev onClick={this.handlePrev} />
                        {
                            this.state.allPages.map(item => {
                                if (Math.abs(item - this.state.currentPage) <= 3) {
                                    return <Pagination.Item 
                                            key={item} 
                                            value={item} 
                                            active={item == this.state.currentPage} 
                                            onClick={this.handleClick}
                                            >
                                                {item}
                                            </Pagination.Item>
                                }
                            })
                        }
                        <Pagination.Next onClick={this.handleNext} />
                        <Pagination.Last key={this.state.lastPage} onClick={this.handleLast} />
                    </Pagination>
                }
                {!this.state.bookings.length>0 && this.state.response && !this.state.loading &&
                    <h4>No bookings found</h4>
                }
            </React.Fragment>
        )
    }

}

export default AgentBooking