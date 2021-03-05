const express = require("express");

const app = express();

app.use("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "wecvwfw46489",
      title: "First server-side post",
      content: "This is coming from the server",
    },
    {
      id: "hrhrge789432",
      title: "Second server-side post",
      content: "This is also coming from the server",
    },
  ];
  res.status(200).json({
    message: "Posts fetch successfully!",
    posts: posts,
  });
});

module.exports = app;
