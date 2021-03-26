const express = require("express");
const router = express.Router();
const Joi = require("joi");
const User =require("../models/user")


router.post("/",
  async(req, res) => {
    
    //console.log(req);
    let existemail = req.body.email;
    const user = await User.findOne({ email: existemail });
   // console.log("user exist");
    if (!user) return res.status(400).send({ error: "Invalid user." });

    user.expoPushToken = req.body.token;
    console.log("User registered for notifications: ", user);
    res.status(201).send();
  }
);


module.exports = router;
