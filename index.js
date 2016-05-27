var express = require("express");
var mongoose = require("./db/connection");
var bodyparser = require("body-parser");
var app     = express();

var Group    = mongoose.model("Group");

app.use(bodyparser.json({urlencoded: true}));
app.use("/", express.static("public"));
app.use("/", express.static("bower_components"));

app.get("/api/groups", function(req, res){
  Group.find().then(function(group){
    res.json(group);
  })
});

app.post("/api/groups", function(req, res){
  Group.create(req.body).then(function(group){
    res.json(group);
  });
});


app.get("/*", function(req,res){
  res.sendFile(__dirname + "/public/index.html");
})

app.listen(3000, function(){
  console.log('rock on');
})