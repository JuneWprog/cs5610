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

    //textContent, innerHTML, innerText

    //radiusElement.textContent = `Value provided by user: ${input}`;
    //radiusElement.innerText = `Value provided by user: ${input}`;
    //radiusElement.innerHTML += input;
    radiusElement.innerText += input;

}

function setAreaText(input){
    let resultElement = document.querySelector("#result");
    //var resultText = document.getElementById("result");
    if (input == null || input == "") {
        resultElement.innerText = "No input provided";
    }else if (isNaN(input)){
        resultElement.innerText = "Input is not a number";
    }else {
    let radius = parseFloat(input, 10);
    let area = calculateCircleArea(radius);
    resultElement.innerText = `Area of circle with radius ${input}: ${area}`;
    }
}

function getArea(){
    let input = promptInput();
    setRadiusText(input);
    setAreaText(input);
}


getArea();


/* --------------activity 2------------ */
let shoppingList = ['Apple', 'Milk', 'Meatball', 'green'];

function createShoppingList(shoppingList){
    let shoppingElement = document.querySelector(".shopping");
    shoppingList.forEach((shoppingItem) =>{
        let listItem = document.createElement("li");
        listItem.innerText = shoppingItem;
        //shoppingElement.appendChild(listItem);
        shoppingElement.append(listItem);
    });
}

createShoppingList(shoppingList);

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

//listItemSquareMarker();

function greenItem(){
    let shoppingItems = document.querySelectorAll(".shopping li");
    for(let item of shoppingItems) {
        if (item.textContent.includes('green')) {
            item.style = "color: green";
        }
    }
}

greenItem();

/* --------------activity 4------------ */
//DOM Event Handlers with JS
// 1. inline event handler (don't use)
// onclick="getArea()"
// 2. event handler properties()
// button.onclick = getArea; 
// 3. addEventListener(use this)
// button.addEventListener("click", getArea);


//// 1. event handler with arrow function


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

//// 2. event handler with anonymous function

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

//// 3. event handler with named function
let updateImageBtn = document.querySelector("#updateImage");

function toggleButtonText3(){
   
    if (updateImageBtn.textContent === "clicked!") {
        updateImageBtn.textContent = "Click Me!";
    } else {
        updateImageBtn.textContent = "clicked!";
    }
}

// updateImageBtn.addEventListener("click", toggleButtonText3);


//toggleButtonText2();

function changeShoppingCarStyle() {
    let shoppingCart = document.querySelector("#shoppingCart");
    shoppingCart.src = "images/shoppingCart.png";
    shoppingCart.alt = "shopping cart icon";
    shoppingCart.width= "50";
    shoppingCart.height = "50";
}
updateImageBtn.addEventListener("click", changeShoppingCarStyle, {once: true});

// updateImageBtn.removeEventListener("click", changeShoppingCarStyle);






/* --------------activity 5------------ */

function changeButtonColor(event) {
    // if (event.target.textContent === "Red") {
    //     event.target.backgroundColor = "red";
    // } else if (event.target.textContent === "Blue") {
    //     event.target.backgroundColor= "blue";
    // } else if (event.target.textContent === "Green") {
    //     event.target.backgroundColor = "green";
    // }
    event.target.style.backgroundColor = event.target.textContent;
}

let colorButtons = document.querySelectorAll("img ~ button");
for(let button of colorButtons) {
    button.addEventListener("mouseover", changeButtonColor);
}



//event delegation




/* --------------activity 6------------ */
//event delegation
function changeBackGroundDelegation() {
    let parentNode = document.querySelector("div");
    parentNode.addEventListener("mouseover", (event) => {
       event.target.style.backgroundColor = event.target.innerText;
    });
}


function toggleShoppingItem(){
    let shoppingElement = document.querySelector(".shopping");
    let shoppingList = ['Apple', 'Milk', 'Meatball'];
    shoppingList.forEach((shoppingItem) =>{
        let listItem = document.createElement("li");
        listItem.textContent = shoppingItem;
        shoppingElement.appendChild(listItem);
    });
    shoppingElement.addEventListener("click", (event) => {
        event.target.style = "text-decoration: line-through";
    });
}

toggleShoppingItem();
changeBackGroundDelegation();

/* --------------activity 7------------ */

//updateImageBtn.textContent = localStorage.getItem("buttonText") || "Click Me!";
function toggleButtonTextPersist(){
   
    if (updateImageBtn.textContent === "clicked!") {
        updateImageBtn.textContent = "Click Me!";
        localStorage.setItem("buttonText", "Click Me!");
    } else {
        updateImageBtn.textContent = "clicked!";
        localStorage.setItem("buttonText", "clicked!");

    }
}

updateImageBtn.addEventListener("click", toggleButtonTextPersist);
