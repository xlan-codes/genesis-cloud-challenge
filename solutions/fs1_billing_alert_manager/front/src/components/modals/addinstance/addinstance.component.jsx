import React, { useState, useEffect } from 'react';
import { Button, Modal, Label, FormFeedback, ModalHeader, ModalBody, ModalFooter, Input, FormGroup, Form } from 'reactstrap';
import imageService from '../../../services/image.service';
import instanceService from '../../../services/instance.service';
import sshService from '../../../services/ssh.service';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CreateInstance = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);
  const [instanceTypes, setInstanceTypes] = useState([]);
  const [images, setImages] = useState([]);
  const [sshkeys, setSSHKeys] = useState([]);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    imageService.getImages().then((res) => {
      setImages(res.images);
    }).catch((error) => {
      setImages([]);
    });
    sshService.getSSHKeys().then((res) => {
      setSSHKeys(res.ssh_keys)
    }).catch((error) => {
      setSSHKeys([]);
    });
    instanceService.getInstanceType().then((res) => {
      setInstanceTypes(res);
    }).catch((error) => {
      setInstanceTypes([]);
    });
  }, [])


  const toggle = () => setModal(!modal);

  const onSubmit = () => {
    instanceService.createInstance(formData).then((res) => {
      toggle();
    }).catch((err) => {
      toast(err.message);
    })
  };

  const handleChange = (event) => {
    setFormData({...formData,[event.target.name]: event.target.value});
  }

  return (
    <div>
      <Button className="btn" color="primary" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
      <ModalHeader toggle={toggle}>Create Instance</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
                <Label>Image</Label>
                <Input type="select" name="image_id" id="image" onChange={handleChange}
                                valid={ (formData.image_id !==null && formData.image_id !== undefined) ?  true: false }
                                invalid={ (formData.image_id === null || formData.image_id === undefined) ?  true: false }
                >
                  <option></option>
                  {images.map((im, i) => <option key={i+'3'} value={im.id}>{im.name}-{im.type}</option>)}
                </Input>
                <FormFeedback>
                  Please select a image
                </FormFeedback>
            </FormGroup>
            <FormGroup>
                <Label>
                  Instance Type
                </Label>
                <Input type="select" name="type" id="instanceType" onChange={handleChange}
                  valid={ (formData.type !==null && formData.type !== undefined) ?  true: false }
                  invalid={ (formData.type === null || formData.type === undefined) ?  true: false }
                >
                  <option></option>
                  {instanceTypes.map((it, i) => <option key={i+'2'} value={it.instanceTypeIndentifier}>{it.instanceType}</option>)}
                </Input>
                <FormFeedback>
                  Please select a instance type
                </FormFeedback>
            </FormGroup>
            <FormGroup>
                <Label>Host</Label>
                <Input type="text" name="hostname" placeholder="Hostname" onChange={handleChange}
                  valid={ (formData.hostname !==null && formData.hostname !== undefined) ? true: false }
                  invalid={ (formData.hostname === null || formData.hostname === undefined) ? true: false }
                />
                <FormFeedback>
                  Please write a hostname
                </FormFeedback>
            </FormGroup>
            <FormGroup>
                <Label>SSH Key</Label>
                <Input type="select" name="ssh_key_ids" id="sshkey" onChange={handleChange}
                  valid={ (formData.ssh_key_ids !==null && formData.ssh_key_ids !== undefined) ? true: false }
                  invalid={ (formData.ssh_key_ids === null || formData.ssh_key_ids === undefined) ? true : false }                
                >
                  <option></option>
                  {sshkeys.map((sk, i) => <option key={i+'1'} value={sk.id}>{sk.name}</option>)}
                </Input>
                <FormFeedback>
                  Please select a SSH Key
                </FormFeedback>
            </FormGroup>
            <FormGroup>
              <Button onClick={onSubmit} className="btn" color="primary">Create Instance</Button>{' '}
            </FormGroup>
          </Form>
        </ModalBody>
        <ToastContainer />
        <ModalFooter>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default CreateInstance;