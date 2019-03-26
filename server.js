var express = require('express')
var app = express()
var path = require("path")

var mongoose = require("./config/connection");
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

var apiRoutes = require("./apiRoutes")
app.use(apiRoutes)

app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, "./index.html"))
})
app.listen(3000)