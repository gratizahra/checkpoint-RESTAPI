const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "a user must have a name"],
    unique: true,
  },
  age: Number,
  profession: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;