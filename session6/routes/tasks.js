const express = require('express');
const router = express.Router();

router.get("/", (req, res)=>{
    res.send("<h1>task page</h1>");
});
router.get("/:taskId",(req, res)=>{
    res.send(`You are viewing task ${req.params.taskId}`);
});
module.exports = router;