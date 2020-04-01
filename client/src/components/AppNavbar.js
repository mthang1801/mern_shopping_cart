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

class AppNavbar extends Component {
  state = {
    isOpen : false
  }

  toggle = () => {
    this.setState({isOpen : !this.state.isOpen});
  }

  render(){
    return(
    <Navbar color="dark" dark expand="md" className="mb-5">
      <Container>
        <NavbarBrand href="/">ShoppingList</NavbarBrand>
        <NavbarToggler onClick={this.toggle}></NavbarToggler>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="https://github.com/mthang1801/mern_shopping_cart/" target="_blank">Github</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
    )
  }
}

export  default AppNavbar;

  