// const express = require('express');
// const router = express.Router();

// router.get("/", (req, res)=>{
//     res.send("<h1>task page</h1>");
// });
// router.get("/:taskId",(req, res)=>{
//     //res.send(`You are viewing task ${req.params.taskId}`);
//     res.render("task", {id: req.params.taskId});
// });
// module.exports = router;


//session7 activity 2

// const express = require('express');
// const router = express.Router();
// const axios = require("axios");


// router.get("/", (req, res)=>{
//     axios.get("https://jsonplaceholder.typicode.com/todos")
//     .then(response => {res.json(response.data);})           //res.json write content to the page
//     //response.date is to parse the data from the server
//     .catch(err => {console.log(err.code);});
// });
// router.get("/:taskId",(req, res)=>{
//     //res.send(`You are viewing task ${req.params.taskId}`);
//     //res.render("task", {id: req.params.taskId});
//     axios.get(`https://jsonplaceholder.typicode.com/todos/${req.params.taskId}`)
//     .then(response => {
//         res.render("task.pug", {
//             id: req.params.taskId,
//             title: response.data.title,
//             completed:response.data.completed,
//         })
//     })           
//     .catch(err => {console.log(err.code);});
// });
// module.exports = router;


//session7 activity 4 async await

const express = require('express');
const router = express.Router();
const axios = require("axios");

router.get("/", async function (req, res){
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
            res.json(response.data);   
    } catch (err) {
        console.log(err);
    }
});

router.get("/:taskId", async function (req, res) {
    try{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${req.params.taskId}`);
        const userResponse = await axios. get(`https://jsonplaceholder.typicode.com/users/${response.data.userId}`);
        res.render("task.pug", {
            id: req.params.taskId,
            title: response.data.title,
            completed:response.data.completed,
            username: userResponse.data.name,
        });
    }catch(err){

    }
});

module.exports = router;