const mongoose =  require('mongoose');

const cartSchema = new mongoose.Schema({
    name:{
        type :  String
    },
    image:{
        type :  String
        },
    price:{
        type :  Number
    },
    description:{
        type :  String
    }
});
module.exports = mongoose.model("Cart" , cartSchema);
