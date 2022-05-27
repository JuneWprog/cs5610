//**activity1 
//const fs = require("fs")

// fs.writeFile('data.txt', "hello there", 'utf8', (err) => {
//     if (err) throw err;
//     console.log('writing is done');
//     fs.readFile('data.txt', 'utf8', (err, data)=>{
//         if (err) throw err;
//         console.log(data);
//     });
//     console.log('reading is done');
// });

//****activity 2
// const log = require("./logger.js");
// //log.log();
// //when the function is not exported, it is like a private function
// log.log();
// console.log(log.version);



//activity 3 add more routes
/*
const express = require("express"); //import express
const app = express();              //create an app
const port = 3000;                  //define port

app.get("/", function (req, res) {   //define root rout 
  res.send("Hello World!");
});
app.get("/about", (req, res)=>{
    res.send("about me");
});
app.get("/tasks", (req, res) =>{
    res.send("<h1> List of All tasks</h1>")
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
*/

//activity 4 Route	Parameters

const express = require("express"); //import express
const app = express();              //create an app
const port = 3000;                  //define port

app.get("/", function (req, res) {   //define root rout 
  res.send("Hello World!");
});
app.get("/aboutme", (req, res)=>{
    res.send("about me");
});
app.get("/task", (req, res) =>{
    res.send("<h1> List of All tasks</h1>")
});
//has one parameter ":params"
app.get("/task/:taskId", (req, res)=>{
    res.send(`You are viewing task ${req.params.taskId} `)
})

//has multiple parameters
app.get("/task/:taskId/user/:userId", (req, res)=>{
    res.send(`You are viewing task ${req.params.taskId},  is responsible by ${req.params.userId} ` );
})


//activity 5 host static files

app.use(express.static('public'));

//activity 6
//routes have common prefix
const tasksRouter = require('./routes/tasks');
app.use('/tasks', tasksRouter);

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});





