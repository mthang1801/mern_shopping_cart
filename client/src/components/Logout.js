import React, { Component } from "react";
import {
  NavLink
} from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../actions/authAction";
class Logout extends Component {
  
  static propTypes = {
    logout : PropTypes.func.isRequired,    
  }

  
  render() {
    return (
      <>
        <NavLink href="#" onClick={this.props.logout}>Logout</NavLink>        
      </>
    );
  }
}

export default connect(null, {logout})(Logout);
