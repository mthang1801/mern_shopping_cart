import * as types from "./types";
import {configToken} from "./helper";
import {returnErrors} from "./errorsAction";
import axios from "axios";
export const loadUser = () => (dispatch, getState) => {
  dispatch({type : types.USER_LOADING});
  axios.get("/api/auth/user", configToken(getState))
        .then(res => {
          dispatch({
            type : types.USER_LOADED,
            payload : res.data
          })
        })
        .catch(err => {
           console.log(err.response);
           dispatch(returnErrors(err.response.data, err.response.status));
           dispatch({
             type : types.AUTH_ERROR
           })
        })
}



export const register = ({name, email, password}) => dispatch => {
  const config = {
    headers : {
      "Content-Type": "application/json"
    }
  }
  const body = JSON.stringify({name, email, password});
  axios.post("/api/users", body, config )
        .then(res => {
          dispatch({
            type : types.REGISTER_SUCCESS,
            payload : res.data
          })
        })
        .catch(err => {
          console.log(err.response);
          dispatch(returnErrors(err.response.data, err.response.status, "REGISTER_FAILURE"))
          dispatch({
            type : types.REGISTER_FAILURE
          })
        })
}

export const logout = () => dispatch => {
  dispatch({
    type : types.LOGOUT_SUCCESS
  })
}

export const login = ({email, password}) => dispatch => {
  const  config = {
    headers : {
      "Content-Type": "application/json"
    }
  }  
  const body = JSON.stringify({email, password});
  axios.post("/api/auth", body, config)
        .then(res => dispatch({
          type : types.LOGIN_SUCCESS,
          payload : res.data
        }))
        .catch(err => {
          dispatch(returnErrors(err.response.data, err.response.status, "LOGIN_FAILURE"));
          dispatch({
            type: types.LOGIN_FAILURE,            
          })
        })
}


