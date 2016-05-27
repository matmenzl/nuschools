var mongoose = require('mongoose');

var GroupSchema = {
  name: String,
  description: String,
  students: String,
  image: String,
  placesLeft: Boolean,
  teacherMissing: Boolean
}



mongoose.model("Group", GroupSchema);

mongoose.connect("mongodb://localhost/nuschools");

module.exports = mongoose;