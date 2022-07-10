const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    image:{type:String,require:true},
    Title:{type:String,require:true},
    price:{type:Number,require:true}
})

module.exports = mongoose.model("product",productSchema);
