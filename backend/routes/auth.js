const express = require("express");
const router = express.Router();
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const usersStore = require("../store/users");
const validateWith = require("../middleware/validation");
const Auth = require('../models/auth')
const User = require('../models/user')

// const schema = {
//   email: Joi.string().email().required(),
//   password: Joi.string().required().min(5),
// };


router.post("/",async (req, res) => {
  const {email,password} =req.body;
const user =await User.findOne({email:email})
console.log(user)
if(!user)
return res.status(400).json({msg:"Email doesnot exist"});

//   const auth = await new Auth({
//         email: req.body.email,
//     password: req.body.password
// })

try{
    //const a1 =  await User.create(req.body) 
   
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

  //   const { email, password } = req.body;
//   const user = usersStore.getUserByEmail(email);
//   if (!user || user.password !== password)
//     return res.status(400).send({ error: "Invalid email or password." });

//   const token = jwt.sign(
//     { userId: user.id, 
//       name: user.name, 
//       email },
//     "jwtPrivateKey"
//   );
//   res.send(token);
// });

module.exports = router;
