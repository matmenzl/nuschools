var mongoose = require("./connection.js");
var seedData = require("./seeds");

var Group = mongoose.model("Group");

Group.remove().then(function(){
  Group.create(seedData).then(function(){
    process.exit();
  }); 
});
