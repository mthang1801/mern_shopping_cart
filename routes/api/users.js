import express from "express";
import User from "../../models/user";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";
import config from "../../config/default.json";

const  router = express.Router();

//@route GET api/users
//@desc Get all users
//@access Public

router.post("/", (req, res) => {
  let {name, email, password} = req.body;
  if(!name || !email || !password){
    return res.status(400).json({msg : "please enter all fields"});
  }
  
  //Check for existing user
  User.findOne({email : email})
        .then( user => {
            if(user)
              return res.status(400).json({msg : "User has already existed"});           
            const newUser = new User({
              name ,
              email , 
              password,
            })
            bcrypt.genSalt(10, (err, salt) => {
              if(err) throw err ; 
              bcrypt.hash(newUser.password,salt, (err, hash) => {
                if(err) throw err ; 
                newUser.password = hash ;
                newUser.save().then(user => {
                  jwt.sign(
                    {id : user.id },
                    config.jwt_Secret,
                    { expiresIn : 3600},
                    (err, token) => {
                      if(err) throw err ;
                      res.json({
                        token ,
                        user : {
                        id : user._id,
                        name : user.name,
                        email : user.email ,
                        password : user.password 
                      }})
                    }
                  )
                  
                })
              })
            })
          }
        )
})


export default router;
