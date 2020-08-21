import React from "react";
import { Form, Button, Col } from "react-bootstrap";
import * as emailjs from "emailjs-com";
import Dialog from '@material-ui/core/Dialog';
import { ToastsContainer, ToastsStore } from "react-toasts";
import { MDBBtn } from "mdbreact";
import Bttn from '@material-ui/core/Button';
import "../App.css";


export default function Signup(props) {
  const validEmailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const validPhoneRegex = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;

  const [isLogin] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [params, setParams] = React.useState({
    newFirstName: null, newLastName: null, number: null, newEmail: null, newPassword: null
  })
  const [errors, setErrors] = React.useState({
    newFirstName: '', newLastName: '', number: '', newEmail: '', newPassword: ''
  })

  const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      // if we have an error string set valid to false
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
  }
  
  const handleClickOpen = () => {
      setOpen(true);
  };

  const handleClose = () => {
      setOpen(false);
  };

const handleChange = event => {
  event.preventDefault();
  const { name, value } = event.target;
  //SIGN UP VALIDATION//
  switch (name) {
    case 'newFirstName':
      value.length < 2
        ? setErrors({...errors,[name]: 'First name must be at least 2 characters long!'})
        : setErrors({...errors,[name]: ''});
      break;
    case 'newLastName':
      value.length < 2
        ? setErrors({...errors,[name]: 'Last name must be at least 2 characters long!'})
        : setErrors({...errors,[name]: ''});
      break;
    case 'newEmail': 
      validEmailRegex.test(value)
        ? setErrors({...errors,[name]: ''})
        : setErrors({...errors,[name]: 'Email is not valid!'});
      break;
    case 'newPassword': 
      value.length < 8
        ? setErrors({...errors,[name]: 'Password must be at least 8 characters long!'})
        : setErrors({...errors,[name]: ''});
      break;
    case 'number':
      validPhoneRegex.test(value)
        ? setErrors({...errors,[name]: ''})
        : setErrors({...errors,[name]: 'Number is not valid!'});
      break;
    default:
      break;
  }

  setParams({
    ...params, [name]: value}
  )

  const logErrors = ({errors, [name]: value}) => {
    console.log(errors)
  }
}

  const onChange1 = (e) => {
    [e.target.name] = e.target.value
  }


  const refreshPage = () => {
    window.location.reload(false);
  }

  const handleSubmit = event => {
    event.preventDefault();
    const templateId = "template_FNZvTKs9";
    const templateParams = {
      newFirstName: params.newFirstName,
      newEmail: params.newEmail
    }

    if(validateForm(errors)) {
      console.info('Valid Form')
    } else {
      console.error('Invalid Form')
    }
    sendFeedback(templateId, templateParams);
  };

  const sendFeedback = (templateId, variables) => {
    emailjs.send(
      "gmail",
      templateId,
      variables,
      "user_wzos8lPUKwPXPkAOaRTiX"
    ).then(res => {
    	console.log('Email successfully sent!')
  	})
    .catch(err => console.error('Email failed to send!', err),
    //resetForm()
    );
  }

    return (
        <div class = "Signup">
          <Form>
            <Bttn Button variant="contained" disableElevation style={{
                        color: "white",
                        fontSize: "18px",
                        backgroundColor: "#12517A",
                        outline: 'none'}}
                        onClick={handleClickOpen}>
                <a
                >
                    Sign Up
                </a>
            </Bttn>

            <Dialog
              style={{ zIndex: 50000 }}
              open={open} 
              onClose={handleClose}
            >
              <Form
                  id="signup"
                  className="button"
                  style={{ padding: "20px" }}
                  onSubmit={handleSubmit}
              >
                  <Form.Group controlId="Header" className="space">
                  <h1 style={{ textAlign: "center" }}>Sign Up</h1>
                  </Form.Group>
                  <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label style={{ fontSize: 18 }}>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={params.newEmail}
                        name="newEmail"
                        id="newEmail"
                        //onChange={onChange}
                        onChange={handleChange}
                      />
                      {errors.newEmail.length > 0 && 
                        <span 
                        className='error'
                        style= {{ fontSize: 10}
                        }>
                          {errors.newEmail}</span>}
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label style={{ fontSize: 18 }}>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={params.newPassword}
                        name="newPassword"
                        onChange={handleChange}
                        />
                        {errors.newPassword.length > 0 && 
                        <span 
                        className='error'
                        style= {{ fontSize: 10}}>
                        {errors.newPassword}</span>}
                  </Form.Group>
                  </Form.Row>

                  <Form.Group controlId="formGridFirstName">
                  <Form.Label style={{ fontSize: 18 }}>First Name</Form.Label>
                  <Form.Control
                      placeholder="Jane"
                      value={params.newFirstName}
                      name="newFirstName"
                      id="newFirstName"
                      //onChange={onChange1}
                      onChange={handleChange}
                  />
                  {errors.newFirstName.length > 0 && 
                  <span 
                  className='error'
                  style= {{ fontSize: 10}
                  }>{errors.newFirstName}</span>}
                  </Form.Group>

                  <Form.Group controlId="formGridLastName">
                  <Form.Label style={{ fontSize: 18 }}>Last Name</Form.Label>
                  <Form.Control
                      placeholder="Doe"
                      value={params.newLastName}
                      name="newLastName"
                      onChange={handleChange}
                  />
                  {errors.newLastName.length > 0 && 
                  <span 
                  className='error'
                  style= {{ fontSize: 10}
                  }>{errors.newLastName}</span>}
                  </Form.Group>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridContact">
                      <Form.Label style={{ fontSize: 18 }}>
                        Phone Number
                      </Form.Label>
                      <Form.Control
                        value={params.number}
                        name="number"
                        onChange={handleChange}
                      />
                      {errors.number.length > 0 && 
                      <span 
                      className='error'
                      style= {{ fontSize: 10}
                      }>{errors.number}</span>}
                    </Form.Group>
                  </Form.Row>
                  <div class="form-group">
                  <label className="font">Sign up as:</label>
                  <select class="form-control">
                      <option selected>Select vendor or user</option>
                      <option>Vendor</option>
                      <option>User</option>
                  </select>
                  </div>

                  <Button
                    className="space"
                    block
                    style={{ float: "right" }}
                    variant="secondary"
                    type="Button"
                    onClick={handleSubmit}
                  >
                    Signup
                  </Button>

                  <div className="already">
                    <a show={isLogin}>
                        I already have an account
                    </a>
                  </div>
              </Form>
            </Dialog>
          </Form>
          <ToastsContainer store={ToastsStore} />
        </div>
    );
  }