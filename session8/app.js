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
// const express = require('express');
// const app = express();
// const port = 3000;
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

//activity7 : use pug template engine to render routers**

// const express = require('express');
// const app = express();
// const port = 3000;
// const tasksRouter = require("./routes/tasks");

// //set up for using pug template engine
// app.set("view engine", "pug");
// // app.set("views", path.join(__dirname, "views"));
// app.set("views", "./views");
// app.use("/tasks", tasksRouter);
// app.get('/', function(req, res) {
//         res.send('Hello World!')
//     });


// app.get("/tasks/:taskId", (req, res)=>{
//     console.log(req.params.taskId);
//     // res.render("task", {id: req.params.taskId});
//     res.render("task", {id: req.params.taskId});
// });


// app.listen(port, function() {
// console.log(`Example app listening on port ${port}!`)
// });


/***************Session 7 Asynchronous JS **************** */
//activity1  consume a promise
// const fs = require("fs");

// const util =require("util");
// const writePromise = util.promisify(fs.writeFile);
// // promisify() returns a promise
// const readPromise = util.promisify(fs.readFile);


// writePromise("data.txt", "hello there!!")
// .then((data)=>{
//     console.log("write file is done");
//     readPromise("data.txt", "utf8")
//     .then((data)=>{
//         console.log("read file is done");
//         console.log(data);
//     })
// })
// .catch((err)=>{console.log(err)});





//activity3 await async
// async function fetchSome() {
//     try{
//         const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
//         if (!response.ok) {
//             throw new Error(`HTTP error: ${response.status}`);
//             }
//          let json = await response.json();
//          console.log(json[0]);
            
//     }catch(error)  {
//         console.error(`Could not get todos: ${error}`);
//         };
    
// }
// fetchSome();



// const fs = require("fs");

// const util =require("util");
// const writePromise = util.promisify(fs.writeFile);
// promisify() returns a promise
// const readPromise = util.promisify(fs.readFile);

// async function readAndWriteFile(){
//     try{
//         await writePromise("data.txt", "hey there!!");
//         console.log("write file is done");
//         let data = await readPromise("data.txt", "utf8");
//         console.log("read file is done");
//         console.log(data);
//     } catch(err){
//         console.log(err);
//     }
// }
// readAndWriteFile();


//activity 2 fetch API and render on page using pug template engine

//fetch create  a new promise

const express = require('express');
//connect to mongo database
const db = require('./db.js');
const app = express();
const port = 3000;
const tasksRouter = require("./routes/tasks");


app.set("views", "views");
app.set("view engine", "pug");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/tasks", tasksRouter);
app.use(express.static("public"));
app.get("/", function (req, res) {
  res.send("Hello World!");
});

db.connectToDB()
  .then(
    app.listen(port, function () {
      console.log(`Example app listening on port ${port}!`);
    })
  )
  .catch((err) => console.log(err));



