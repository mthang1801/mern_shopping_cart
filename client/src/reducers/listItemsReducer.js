import * as types from "../actions/types";
import {v4 as uuidv4} from "uuid";
const initialState = {
  items: [
    { _id: uuidv4(), name: "Eggs" },
    { _id: uuidv4(), name: "Milk" },
    { _id: uuidv4(), name: "Rice" },
    { _id: uuidv4(), name: "Soda" },
    { _id: uuidv4(), name: "Fruit" }
  ]
}

export default function(state = initialState, action){
  switch(action.type){
    case types.GET_ITEMS : 
      return {...state};
    case types.DELETE_ITEM :    
      return {
        ...state,
        items : state.items.filter( item => item._id !== action.payload )
      }
    case types.ADD_ITEM : 
      let newItem = { _id : uuidv4(), name : action.payload};     
      return {
        ...state,
        items : [newItem, ...state.items]
      };
    default : return state ;
  }
}
