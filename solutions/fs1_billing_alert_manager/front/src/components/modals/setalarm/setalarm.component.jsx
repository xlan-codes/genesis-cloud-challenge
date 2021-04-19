import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Button, Modal, Label, ModalHeader, ModalBody, ModalFooter, Input, FormGroup, Form } from 'reactstrap';
import alarmService from '../../../services/alarm.service';

const SetAlarm = (props) => {
  const {
    buttonLabel,
    className,
    instance
  } = props;

  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({});

  const toggle = () => setModal(!modal);

  const handleChange = (event) => {
    setFormData({...formData,[event.target.name]: event.target.value});
  }

  const setAlarm = () => {
    formData.instance = instance.id
    formData.status = true;
    alarmService.setAlarm(formData).then((res) => {
      toggle();
    }).catch((error) => {
      toast(error.message);
    });
  };

  return (
    <div>
      <Button className="btn" color="primary" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
      <ModalHeader toggle={toggle}>Set billing alarm</ModalHeader>
        <ModalBody>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <Form>
            <FormGroup>
                <Label>Threshold</Label>
                <Input type="number" name="threshold" placeholder="Threshold" onChange={handleChange} /> 
            </FormGroup>
            <FormGroup>
                <Label>
                    <Input type="checkbox" name="destroy" onChange={handleChange} /> {' '} Destroy Instance
                </Label>
            </FormGroup>
            <FormGroup>
                <Label>
                    <Input type="checkbox" name="notification" onChange={handleChange} /> {' '} Alert by email, slack
                </Label>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button className="btn" color="primary" onClick={setAlarm}>Set billing alarm</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default SetAlarm;