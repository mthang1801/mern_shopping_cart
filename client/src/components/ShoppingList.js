import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { v4 as uuidv4 } from "uuid";

class ShoppingList extends Component {
  state = {
    items: [
      { _id: uuidv4(), name: "Eggs" },
      { _id: uuidv4(), name: "Milk" },
      { _id: uuidv4(), name: "Rice" },
      { _id: uuidv4(), name: "Soda" },
      { _id: uuidv4(), name: "Fruit" }
    ]
  };
  handleAddItem = () => {
    let name = prompt("Enter Item");
    if (name) {
      this.setState(state => ({
        items : [...state.items, { _id: uuidv4(), name: name }] 
      })
    )
  }};
  render() {
    const { items } = this.state;    
    return (
      <Container>
        <Button color="dark" className="mb-3" onClick={this.handleAddItem}>
          Add item
        </Button>
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(item => (
              <CSSTransition key={item._id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button 
                    className="remove-btn" 
                    color="danger" 
                    size="small"
                    onClick={() => {                     
                      this.setState(state => ({
                        items : state.items.filter( stateItem =>  stateItem._id !== item._id )
                      }));
                    }}
                    >
                    &times;
                  </Button>
                  {item.name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

export default ShoppingList;
