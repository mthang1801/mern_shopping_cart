import {combineReducers} from "redux";
import listItemsReducer from "./listItemsReducer";
export default combineReducers({
  listItems : listItemsReducer
})
