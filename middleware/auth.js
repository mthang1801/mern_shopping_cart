import jwt from "jsonwebtoken";
import config from "../config/default.json";

let auth = (req, res, next) =>  {
  const  token = req.header("x-auth-token");
  //Check for token
  if(!token){
    return res.status(400).json({msg : "No token, authorization denied"});
  }
  try{
   //Verify token
    const  decoded = jwt.verify(token, config.jwt_Secret);
    //Add user from payload
    req.user = decoded;
    next();
  }catch(err){
    return res.status(400).json({msg : "Token is not valid"});
  }
}

module.exports = auth;
