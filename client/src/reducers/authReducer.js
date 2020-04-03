import * as types from "../actions/types";

const initialState = {
  token : localStorage.getItem("token"),
  isAuthenticated : null,
  isLoading : false ,
  user : null
}

export default function(state = initialState, action){
  switch(action.type){
    case types.USER_LOADING : 
      return {
        ...state,        
        isLoading : true,
      };
    case types.USER_LOADED : 
      return{
        ...state,       
        isAuthenticated : true ,
        isLoading : false,              
        user : action.payload.user
      };
    case types.LOGIN_SUCCESS : 
    case types.REGISTER_SUCCESS :
      localStorage.setItem("token", action.payload.token);
      return{
        ...state,
        ...action.payload,
        isAuthenticated : true ,
        isLoading : false ,        
      };
    case types.LOGIN_FAILURE :
    case types.LOGOUT_SUCCESS :
    case types.REGISTER_FAILURE : 
    case types.AUTH_ERROR : 
      localStorage.removeItem("token");
      return{
        ...state,
        token : null ,
        isAuthenticated : false ,
        isLoading : false ,
        user : null
      }

    default : return state; 
  }
}
