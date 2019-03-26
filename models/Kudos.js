var mongoose = require("../config/connection")
var userSchema = mongoose.Schema({
    sender: String,  
    reciever: String, 
    title: String,
    kudosMessage: String,
    

})
module.exports = mongoose.model("Kudos", userSchema)