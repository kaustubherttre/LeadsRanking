import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isContains } from '../../utility/RuleUtils/StringUtils';
import { uploadRuleset } from 'store/actions/RuleActions/Ruleset';

//Components
import Pagination from 'react-bootstrap/Pagination';
import RuleErrorBoundary from './Error/RulesetError';
import ModalRuleEdit from './Modal/ModalRuleEdit';
import SweetAlert from 'react-bootstrap-sweetalert';

//CSS
// import 'bootstrap/dist/css/bootstrap.css';
import '../../assets/css/RulesListStyles.css';


//Icons 
import copyIcon from '../../assets/icons/copyicon.png';
import editIcon from '../../assets/icons/editicon.png';
import { addRule, updateRulesetIndex } from '../../store/actions/RuleActions/Ruleset';

class RulesTable extends Component {
    constructor(props) {
        super(props);
        const len = props.data.length;
        const lastPage = Math.floor((len + 9) / 10);

        const rulesArray = props.data.map((item) => {
            const searchKeys = item['searchKeys'];
            let  product='';
            // incentiveMonth='',
            let id = '';
            if(item !== null && item.ruleId !== undefined) {
                id = item.ruleId;
            }

            for (var i = 0; i < searchKeys.length; i++) {
                // if (searchKeys[i] !== null &&
                //       searchKeys[i].key !== undefined &&
                //         searchKeys[i]['key'] == 'IncentiveMonth') {
                //             incentiveMonth = searchKeys[i]['value'];

                // } else 
                if (searchKeys[i] !== null &&
                            searchKeys[i].key !== undefined && 
                              searchKeys[i]['key'] == 'Product') {
                                product = searchKeys[i]['value'];
                }
            }
            
            return {
                id: item['_id'],
                name: item['name'],
                description: item['description'],
                // incentiveMonth: incentiveMonth,
                product: product,
                criteria : item['criteria'],
                item : item,
            }
        });

        this.state = {
            rulesArray: rulesArray,
            filteredRules: rulesArray,
            currentPage: 1,
            firstPage: 1,
            lastPage: lastPage,
            allPages: Array.from({ length: lastPage }, (_, index) => index + 1),
            searchText: '',
            validSearch: true,
            // incentiveMonth: '2021-07-01',
            productMap: {
                '0': 'All',
                '2': 'Health',
                '7': 'Term',
                '115': 'Investment',
                '117': 'Motor'
            },
            productSelected: '0',
            // useTimeFrame: false,
            modalState: true,
            modalRule: {},
            criteria:"null",
            isActive:"null",
            copyAlert: false,
            successAlert : false
        }

        this.handleFirst = this.handleFirst.bind(this);
        this.handleLast = this.handleLast.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handleCopy = this.handleCopy.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
        // this.handleUseTimeFrame = this.handleUseTimeFrame.bind(this);
        this.filterAndSetState = this.filterAndSetState.bind(this);
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

    handleSearchChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        }, this.filterAndSetState);
    }

    // handleUseTimeFrame(event) {
    //     this.setState({
    //         useTimeFrame: event.target.checked,
    //     }, this.filterAndSetState);
    // }

    async handleCopy() {
        var item = this.state.ruleToBeCopied;
        if(item){
            let copyName = item.name + " copy";
            let uploadItem = Object.assign({}, item);
            uploadItem.name = copyName;
            uploadItem.isActive = false;
            delete uploadItem["_id"];
            this.props.uploadRuleset(uploadItem);
            let result = await addRule(uploadItem);  
            this.setState({
                copyAlert : false,
                successAlert : true,
                successMsg : "Rule copied",
            })          
        }
        console.log("Copy CLicked");
        
    }

    handleEdit = (event, rule) =>  {
        event.preventDefault();
        this.setState({ modalRule: rule, modalState: !this.state.modalState });
        this.props.updateRulesetIndex(rule.name);
    }

    filterAndSetState() {
        const { isFiltered, filteredRules } = this.filterRules();
        const len = filteredRules.length;
        const lastPage = Math.floor((len + 9) / 10);

        var validSearch = true;
        if (isFiltered == true && filteredRules.length == 0) {
            validSearch = false;
        }

        this.setState({
            filteredRules: filteredRules,
            currentPage: 1,
            firstPage: 1,
            lastPage: lastPage,
            allPages: Array.from({ length: lastPage }, (_, index) => index + 1),
            validSearch: validSearch,
        });
    }

    filterRules() {
        // , incentiveMonth, useTimeFrame
        const {searchText  , productSelected ,criteria ,  isActive} = this.state;
        if (searchText.length == 0 && 
            // useTimeFrame == false && 
            productSelected == '0' && 
            criteria == "null" && 
            isActive == "null") 
        {
            return { isFiltered: false, filteredRules: this.state.rulesArray };
        }
        const filteredRules = this.state.rulesArray.filter(rule => {
            return (((isContains(rule.name, searchText) || isContains(rule.description, searchText)) || searchText.length == 0)
                // && ((useTimeFrame == true && rule.incentiveMonth == incentiveMonth) || useTimeFrame == false)
                && (rule.product == productSelected || productSelected == '0')
                && (rule.criteria == criteria || criteria == "null")
                && ((rule.item.isActive == true && isActive == "true") || (rule.item.isActive == false && isActive == "false") || (isActive == "null"))
                );
        }
        );
        return { isFiltered: true, filteredRules: filteredRules };
    }

    setCopyAlert(e,rule){
        e.preventDefault();
        this.setState({
            ruleToBeCopied : rule,
            copyAlert : true
        });
    }

    cancelAlert = () => {
        this.setState({ copyAlert: false, successAlert: false ,successMsg:"" });
    }

    copyRuleAlert = () => {
        return (<SweetAlert
            warning
            showCancel
            confirmBtnText="Yes, Copy it!"
            title="Are you sure?"
            onConfirm={this.handleCopy}
            onCancel={this.cancelAlert}
            focusCancelBtn
          >
            Copy
          </SweetAlert>)
    }

    successAlert = () => {
        return (<SweetAlert
            success
            title={this.state.successMsg}
            onConfirm={this.cancelAlert}
          >
          </SweetAlert>);
    }

    alert = () => {
        return (<div>
             {this.state.copyAlert && this.copyRuleAlert()}
             {this.state.successAlert && this.successAlert()}
         </div>);
    }

    render() {
        const { modalRule, modalState , validSearch ,currentPage} = this.state;
        const lowerIndex = (currentPage - 1) * 10;
        const rulesArray = this.state.filteredRules;
        console.log(this.state);
        return (
            <React.Fragment>
                {this.alert()}
                { this.state.modalRule.name!==undefined && 
                <ModalRuleEdit 
                    modalState={modalState}
                    modalRule={modalRule}
                    history = {this.props.historyProps}
                />
                }
                <div className="search-container">
                    <div className="container-1">
                            <div className="container-1-box"> 
                                <label>Search</label>
                                <input 
                                name="searchText" 
                                value={this.state.searchText} 
                                placeholder="Search by Name"
                                onChange={this.handleSearchChange} 
                                />
                            </div>
                            {/* <input 
                                type="checkbox" 
                                name="useTimeFrame" 
                                style={{width :"20px" , height : "20px" , marginTop:"5px" , marginRight:"10px"}}
                                value={this.state.useTimeFrame} 
                                onChange={this.handleUseTimeFrame} 
                            /> */}
                            {/* <div className="container-1-box">
                                <label 
                                >Month</label>
                                <input 
                                type="date" 
                                name="incentiveMonth" 
                                value={this.state.incentiveMonth} 
                                onChange={this.handleSearchChange} 
                                />
                            </div> */}
                    </div>
                    <div className="container-2">
                        <div>
                            <label>Criteria</label>
                            <select 
                                name="criteria" 
                                value={this.state.criteria} 
                                onChange={this.handleSearchChange}
                            >
                                <option key={"default"} value={"null"}>Please Select...</option>
                                <option key={"leadallocation"} value={"leadallocation"}>LeadAllocation</option>
                                <option key={"leadallocation"} value={"groupallocation"}>GroupAllocation</option>
                            </select>
                        </div>
                        <div>
                            <label>Product</label>
                            <select 
                                name="productSelected" 
                                value={this.state.productSelected} 
                                onChange={this.handleSearchChange}
                            >
                                {Object.entries(this.state.productMap).map((value, key) => <option key={key} value={value[0]}>{value[1]}</option>)}
                            </select>
                        </div>
                        <div>
                            <label>Active</label>
                            <select 
                                name="isActive" 
                                value={this.state.isActive} 
                                onChange={this.handleSearchChange}
                            >
                                <option key={"default"} value={"null"}>All</option>
                                <option key={"Active"} value={"true"}>Active</option>
                                <option key={"Inactive"} value={"false"}>Inactive</option>
                            </select>
                        </div>
                    </div>
                </div>

                {!validSearch && <h4>No rules found</h4>}


                {validSearch && 
                <div className="RulesListTable">
                    <table>
                        <thead>
                            <tr key='Heading'>
                                <th itemScope="col">Rule No.</th>
                                <th itemScope="col">name</th>
                                {/* <th itemScope="col"> Month</th> */}
                                <th itemScope="col">Description</th>
                                <th itemScope="col">Priority</th>
                                <th itemScope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                rulesArray.slice((this.state.currentPage - 1) * 10, this.state.currentPage * 10).map((item, i) => 
                                    {
                                        const rule = item.item;
                                        // console.log("next");
                                        // console.log(rule);
                                        return (
                                            <tr key={lowerIndex + i}>
                                                <td>{lowerIndex + i + 1}</td>
                                                <td>{item.name}</td>
                                                {/* <td>{item.incentiveMonth}</td> */}
                                                <td>{item.description}</td>
                                                <td>{item.item.priority}</td>
                                                <td>
                                                    <img src={editIcon} 
                                                        width="13" 
                                                        height="13" 
                                                        style={{ margin: "12px" }} 
                                                        onClick={(e) => this.handleEdit(e,rule)} 
                                                    />
                                                    
                                                    <img 
                                                        src={copyIcon} 
                                                        width="13" 
                                                        height="13" 
                                                        onClick={(e) => this.setCopyAlert(e,rule)} 
                                                    />
                                                                                                
                                                </td>
                                            </tr>
                                        )
                                    }
                                )
                            }
                        </tbody>
                    </table>
                </div>
                }
                
                {validSearch && <Pagination>
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
                </Pagination>}


            </React.Fragment>
        );
    }
}

class RulesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            historyProps: props.history
        }
    }
    render() {
        console.log(this.props.ruleset);
        if (this.props.ruleset.length > 0) {
            return (<React.Fragment>
                <RuleErrorBoundary>
                    <h4>RulesList</h4>
                    <RulesTable 
                        data={this.props.ruleset}
                        uploadRuleset = {this.props.uploadRuleset}
                        updateRulesetIndex = {this.props.updateRulesetIndex}
                        historyProps = {this.state.historyProps}
                    />
                </RuleErrorBoundary>
            </React.Fragment>)
        } else {
            return (<h4>Loading Data...</h4>)
        }
    }
}

RulesList.propTypes = {
    ruleset: PropTypes.array,
    uploadRuleset: PropTypes.func,
    updateRulesetIndex: PropTypes.func,
    historyProps: PropTypes.object
}

RulesList.defaultProps = {
    ruleset: [],
    uploadRuleset: () => false,
    updateRulesetIndex: () => false,
    historyProps: {}
}

const mapStateToProps = (state) => ({
    ruleset: state?.Ruleset?.rulesets,
});


const mapDispatchToProps = (dispatch) => ({
    uploadRuleset: (ruleset) =>  dispatch(uploadRuleset(ruleset)),
    updateRulesetIndex: (name) => dispatch(updateRulesetIndex(name)) 
});

export default connect(mapStateToProps , mapDispatchToProps)(RulesList);