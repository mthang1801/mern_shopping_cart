import {combineReducers} from "redux";
import listItemsReducer from "./listItemsReducer";
import errorsReducer from "./errorsReducer";
import authReducer from "./authReducer";
export default combineReducers({
  listItems : listItemsReducer,
  errors : errorsReducer,
  auth : authReducer
})
