import React, { Component } from "react";
import { Form, Button, Col } from "react-bootstrap";
import * as emailjs from "emailjs-com";
import Modal from "react-bootstrap/Modal";
import { ToastsContainer, ToastsStore } from "react-toasts";
import { MDBBtn } from "mdbreact";
import Bttn from '@material-ui/core/Button';
import "../App.css";

const validEmailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const validPhoneRegex = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    // if we have an error string set valid to false
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      showModal1: false,
      showModal2: false,
      showModal3: false,
      email: null,
      password: null,
      modalIsOpen: false,
      newFirstName: null,
      newLastName: null,
      newEmail: null,
      newPassworld: null,
      number: null,
      errors: {
        newFirstName: '',
        newLastName: '',
        newEmail:'',
        newPassword: '',
        number: '',
        email: '',
        password: '',
      }
    };
    this.changeState1 = this.changeState1.bind(this);
    this.changeState2 = this.changeState2.bind(this);
    this.changeState3 = this.changeState3.bind(this);
  }
  openModal() {
    this.setState({ modalIsOpen: true });
  }
  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  handleSubmit = event => {
    event.preventDefault();
    const templateId = "template_FNZvTKs9";

    if(validateForm(this.state.errors)) {
      console.info('Valid Form')
    }else{
      console.error('Invalid Form')
    }

    this.sendFeedback(templateId, {
      newFirstName: this.state.newFirstName,
      newEmail: this.state.newEmail
    });
  };

handleChange = (event) => {
  event.preventDefault();
  const { name, value } = event.target;
  let errors = this.state.errors;
  //SIGN UP VALIDATION//
  switch (name) {
    case 'newFirstName':
      errors.newFirstName = 
        value.length < 2
          ? 'First name must be at least 2 characters long!'
          : '';
      break;
    case 'newLastName':
      errors.newLastName = 
        value.length < 2
          ? 'Last name must be at least 2 characters long!'
          : '';
      break;
    case 'newEmail': 
      errors.newEmail = 
        validEmailRegex.test(value)
          ? ''
          : 'Email is not valid!';
      break;
    case 'newPassword': 
      errors.newPassword = 
        value.length < 8
          ? 'Password must be 8 characters long!'
          : '';
      break;
    case 'number':
      errors.number = 
        validPhoneRegex.test(value)
          ? ''
          : 'Phone number is not valid!';
        break;
  //LOG IN VALIDATION//
    case 'email':
      errors.email = 
        validEmailRegex.test(value)
          ? ''
          : 'Email is not valid!';
        break;
    default:
      break;
  }

  this.setState({errors, [name]: value}, ()=> {
    console.log(errors)
  })

  //this.setState({errors, [name]: value})

  }

  changeState1() {
    this.setState({
      showModal1: !this.state.showModal1
    });
    this.setState({
      showModal2: false
    });
  }

  changeState2() {
    this.setState({
      showModal2: !this.state.showModal2
    });
    this.setState({
      showModal1: false
    });
  }

  onChange1(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  changeState() {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen
    });
  }

  changeState3() {
    this.getUserNotificationStatus();
    this.setState({
      showModal3: !this.state.showModal3
    });
  }

  sendFeedback(templateId, variables) {
    const { newEmail, newFirstName } = this.state;
    emailjs.send(
      "gmail",
      templateId,
      variables,
      "user_wzos8lPUKwPXPkAOaRTiX"
    ).then(res => {
    	console.log('Email successfully sent!')
  	})
    .catch(err => console.error('Email failed to send!', err),
    //this.resetForm()
    );
  }




  
  render() {
    const {errors} = this.state;
    return (
      <div style={{width: '100%'}}>
        <Form>
          <Bttn Button variant="contained" disableElevation style={{
            color: "white",
            fontSize: "18px",
            backgroundColor: "#12517A",
            display: 'flex',
            justifyContent: 'flex-end',
            margin: '5px',
            float: 'right',
            outline: 'none'}}>
              <a
                  onClick={this.changeState1}
                  show={this.state.isLogin}
              >
                Login
              </a>
          </Bttn>
              <Modal
                style={{ zIndex: 50000 }}
                show={this.state.showModal1}
                onHide={this.changeState1}
              >
                <Form className="button" style={{ padding: "20px" }}>
                  <Form.Group controlId="Header" className="space">
                    <h1 style={{ textAlign: "center" }}>Login</h1>
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label style={{ fontSize: 18 }}>
                      Email address
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label style={{ fontSize: 18 }}>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </Form.Group>

                  <Button
                    className="space"
                    block
                    style={{ float: "right" }}
                    variant="secondary"
                    type="Button"
                    onClick={this.sendLoginData}
                  >
                    Login
                  </Button>

                  <a
                    className="already"
                    onClick={this.changeState2}
                    show={this.state.isLogin}
                  >
                    Create an account
                  </a>
                </Form>
              </Modal>
              &nbsp;&nbsp;&nbsp;
              <Bttn Button variant="contained" disableElevation style={{
                 color: "white",
                 fontSize: "18px",
                 backgroundColor: "#12517A",
                 display: 'flex',
                 justifyContent: 'flex-end',
                 margin: '5px',
                 float: 'right',
                 outline: 'none'}}>
                <a
                  onClick={this.changeState2}
                  show={this.state.isLogin}
                >
                  Sign Up
                </a>
              </Bttn>
              <Modal
                style={{ zIndex: 50000 }}
                show={this.state.showModal2}
                onHide={this.changeState2}
              >
                <Form
                  id="signup"
                  className="button"
                  style={{ padding: "20px" }}
                  onSubmit={this.handleSubmit}
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
                        value={this.state.newEmail}
                        name="newEmail"
                        id="newEmail"
                        //onChange={this.onChange}
                        onChange={this.handleChange}
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
                        value={this.state.newPassword}
                        name="newPassword"
                        onChange={this.handleChange}
                      />
                      {errors.newPassword.length > 0 && 
                      <span 
                      className='error'
                      style= {{ fontSize: 10}
                      }>
                        {errors.newPassword}</span>}
                    </Form.Group>
                  </Form.Row>

                  <Form.Group controlId="formGridFirstName">
                    <Form.Label style={{ fontSize: 18 }}>First Name</Form.Label>
                    <Form.Control
                      //placeholder=""
                      value={this.state.newFirstName}
                      name="newFirstName"
                      id="newFirstName"
                      //onChange={this.onChange}
                      onChange={this.handleChange}
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
                      //placeholder=""
                      value={this.state.newLastName}
                      name="newLastName"
                      onChange={this.handleChange}
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
                        value={this.state.number}
                        name="number"
                        onChange={this.handleChange}
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
                      <option selected>select vendor or user</option>
                      <option>Vendor</option>
                      <option>User</option>
                    </select>
                  </div>

                  <Button
                    className="space"
                    block
                    style={{ float: "right" }}
                    variant="secondary"
                    type="SignUp"
                    onClick={this.createNewUser}
                  >
                    Sign Up
                  </Button>

                  <div className="already">
                    <a onClick={this.changeState1} show={this.state.isLogin}>
                      I already have an account
                    </a>
                  </div>
                </Form>
              </Modal>
          </Form>
        <ToastsContainer store={ToastsStore} />
      </div>
    );
  }
}

export default Header;
