var mongoose = require("../config/connection")
var userSchema = mongoose.Schema({
    name: String 
})
module.exports = mongoose.model("User", userSchema)