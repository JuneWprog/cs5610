// const fs = require("fs")

// fs.writeFile('data.txt', "hello there", 'utf8', (err) => {
//     if (err) throw err;
//     console.log('writing is done');
//     fs.readFile('data.txt', 'utf8', (err, data)=>{
//         if (err) throw err;
//         console.log(data);
//     });
//     console.log('reading is done');
// });

/*  activity 2: custome module
const log = require("./logger.js");
//logger.log();
//when the function is not exported, it is like a private function
log.log();
console.log(log.version);
*/ 

//activity 3: express
const express = require('express');
const app = express();
const port = 3000;
// app.get('/', function(req, res) {
//     res.send('Hello World!')
// });
// app.get('/aboutme', (req,rew) => {
//     res.send("about me page");
// });

//activity 4 adding more routes
// app.get('/task', function(req, res) {
//     res.send('<h1>List of all the tasks </h1>')
// });
//activity 4 route parameters
// //dynamic path 
// app.get('/task/:taskId/user/:username', function(req, res) {
//     console.log(req.params.taskId);
//     res.send(`you are viewing task ${req.params.taskId} and 
//     username ${req.params.username}`);
// });

//activity5
// app.use(express.static('public'));

//activity 6
// const tasksRouter = require("./routes/tasks");
// app.use("/tasks", tasksRouter);

//activity7
const path = require('path');
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get("/tasks/:taskId", (req, res)=>{
    console.log(req.params.taskId);
    res.render("task", {id: req.params.taskId});
});


app.listen(port, function() {
console.log(`Example app listening on port ${port}!`)
});



 