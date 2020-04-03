import * as types from "./types";

export const returnErrors = (msg, status, id=null) => dispatch => {
  dispatch({
    type : types.GET_ERRORS,
    payload : {msg, status, id}
  })
}

export const clearErrors = () => dispatch => {
  dispatch({
    type : types.CLEAR_ERRORS,    
  })
}
