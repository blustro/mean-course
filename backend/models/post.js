const mongoose = require("mongoose");
const { stringify } = require("node:querystring");

const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
});

module.exports = mongoose.model("Post", postSchema);
