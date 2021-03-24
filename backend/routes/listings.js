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
    emailuser: req.body._parts[0][1],
    title: req.body._parts[1][1],
    price: req.body._parts[2][1],
    categoryId: req.body._parts[3][1],
    description:req.body._parts[4][1],
    contact:req.body._parts[5][1],
    image:req.body._parts[6][1],
    location:"",
    rating:0,
    totalRating:0,
    raters:0,
   
  });

  try {
 const a1 = await listings.save();
 // Listing.create(req.body);
  res.json(a1);
    console.log(req.body._parts[7][1]);
    
  } catch (err) {
    res.send("Error " + err);
    console.log(err)
  }
});

router.post("/rating",(req,res)=>{

  console.log(req.body)
  Listing.findByIdAndUpdate(req.body.userId,{"rating": req.body.newRating,"totalRating":req.body.newTotalRating,"raters":req.body.newTotaluser}, function(err, result){

      if(err){
          res.send(err)
      }
      else{
        console.log("updated")
        console.log(res.body)
          res.send(result)

      }

  })
})

router.post("/delete",(req,res)=>{
  console.log(req.body.userId)
Listing.findByIdAndDelete(req.body.userId, function (err, docs) {
  if (err){
      console.log(err)
  }
  else{
      console.log("Deleted : ", docs);
  }
});
})
module.exports = router;
