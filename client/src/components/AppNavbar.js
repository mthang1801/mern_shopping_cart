import React , {Component} from "react";
import { Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";
import RegisterModal from "./RegisterModal";
import LoginModal from "./LoginModal";
import Logout from "./Logout";
import {connect} from "react-redux";
import PropTypes from "prop-types";
class AppNavbar extends Component {
  state = {
    isOpen : false
  }

  static propTypes = {
    auth : PropTypes.object.isRequired 
  }
  toggle = () => {
    this.setState({isOpen : !this.state.isOpen});
  }

  render(){
    const {user, isAuthenticated} = this.props.auth;  
    console.log(isAuthenticated);
    const guestLinks =(
      <>
        <NavItem>
          <RegisterModal/>
        </NavItem>
        <NavItem>
          <LoginModal/>
        </NavItem>
      </>
    )

    const authLinks = (
      <>        
        <NavItem>
          <span className="navbar-text mr-3">
          <strong>{user ? user.name : ""}</strong>
        </span>
        </NavItem>

        <NavItem>
          <Logout/>
        </NavItem>
      </>
    )
    return(
    <Navbar color="dark" dark expand="md" className="mb-5">
      <Container>
        <NavbarBrand href="/">ShoppingList</NavbarBrand>
        <NavbarToggler onClick={this.toggle}></NavbarToggler>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
           {isAuthenticated ? authLinks : guestLinks}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
    )
  }
}

const mapStateToProps = state => ({
  auth : state.auth
})

export  default connect(mapStateToProps, null)(AppNavbar);

  