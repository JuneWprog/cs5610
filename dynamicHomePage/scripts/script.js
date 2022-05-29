function addThemeButton(){
    const themeButton = document.createElement('button');
    themeButton.innerText = 'Theme';
    themeButton.setAttribute('id', 'theme-button');
    const header = document.querySelector('header');
    header.append(themeButton);
}
addThemeButton();

let body = document.querySelector('body');
let themeButton = document.querySelector('#theme-button');
let socialIcons = document.querySelectorAll('.social-media-icon');

function changeElemetsToLight(elements){
    body.classList.add('body-light');
    elements.forEach(element => element.classList.add('light-theme'));
}

function changeElemetsToDark(elements){ 
    body.classList.remove('body-light');
    
    elements.forEach((element) => {
        if (element.classList.contains('light-theme')) {
            element.classList.remove('light-theme');
        }
});
}

themeButton.textContent = localStorage.getItem("buttonText") || "Dark Mode";
if (themeButton.textContent === "Light Mode") {
    changeElemetsToLight(socialIcons);
}

function toggleTheme(){
    if (themeButton.textContent === "Dark Mode") {
        themeButton.textContent = "Light Mode";
        changeElemetsToLight(socialIcons);
        localStorage.setItem("buttonText", "Light Mode");
    } else {
        themeButton.textContent = "Dark Mode";
        changeElemetsToDark(socialIcons);
        localStorage.setItem("buttonText", "Dark Mode");
    }
}
themeButton.addEventListener('click', toggleTheme);




function createRadio(name){
    let radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = name;
    radio.id = name;
    radio.value = name;
    return radio;
}
function createLabel(name) {
    let label = document.createElement('label');
    label.htmlFor = name;
    label.innerText = name;
    return label;
}

const main = document.querySelector('main');
let dateTimeForm = document.createElement('form');
let resultDisplay = document.createElement('span');
function addDataTime() {
    
    const formTitle = document.createElement('h3');
    formTitle.innerText = 'Display Current Date or Time';
    dateTimeForm.appendChild(formTitle);


    const date = createRadio("Date");
    date.classList.add('date-radio');
    let dateLabel = createLabel('Date');
    dateTimeForm.append(date);
    dateTimeForm.appendChild(dateLabel);
    dateTimeForm.appendChild(document.createElement('br'));

    const time = createRadio("Time");
    time.classList.add('time-radio');
    let timeLabel = createLabel('Time');
    dateTimeForm.append(time);
    dateTimeForm.appendChild(timeLabel);
    dateTimeForm.appendChild(document.createElement('br'));

    const showDateTime = document.createElement('input');
    showDateTime.type = 'submit';
    showDateTime.value = 'Show Date/Time';
    dateTimeForm.append(showDateTime);

    resultDisplay.innerText ="";
    dateTimeForm.append(resultDisplay);
   
    main.append(dateTimeForm);
}
addDataTime();




let form = document.querySelector('form');

function displayResult(e){
    e.preventDefault();
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    if(document.querySelector('#Date').checked){
    //format Wed May 25 2022
    text = today.toDateString();
    } else if(document.querySelector('#Time').checked){
    //format 14:00:00 PM
    text = today.toLocaleTimeString();
    }
    resultDisplay.innerText = form.innerHTML;
    form.reset();
    
}

form.addEventListener('submit', displayResult);