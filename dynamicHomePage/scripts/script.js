function addThemeButton(){
    const themeButton = document.createElement('button');
    let textSpan = document.createElement('span');
    textSpan.innerText = 'Theme';
    themeButton.appendChild(textSpan);
    themeButton.classList.add('theme-button');
    const header = document.querySelector('header');
    header.append(themeButton);
}
addThemeButton();

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
    resultDisplay.innerText = text;
    
}

let form = document.querySelector('form');
form.addEventListener('submit', displayResult);