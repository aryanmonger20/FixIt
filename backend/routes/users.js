const express = require("express");
const router = express.Router();
const Joi = require("joi");
const usersStore = require("../store/users");
const validateWith = require("../middleware/validation");
const User = require("../models/user");

//
router.post("/", async (req, res) => {
  let existemail = req.body.email;
  const allusers = await User.find();

  //console.log(allusers)
  function uid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  iduser=uid();
  const users = new User({
    id: iduser,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  //console.log(users);
  const existingUser = await User.findOne({ email: existemail });

 
  
  // if (usersStore.getUserByEmail(email))
  //   return res
  //     .status(400)
  //     .send({ error: "A user with the given email already exists." });

  // const user = { name, email, password };
  // usersStore.addUser(user);
  try {
    if (existingUser){   
      // console.log("heloo" + existingUser)
       return res.status(400).json({ msg: "email already exists" });
   
   }
    const a1 =  await users.save()
    res.status(201).send(users);
  } catch (err) {
    console.log(err);
    res.send("Error " + err);
  }
});

router.get("/", async (req, res) => {
  const allusers = await User.find();

  console.log(allusers)
  res.send(allusers);
});

module.exports = router;
