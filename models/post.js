const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String, required: true },
  selected: { type: Array, required: true },
  date: { type: String, required: true },
  creator: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
  amount: { type: Number, required: true },
});

module.exports = mongoose.model("Post", postSchema);
