/* --------------activity 1------------ */
function promptInput() {
    let input = prompt("Enter a number as a radius of a circle");
    return input;
}
function calculateCircleArea(radius) {
    let area = Math.PI * radius * radius;
    return area;
}

function setRadiusText(input){
    //let radiusText = document.getElementById("radius");
    //radiusText.innerHTML = `Value provided by user: ${promptInput()}`;
    let radiusElement = document.querySelector("#radius");
    radiusElement.textContent= `Value provided by user: ${input}`;
}

function setAreaText(input){
    let resultElement = document.querySelector("#result");
    //var resultText = document.getElementById("result");
    if (input == null || input == "") {
        resultElement.textContent = "No input provided";
    }else if (isNaN(input)){
        resultElement.textContent = "Input is not a number";
    }else {
    let radius = parseFloat(input, 10);
    let area = calculateCircleArea(radius);
    resultElement.innerHTML = `Area of circle with radius ${input}: ${area}`;
    }
}

function getArea(){
    let input = promptInput();
    setRadiusText(input);
    setAreaText(input);
}


// getArea();


/* --------------activity 2------------ */
function createShoppingList(){
    let shoppingElement = document.querySelector(".shopping");
    let shoppingList = ['Apple', 'Milk', 'Meatball'];
    shoppingList.forEach((shoppingItem) =>{
        let listItem = document.createElement("li");
        listItem.textContent = shoppingItem;
        shoppingElement.appendChild(listItem);
    });
}

createShoppingList();

/* --------------activity 3------------ */

function listItemSquareMarker(){
    let shoppingElement = document.querySelector(".shopping");
    //4 ways to set the style for a list item

    //1. set inline style
    //shoppingElement.style.listStyleType = "square";
    //shoppingElement.style ="listStyleType: square";

    //2. set inline style with setAttribute
    //shoppingElement.setAttribute("style", "list-style-type: square");

    //3. set style in css file and use setAttribute(class)
    //shoppingElement.setAttribute("class", "square-marker");

    //4. set style in css file and use classList
    shoppingElement.classList.add("square-marker");
    //shoppingElement.classList.remove("square-marker");
}

listItemSquareMarker();

/* --------------activity 4------------ */
//DOM Event Handlers with JS
// 1. inline event handler (don't use)
// onclick="getArea()"
// 2. event handler properties()
// button.onclick = getArea; 
// 3. addEventListener(use this)
// button.addEventListener("click", getArea);

//// 1. event handler with anonymous function
//// 2. event handler with named function
//// 3. event handler with arrow function


function toggleButtonText1(){
    let btn = document.querySelector("#updateImage");
    btn.addEventListener('click', ()=>{
        if (btn.textContent === "clicked!") {
            btn.textContent = "Click Me!";
        } else {
            btn.textContent = "clicked!";
        }
    });
}


function toggleButtonText2(){
    let btn = document.querySelector("#updateImage");
    btn.addEventListener('click', function(){
        if (btn.textContent === "clicked!") {
            btn.textContent = "Click Me!";
        } else {
            btn.textContent = "clicked!";
        }
    });
}


toggleButtonText();





/* --------------activity 5------------ */
/* --------------activity 6------------ */