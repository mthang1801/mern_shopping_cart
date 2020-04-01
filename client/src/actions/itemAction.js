import axios from "axios";
import * as types from "./types";

export const getItems = () => dispatch =>  {
  dispatch(setItemsLoading());
  axios.get("/api/items")
          .then(response => {
            console.log(response);
            dispatch({
              type : types.GET_ITEMS,
              payload : response.data
            })
          })
          .catch(err => console.log(err));
          
}

export const addItem = item => dispatch=>  {  
  axios.post("/api/items", {name : item})
          .then(response => {           
            dispatch({              
              type : types.ADD_ITEM,
              payload : response.data               
            })
          })
}
export const deleteItem = id => dispatch => {
  axios.delete(`/api/items/${id}`)
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