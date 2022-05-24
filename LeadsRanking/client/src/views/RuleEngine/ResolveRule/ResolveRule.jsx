import axios from 'axios';
import React, { Component } from 'react';
import { Form , Row , Col , Button } from 'react-bootstrap';
import BeatLoader from "react-spinners/BeatLoader";
import config from './../../../config';

class ResolveRule extends Component{
    constructor(props){
        super(props);
        this.state = {
            body : "",
            loading : false,
            response : false,
            columns : [],
            data:[],
        }
        this.handleBodyChange = this.handleBodyChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleBodyChange(event){
        event.preventDefault();
        this.setState({
            [event.target.name] : event.target.value,
        });
    }
    
    async handleSubmit(event){
        event.preventDefault();

        this.setState({
            loading : true,
        });
        
        let headers = {'Content-Type': 'application/json'};
        let url = config.api.base_url + '/ruleengine/resolveRules';
        debugger;
        let res = await axios.post(url, this.state.body, { headers: headers} );
        
        let { events } = res.data.data;
        this.setState({
            loading : false,
            response : true,
            data :  events,
        });
        
    }


    render(){
        return (
            <React.Fragment>
                <h4>Resolve Rules</h4>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <textarea 
                            style={{
                                width: "95%",
                                padding: "10px",
                                margin: "10px"
                            }}
                            name="body" 
                            value={this.state.agentId} 
                            onChange = {this.handleBodyChange}
                            rows="15"
                        />
                        <Button type="submit">
                            Resolve
                        </Button>
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
               <h4>Results:</h4>
                {this.state.response && !this.state.loading &&
                    <textarea 
                        style={{
                            width: "95%",
                            padding: "10px",
                            margin: "10px"
                        }}
                        rows="20"
                    >
                        {JSON.stringify(this.state.data,null,4)}
                    </textarea>
                }
            </React.Fragment>
        )
    }

}

export default ResolveRule;