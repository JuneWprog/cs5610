const express = require('express');
<<<<<<< HEAD
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
  
=======
const router = express.Router();

router.get("/", (req, res)=>{
    res.send("<h1>task page</h1>");
});
router.get("/:taskId",(req, res)=>{
    res.send(`You are viewing task ${req.params.taskId}`);
});
>>>>>>> 566e6360fc39332733f4b073d23b52426edaf4aa
module.exports = router;