import express from "express";
import User from "../../models/user";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";
import config from "../../config/default.json";
import auth from "../../middleware/auth";
const  router = express.Router();

//@route POST api/auth
//@desc Auth User
//@access Public

router.post("/", (req, res) => {
  let {email, password} = req.body;
  if(!email || !password){
    return res.status(400).json({msg : "please enter all fields"});
  }
  
  //Check for existing user
  User.findOne({email})
        .then(user => {
          if(!user){
            return res.status(400).json({msg : "User does not exist"});
          }

          bcrypt.compare(password, user.password)
                  .then( isMatch => {
                    if(!isMatch){
                      return res.status(500).json({msg : "invalid credentials"});
                    }
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
 
});

//@route get api/auth/user
//@desc get auth user
//@access private
router.get("/user", auth, (req, res) => {
  User.findById(req.user.id)
      .select("-password")
      .then(user => res.json({user}))
})


export default router;
