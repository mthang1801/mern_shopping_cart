import * as types from "./types";

export const getItems = () => {
  return{
    type : types.GET_ITEMS
  }
}

export const addItem = item => {
  return {
    type : types.ADD_ITEM,
    payload : item 
  }
}
export const deleteItem = id => {
  return {
    type : types.DELETE_ITEM,
    payload : id 
  }
}
