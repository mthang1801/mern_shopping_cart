import axios from "axios";
import * as types from "./types";
import {configToken} from "./helper";
export const getItems = () => dispatch =>  {
  console.log("wait");
  dispatch(setItemsLoading());
  axios.get("/api/items")
          .then(response => {      
            console.log(response)     ;
            dispatch({
              type : types.GET_ITEMS,
              payload : response.data
            })
          })
          .catch(err => console.log(err));
          
}

export const addItem = item => (dispatch,getState)=>  {  
  axios.post("/api/items", {name : item}, configToken(getState))
          .then(response => {           
            dispatch({              
              type : types.ADD_ITEM,
              payload : response.data               
            })
          })          
}
export const deleteItem = id => (dispatch,getState) => {
  axios.delete(`/api/items/${id}`, configToken(getState))
        .then(response => {
          console.log(response);
          dispatch({
            type : types.DELETE_ITEM,
            payload : id
          })
        }) 
}

export const  setItemsLoading = () => {
  return{
    type : types.ITEMS_LOADING
  }
}
