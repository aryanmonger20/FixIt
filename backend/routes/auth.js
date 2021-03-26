const express = require("express");
const router = express.Router();

const jwt = require("jsonwebtoken");

const Auth = require('../models/auth')
const User = require('../models/user')



router.post("/",async (req, res) => {
  const {email,password} =req.body;
const user =await User.findOne({email:email})
console.log(user)
if(!user)
return res.status(400).json({msg:"Email doesnot exist"});



try{
    
   
    const token = jwt.sign(
        { userId: user.id, 
          name: user.name, 
          email },
        "jwtPrivateKey"
      );
      res.send(token);
    //res.json(a1)
}catch(err){
    res.send('Error ' + err)
}
})


module.exports = router;
