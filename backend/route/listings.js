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

router.get("/:id", async (req, res) => {
  try {
    const listings = await Listing.findById(req.params.id);
    res.json(listings);
    
  } catch (err) {
    res.send("Error " + err);
    console.log(err)
  }
});

router.post("/", urlencodedParser,async (req, res) => {
  const listings = new Listing({
    id: req.body._parts[0][1],
    title: req.body._parts[1][1],
    price: req.body._parts[2][1],
    categoryId: req.body._parts[3][1],
    location: req.body._parts[6][1],
    description:req.body._parts[4][1],
    contact:req.body._parts[5][1],
    location:req.body._parts[6][1]
  });

  try {
 const a1 = await listings.save();
 // Listing.create(req.body);
  res.json(a1);
    console.log(req.body._parts[6][1]);
    
  } catch (err) {
    res.send("Error " + err);
    console.log(err)
  }
});

module.exports = router;
