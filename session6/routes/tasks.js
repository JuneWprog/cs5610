const express = require('express');
var router = express.Router();

router.get("/", function (req, res) {
    res.send("<h1>List of all the tasks </h1>");
  });
  
  router.get("/:taskId", function (req, res) {
    console.log(req.params);
    res.send(`You are viewing task ${req.params.taskId} `);
  });
  router.get("/:taskId/user/:userName", function (req, res) {
    console.log(req.params.taskId);
    console.log(req.params.userName);
    res.send(`You are viewing task ${req.params.taskId} is responsible by ${req.params.userName}`);
  });
  
module.exports = router;