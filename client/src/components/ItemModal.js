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
  Container
} from "reactstrap";
import { connect } from "react-redux";
import { addItem } from "../actions/itemAction";
class ItemModal extends Component {
  state = {
    modal: false,
    name: ""
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  onChange = e => {
    let name = e.target.name ; 
    let value = e.target.value ; 
    this.setState({[name] : value });
  }

  onSubmit = e => {
    e.preventDefault();
    if(this.state.name === ""){
      return ;
    }
    this.props.addItem(this.state.name);
    this.toggle();
  }
  render() {
    const {isAuthenticated} = this.props;
    return (
      <Container>
      {isAuthenticated ? (
        <Button color="dark" className="mb-3" onClick={this.toggle}>
          Add item
        </Button>
      ) : null}
       
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add Item To Shopping List</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item">Item</Label>
                <Input type="text" name="name" id="item" placeholder="Enter name item" onChange={this.onChange}></Input>
              </FormGroup>
             <FormGroup align="center">
              <Button type="reset" color="danger" onClick={this.toggle}>
                  Cancel
                </Button>{" "}
                <Button type="submit" color="primary">
                  Submit
                </Button>
             </FormGroup>
            </Form>
          </ModalBody>         
        </Modal>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  listItems : state.listItems,
  isAuthenticated : state.auth.isAuthenticated
});


export default connect(mapStateToProps, {addItem})(ItemModal);
