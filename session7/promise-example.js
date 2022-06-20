const { constants } = require("buffer");
const { create } = require("domain");

// promise, then, catch
let p = new Promise((resolve, reject) => {
    let a = 1+1;
    if (a == 3) {
        resolve("Success");
    } else {    
        reject("Failure");
    }
} )

p.then((message) => {
    console.log("this is in the then " +message);
}).catch(( message) => {
    console.log("this is in the catch " +message);
});

let userLeft = false;
let userWatchingCatMeme = true;

function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject("user left");
        }
        if (userWatchingCatMeme) {
            reject("user watching cat meme");
        }
        resolve("watching the tutorial");
    })

}
//chainning promises
watchTutorialPromise().then((message) => {
    console.log(message);
}).catch((message) => { 
    console.log(message);
});

//promise all, promise any, promise race

// const rec1 = new Promise((resolve, reject) => {
//     resolve("rec1 resolved");
// });
// const rec2 = new Promise((resolve, reject) => {
//     resolve("rec2 resolved");
// });
// const rec3 = new Promise((resolve, reject) => {
//     resolve("rec3 resolved");
// });
// Promise.all([rec1, rec2, rec3]).then((message) => { 
//     console.log(message);
// });
// //only execute the first promise
// Promise.any([rec1, rec2, rec3]).then((message) => {
//     console.log(message);
// });
// //only execute the first promise
// Promise.race([rec1, rec2, rec3]).then((message) => {
//     console.log(message);
// });


//setTimeout function takes a callback function a a time in milliseconds
setTimeout(()=>{
    console.log("delay for 3 seconds");
}, 3000);


//call back functions
//call_two is a callback function
function one(call_two) {
    console.log("one");
    call_two();
}

function two(){
    console.log("two");
}

one(two);

//async await
//must use async keyword to use await in a function 
const posts =[{title: "post1"}, {title: "post2"}, {title: "post3"}];
function getPost(){
    setTimeout(()=>{
        for (let post of posts){
            console.log(post.title);
        }
    }, 2000);
}

// version1 use callback function
//function createPost(post, callback){
//     setTimeout(()=>{
//         posts.push(post);
//         callback();
//     }, 2000);
// }
// createPost({title: "post4"}, getPost);


//version2 use promise 
function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if (!error) {
                resolve();
            } else { 
                reject("error");
            }
        }, 2000);
    })
}

// createPost({ title: "post4" })
// .then(() => {
//     getPost();
// })
// .catch((error) => {
//     console.log(error);
// });

//version3 use async await
//await the promise to finish before the next line of code is executed

// async function init(){
//     await createPost({title: "post4"});
//     getPost();
// }

// init();


//async await function in fetch
// const fetch = require('node-fetch');
// async function fetchUsers() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
// }

// fetchUsers();

//promise chaining

// doSomething()
// .then(function(result) {
//   return doSomethingElse(result);
// })
// .then(function(newResult) {
//   return doThirdThing(newResult);
// })
// .then(function(finalResult) {
//   console.log('Got the final result: ' + finalResult);
// })
// .catch(failureCallback);


// const name = document.querySelector('#name');
// const delay = document.querySelector('#delay');
// const button = document.querySelector('#set-alarm');
// const output = document.querySelector('#output');

// function alarm(person, delay) {
//   return new Promise((resolve, reject) => {
//     if (delay < 0) {
//       throw new Error('Alarm delay must not be negative');
//     }
//     window.setTimeout(() => {
//       resolve(`Wake up, ${person}!`);
//     }, delay);
//   });
// }

// button.addEventListener('click', async () => {
//   try {
//     const message = await alarm(name.value, delay.value);
//     output.textContent = message;
//   }
//   catch (error) {
//     output.textContent = `Couldn't set alarm: ${error}`;
//   }
// });

let promise = new Promise((resolve, reject) => {
    resolve("Success");
    reject(new Error("Failure"));
    resolve("Success");
});

promise.then((message) => {console.log(message);}).catch((error) => {console.log(error);});

let done = false;
const isItDoneYet = function () {
    return new Promise((resolve, reject) => {
    if (done) {
    const workDone = 'Here is the thing I built';
    resolve(workDone);
    } else {
    const why = 'Still working on something else';
    reject(why);
    }
    });
}

isItDoneYet()
.then(data => {
console.log(data);
})
.catch(err => {
console.error(err);
})