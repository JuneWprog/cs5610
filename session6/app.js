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


const log = require("./logger.js");
//logger.log();
//when the function is not exported, it is like a private function
log.log();
console.log(log.version);