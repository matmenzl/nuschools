var mongoose = require('mongoose');

var GroupsSchema = {
  name: String,
  description: String,
  students: String,
  image: String,
  placesLeft: Boolean,
  teacherMissing: Boolean
}



mongoose.model("Groups", GroupsSchema);

mongoose.connect("mongodb://localhost/nuschools");

module.exports = mongoose;