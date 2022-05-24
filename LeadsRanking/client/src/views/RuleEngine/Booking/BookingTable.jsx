import React, { Component } from 'react';
import '../../../assets/css/RulesListStyles.css';
import BeatLoader from "react-spinners/BeatLoader";
import { calculateBookingIncentive } from '../../../store/actions/RuleActions/Ruleset';


function Details(props) {
    const responseData = props.data;
    return (
        <>
        <div className="booking-incentive-info">
            <div>
                <label htmlFor="result"> Booking APE</label>
                <h3>{props.ape}</h3>
            </div>
            <div>
                <label htmlFor="result"> Result</label>
                <h3>{props.result}</h3>
            </div>
        </div>
        <div className="RulesListTable">
            <table>
                <thead>
                    <tr>
                        <th itemScope="col">Event</th>
                        <th itemScope="col">Expression</th>
                        <th itemScope="col">Weight / Amount</th>
                        <th itemScope="col">Rule Name</th>
                        <th itemScope="col">Rules Description</th>
                        <th itemScope="col">Calculated APE</th>
                        <th itemScope="col">Priority</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        responseData.map(function (item, i) {

                            let data = JSON.parse(item);

                            return (
                                <tr>
                                    <td>{i + 1}</td>
                                    <td>{data.event.params.EXPRESSION}</td>
                                    <td>{data.event.params.weight}{data.event.params.amount}</td>
                                    <td>{data.name}</td>
                                    <td>{data.event.params.description}</td>
                                    <td>{data.event.params.value}</td>
                                    <td>{data.priority}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
        </>
    );
}

class BookingTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookingId: '',
            submitClicked: false,
            loading : false,
            searchResponse: {},
            data: [],
            searchData: {},
            loading: false,
            result: '',
            rulesApplied: false
        }
        this.onChangeBookingId = this.onChangeBookingId.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    onChangeBookingId(event) {
        this.setState({
            bookingId: event.target.value
        })
    }

    async handleSubmit(event) {
        console.log("Handling submit");
        event.preventDefault();
        this.setState({ loading: true});
        let response = await calculateBookingIncentive(this.state.bookingId);

        if(response === null) {
            this.setState({
                loading: false,
                rulesApplied: false,
                submitClicked: true,
            })
        } else {
            this.setState({
                data: response?.rules?.results,
                result: response?.result,
                ape: response?.facts?.ape,
                submitClicked: true,
                loading: false,
                rulesApplied: true
            });
        }
        
    }
    render() {
        const bookingIdStatus = this.state.submitClicked;
        return (
            <React.Fragment>
                <form 
                    onSubmit={this.handleSubmit}
                    style={{ backgroundColor: "#ddd", borderRadius: "5px", margin: "10px" }}
                >
                    <label
                        style = {{margin: "10px"}}
                    >
                        Booking Id    
                    </label>

                    <input 
                        type="text" 
                        name="bookingId" 
                        value={this.state.bookingId} 
                        onChange={this.onChangeBookingId} 
                        style={{ border: "none", borderRadius: "5px", height: "30px", width: "300px" , margin: "10px" }} 
                        required 
                    />

                    <button 
                        type="submit" 
                        style={{ border: "none", borderRadius: "5px", height: "30px", margin: "10px" , color: "#73879c" }} 
                    >
                        Submit
                    </button>
                </form>
                {this.state.loading && 
                    <div style={{textAlign:"center"}}>
                        <BeatLoader size={20}
                            color={"#3498db"}
                            loading={true}
                        />
                    </div>
                }
                {bookingIdStatus && this.state.rulesApplied &&  <Details data={this.state.data} result={this.state.result} ape={this.state.ape}/>}
                {!this.state.rulesApplied && bookingIdStatus && <h4>No Rules Applied / Invalid Booking 😥</h4>}
                 
            </React.Fragment>
        )
    }
}

export default BookingTable;