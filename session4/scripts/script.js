// for (let i = 1; i <= 10; i++) {
//   console.log(Math.pow(2, i));
// }
// let i = 1;
// while (i <= 10) {
//   console.log(Math.pow(2, i));
//   i++;
// }


// let name;
// do{ 
//     name = prompt("What is your name?");
// }while(name.length ===1 || !isNaN(name));
// alert(`Hello ${name}`);

//JS Function Practice
//define 2 functions
function totalPriceOfService(bill, taxRate = 0.12, tipRate = 0.15) {
    return bill + (bill * taxRate) + (bill * tipRate);
}

function getTotalPrice(bill) {
    console.log(totalPriceOfService(bill));
}

getTotalPrice(100);

//JS Objects Practice

// let car ={
//     make: "Honda",
//     color: "red",
//     year: "2018",
// }


//[] bracket notation vs . dot notation
//use dot notation when you know the name of the property
// console.log(car.color);

//use bracket notation when you don't know the name of the property
// for (let key in car) {
//     console.log(key, car[key]);
// }

//Array practice
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

findStudentInVancouver(students);
