const mongoose = require('mongoose');

// Define the schema
const schema = mongoose.Schema({
  EmpName: String,
  designation: String,
  empId: String,
  img_url: String,
});

// Export the model
module.exports = mongoose.model('users', schema);
