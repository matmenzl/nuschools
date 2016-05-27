var mongoose = require("./connection.js");
var seedData = require("./seeds");

var Groups = mongoose.model("Groups");

Groups.remove().then(function(){
  Groups.create(seedData).then(function(){
    process.exit();
  }); 
});
