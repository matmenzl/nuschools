var express = require("express");
var mongoose = require("./db/connection");
var app     = express();

var Groups    = mongoose.model("Groups");


app.use("/", express.static("public"));
app.use("/", express.static("bower_components"));

app.get("/api/groups", function(req, res){
  Groups.find().then(function(groups){
    res.json(groups);
  })
});


app.get("/*", function(req,res){
  res.sendFile(__dirname + "/public/index.html");
})

app.listen(3000, function(){
  console.log('rock on');
})