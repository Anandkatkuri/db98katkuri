const mongoose = require("mongoose") 
const cartoonSchema = mongoose.Schema({ 
 cartoon_type: String, 
 size: String, 
 age: Number 
}) 
 
module.exports = mongoose.model("Cartoon", 
cartoonSchema)
