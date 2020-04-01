import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getItems, deleteItem } from "../actions/itemAction";
class ShoppingList extends Component {
  
  componentDidMount(){
    this.props.getItems();
  }
  onDelete = id => {
    this.props.deleteItem(id);
  };

  render() {
    const { items } = this.props.listItems;     
    return (
      <Container>        
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(item => (
              <CSSTransition key={item._id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button 
                    className="remove-btn" 
                    color="danger" 
                    size="small"
                    onClick={this.onDelete.bind(this,item._id)}
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

const mapStateToProps = state => ({
  listItems : state.listItems
});

ShoppingList.propTypes = {
  listItems : PropTypes.object.isRequired , 
  getItems : PropTypes.func.isRequired
}

export default connect(mapStateToProps, {getItems, deleteItem})(ShoppingList);
