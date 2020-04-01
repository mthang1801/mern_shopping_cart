import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from  "./components/AppNavbar";
import ShoppingList from  "./components/ShoppingList";
import ItemModal from "./components/ItemModal.js";
import store from "./store";
import {Provider} from "react-redux";
function App() {
  return (
    <Provider store={store}>
       <AppNavbar />
       <ItemModal/>
       <ShoppingList/>
    </Provider>
  );
}

export default App;
