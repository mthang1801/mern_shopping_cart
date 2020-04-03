import React, {Component} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from  "./components/AppNavbar";
import ShoppingList from  "./components/ShoppingList";
import ItemModal from "./components/ItemModal.js";
import store from "./store";
import {Provider} from "react-redux";
import {loadUser} from "./actions/authAction";
class App extends Component{
  componentDidMount(){
    store.dispatch(loadUser());
  }
  render(){
    return (
      <Provider store={store}>
        <AppNavbar />
        <ItemModal/>
        <ShoppingList/>
      </Provider>
    );
  }
}

export default App;
