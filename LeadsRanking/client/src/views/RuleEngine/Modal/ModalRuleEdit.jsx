import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { editRuleDetailsAction, editRuleDetails } from '../../../store/actions/RuleActions/Ruleset';

import { 
    Col,
    Row,
    Button,
    Modal, 
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input,
    FormGroup,
    Label, 
    FormText 
  } from 'reactstrap';

const ModalRuleEdit = ({
    modalState,
    modalRule,
    history
  }) => {
  let  id = '', priorityValue = 1;
  // month = '',
  if(modalRule !== null && modalRule._id !== undefined ) {
    id = modalRule._id;
  }

  if(modalRule !== null && modalRule.ruleId !== undefined ) {
    id = modalRule.ruleId;
  }
  if(modalRule !== null && modalRule.priority !== undefined ) {
    priorityValue = modalRule.priority;
  }
   
  
  // if(modalRule !== null &&
  //   modalRule.searchKeys !== undefined && 
  //     modalRule.searchKeys.length > 0) {
  //       month = modalRule.searchKeys[1].value;
  //     }
  let [modal, setModal] = useState(modalState);
  let [name, setName] = useState(modalRule.name);
  let [description, setDescription] = useState(modalRule.description);
  // let [incentiveMonth, setIncentiveMonth] = useState(month);
  let [ruleId, setRuleId] = useState(id);
  let [isActive , setIsActive] = useState(modalRule.isActive);
  let [priority, setPriority] = useState(priorityValue);
   
  let dispatch = useDispatch();

  const toggle = () => {
    setModal(!modal);
  }

  useEffect(() => {
    toggle();
    setName(modalRule.name);
    setDescription(modalRule.description);
    setRuleId(id);
    // setIncentiveMonth(month);
    setIsActive(modalRule.isActive);
    setPriority(priority);
  }, [modalState]);

  const handleRuleEdit = async () => {
    // incentiveMonth
    let data = {name, description , isActive, priority};
    let result = await editRuleDetails(data, ruleId);
    dispatch(editRuleDetailsAction(data));
    history.push('./Ruleset');
  }

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  }

  // const handleIncentiveMonthChange = (e) => {
  //   setIncentiveMonth(e.target.value);
  // }

  const handlePriorityChange = (e) => {
    let priority = parseInt(e.target.value);
    setPriority(priority);
  }
   
  const handleIsActiveChange = (e) => {
    setIsActive(e.target.checked);
  }

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>
          Edit Ruleset 
          <input 
            type="checkbox" 
            style={{
              marginLeft: "12rem",
              marginRight : "1rem",
              width: "15px",
              height: "15px"
            }}
            defaultChecked={isActive}
            onClick={handleIsActiveChange}
          />
          Active
        </ModalHeader>
        
      <ModalBody>

      <FormGroup>
        <Label for="RuleName">Name</Label>
        <Input 
          type="text" 
          name="RuleName" 
          id="RuleName"
          value={name}
          onChange={handleNameChange}
        />
      </FormGroup>

      <FormGroup >
        <Label for="Description" >Description</Label>
        <Col sm={14}>
          <Input
            type="textarea"
            name="Description"
            id="Description"
            value={description}
            onChange={handleDescriptionChange}
          />
        </Col>
      </FormGroup>
      <Row form>
        {/* <Col md={6}>
          <FormGroup >    
              <Label for="IncentiveMonth" >IncentiveMonth</Label>
              <Input
                type="date" 
                name="IncentiveMonth"
                id="IncentiveMonth"
                value={incentiveMonth}
                onChange={handleIncentiveMonthChange}
              />       
            
          </FormGroup>
        </Col> */}
        <Col md={6}>
          <FormGroup >                 
              <Label for="Priority" >Priority</Label>
              <Input
                type="number" 
                name="Priority"
                id="Priority"
                value={priority}
                placeholder="Priority"
                onChange={handlePriorityChange}
              />       
            
          </FormGroup>
        </Col>
      </Row>

        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleRuleEdit}>Edit Rule</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalRuleEdit;