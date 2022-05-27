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
// app.get('/about', (req,rew) => {
//     res.send("about page");
// });
// app.get('/tasks', function(req, res) {
//     res.send('<h1>List of all the tasks </h1>')
// });
// //dynamic path 
// app.get('/tasks/:taskId/user/:username', function(req, res) {
//     console.log(req.params.taskId);
//     res.send(`you are viewing task ${req.params.taskId} and 
//     username ${req.params.username}`);
// });
// app.use(express.static('public'));

const tasksRouter = require("../routes/tasks.js");
app.use("/tasks", tasksRouter);

app.listen(port, function() {
console.log(`Example app listening on port ${port}!`)
});



 