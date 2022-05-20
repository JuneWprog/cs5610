//JS loops practice

/* for (let i = 1; i <= 10; i++) {
  console.log(Math.pow(2, i));
}
let i = 1;
while (i <= 10) {
  console.log(Math.pow(2, i));
  i++;
}


let name;
do{ 
    name = prompt("What is your name?");
}while(name.length ===1 || !isNaN(name));
alert(`Hello ${name}`);
*/

//JS Function Practice
//define 2 functions
function totalPriceOfService(bill, taxRate = 0.12, tipRate = 0.15) {
    return bill + (bill * taxRate) + (bill * tipRate);
}

function getTotalPrice1(bill) {
    console.log(totalPriceOfService(bill));
}

//anonymous function
let getTotalPrice2 = function(bill) {
    console.log(totalPriceOfService(bill));
}

//arrow function
let getTotalPrice = (bill) => {
    console.log(totalPriceOfService(bill));
}

getTotalPrice(100);

//JS Objects Practice
//define an object

/* one way to define an object 
let car ={
    make: "Honda",
    color: "red",
    year: "2018",
}*/

/* another way to define an object
let car = new Object();
car.make = "Honda";
car.color = "red";
car.year = "2018";
*/


/*accessing a property of an object
2 ways: [] bracket notation vs . dot notation
1. use dot notation when you know the name of the property
example: console.log(car.color);

2. use bracket notation when you don't know the name of the property
example: for (let key in car) {
     console.log(key, car[key]);
 }
 */

//JS Array practice
//define an array
let students = [
    {
    name: "Cristian",
    age: 30,
    location: "Vancouver"
    },
    {
    name: "James",
    age: 40,
    location: "Toronto"
    },
    {
    name: "Garry",
    age: 20,
    location: "Vancouver"
    }
];
//4 ways iterate through an array
function findStudentInVancouver(students) {
    /*
    for(let i = 0; i < students.length; i++) {
        if (students[i].location === "Vancouver") {
            console.log(student.name);
        }
 }
    for(let student of students) {
        if (student.location === "Vancouver") {
            console.log(student.name);
        }
    }

    students.forEach ((student) => {
        if (student.location === "Vancouver") {
            console.log(student.name);
        }
    });
*/
    students.filter((student) => {
        if (student.location === "Vancouver") {
            console.log(student.name);
        }
    });

}


function findStudentOlderThan30(students) {
    students.filter((student) => {
        if (student.age > 30) {
            console.log(`student older than 30 ${student.name}`);
        }
    });
}


//call a function
findStudentInVancouver(students);

findStudentOlderThan30(students);
