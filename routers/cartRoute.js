const express = require("express");
const router = express.Router();
const Cart = require("./models/cartModel.js");
//routes//

router.get("/", async (req, res) => {
  try {
    const allCartItems = await Cart.find();
    res.json(allCartItems);
  } catch (err) {
    res.send("Error" + err);
  }
});
/*
router.post("/", async (req, res) => {
    console.log(req.body);
  const addCartItem = new Cart({
    name: req.body.name,
    image: req.body.image,
    price: req.body.price,
    description: req.body.description
  })
  try{
    const itemAdded = await addCartItem.save().
    res.json(itemAdded);
  } catch(err){
    res.send("Error");
    
  }
});
*/
module.exports = router;
