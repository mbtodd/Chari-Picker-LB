var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var LoginSchema = new Schema({
  firstname: String,
  email: String,
  password: String,
});

var LoginDB = mongoose.model("LoginDB", LoginSchema);
module.exports = LoginDB;
