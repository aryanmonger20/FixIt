const express = require("express");
const router = express.Router();
const Listing = require("../models/listing");

var urlencodedParser= express.json();

router.get("/", async (req, res) => {
  try {
    const listings = await Listing.find();
    res.json(listings);
    //console.log(listings);
  } catch (err) {
    res.send("Error " + err);
  }
});



router.post("/rating", urlencodedParser,async (req, res) => {
          User.findByIdAndUpdate(user_id, { name: 'Gourav' },
          function (err, docs) {
        if (err){
        console.log(err)
        }
        else{
        console.log("Updated User : ", docs);
        }
        }); 
});

module.exports = router;
