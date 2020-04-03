import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Alert, 
  NavLink
} from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { login } from "../actions/authAction";
import {clearErrors} from "../actions/errorsAction";

class LoginModal extends Component {
  state = {
    modal: false,    
    email : "",
    password : "",   
    msg : null
  };

  static propTypes = {
    isAuthenticated : PropTypes.bool,
    errors : PropTypes.object.isRequired,
    login : PropTypes.func.isRequired,
    clearErrors : PropTypes.func.isRequired
  }

  componentDidUpdate(prevProps) {
    const {errors, isAuthenticated}  = this.props;
    if(errors !== prevProps.errors){
      if(errors.id === "LOGIN_FAILURE"){
        this.setState({msg : errors.msg.msg});
        this.clearAll();
      }else{
        this.setState({msg : null});    
        this.clearAll();
      }
    }
    if(this.state.modal){
      if(isAuthenticated){
        this.toggle();
      }
    }
  }

  clearAll = () => {
    this.setState({  email : "", password : ""})
  }

  toggle = () => {
    this.props.clearErrors();
    this.setState({ modal: !this.state.modal });
  };

  onChange = e => {
    this.setState({[e.target.name] : e.target.value});
  }

  onSubmit = e => {
    e.preventDefault();
    const { email, password} = this.state;
    
    let user = {    
      email, 
      password
    }
    this.props.login(user);        
  }
  
  render() {
    return (
      <>
        <NavLink href="#" onClick={this.toggle}>Login</NavLink>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add Item To Shopping List</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              {this.state.msg ? <Alert color="danger" >{this.state.msg}</Alert> : null}
              
              <FormGroup>
                <Label for="email">Email: </Label>
                <Input type="email" name="email" id="email" value={this.state.email} placeholder="Enter Your Email" onChange={this.onChange} />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password: </Label>
                <Input type="password" name="password" id="password" value={this.state.password} placeholder="Enter Password" onChange={this.onChange}></Input>
              </FormGroup>              
             <FormGroup align="center">              
              <Button type="submit" color="primary">
                Login
              </Button>
             </FormGroup>
            </Form>
          </ModalBody>         
        </Modal>
      </>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated : state.auth.isAuthenticated,
  errors : state.errors
});


export default connect(mapStateToProps, {login, clearErrors})(LoginModal);
