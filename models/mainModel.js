const mongoose =  require('mongoose');
const mainSchema = mongoose.Schema({
    name: String,
    image: String,
    subItems: [
        {
            name: String,
            image: String,
            price: Number,
            description: String
        }
    ]
})