import React from "react";
import { Form, Button, Col } from "react-bootstrap";
import * as emailjs from "emailjs-com";
import Dialog from '@material-ui/core/Dialog';
import { ToastsContainer, ToastsStore } from "react-toasts";
import { MDBBtn } from "mdbreact";
import Bttn from '@material-ui/core/Button';
import "../App.css";


export default function Login(props) {
  const validEmailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const validPhoneRegex = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
 
  const [isLogin] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [params, setParams] = React.useState({
    email: null, password: null});
  const [errors, setErrors] = React.useState({
    email: '', password: ''
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
    //LOG IN VALIDATION//
    switch (name) {
      case 'email':
        validEmailRegex.test(value)
        ? setErrors({...errors,[name]: ''})
        : setErrors({...errors,[name]: 'Email is not valid!'});
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

  logErrors(errors);
}

  const onChange1 = (e) => {
    [e.target.name] = e.target.value
  }


  const refreshPage = () => {
    window.location.reload(false);
  }

  const handleSubmit = event => {
    event.preventDefault();

    if(validateForm(errors)) {
      console.info('Valid Form')
    }else{
      console.error('Invalid Form')
    }

  };

    return (
        <div class = "Login">
            <Form>
            <Bttn Button variant="contained" disableElevation style={{
                        color: "white",
                        fontSize: "18px",
                        backgroundColor: "#12517A",
                        outline: 'none'}}
                        onClick={handleClickOpen}>
                <a
                >
                    Login
                </a>
            </Bttn>
                  <Dialog
                    style={{ zIndex: 50000 }}
                    open={open} 
                    onClose={handleClose}
                  >
                    <Form 
                      id= "login"
                      className="button" 
                      style={{ padding: "20px" }}
                    >
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
                          value={params.email}
                          onChange={handleChange}
                        />
                        {errors.email.length > 0 && 
                          <span 
                          className='error'
                          style= {{ fontSize: 10}
                          }>
                          {errors.email}</span>}
                      </Form.Group>

                      <Form.Group controlId="formBasicPassword">
                        <Form.Label style={{ fontSize: 18 }}>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          value={params.password}
                          onChange={handleChange}
                        />
                      </Form.Group>

                      <Button
                        className="space"
                        block
                        style={{ float: "right" }}
                        variant="secondary"
                        type="Button"
                        //onClick={sendLoginData}
                      >
                        Login
                      </Button>

                      <a
                        className="already"
                        show={isLogin}
                      >
                        Create an account
                      </a>
                    </Form>
                  </Dialog>
            </Form>
            <ToastsContainer store={ToastsStore} />
        </div>
    );
  }