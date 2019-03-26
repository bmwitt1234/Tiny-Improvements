var express = require("express")
var router = express.Router()
var Users = require("./models/Users")
var Kudos = require("./models/Kudos")

// * A GET route that retrieves all Kudos from the database.
router.get("/all-kudos", function(req, res){
    
    Kudos.find({}).then(function(result){
        res.send(result)
    })
    
})
//  * A GET route that retrieves all Users from the database.
router.get("/all-users", function(req, res){

    Users.find({}).then(function(result){
        res.send(result)  
    })

})
// * A POST route to handle creating new Kudos.
router.post("/addkudo", function(req, res){
    console.log(req.body)
    Kudos.create(req.body).then(function(result){
        res.send(result)
    })
    
})

module.exports=router


