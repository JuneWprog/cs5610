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

function addDataTime() {
    let dateTimeForm = document.createElement('form');
    dateTimeForm.classList.add('data-time');

    const date = document.createElement('input');
    date.type = 'radio';
    date.value = "Date";
    date.id = 'date';
    date.name = 'date';

    let dateLabel = document.createElement('label');
    dateLabel.htmlFor = 'date';
    dateLabel.innerText = 'Date';
    dateTimeForm.append(date);
    dateTimeForm.appendChild(dateLabel);
    dateTimeForm.appendChild(document.createElement('br'));

    const time = document.createElement('input');
    time.type = 'radio';
    time.value = "Time";
    time.id = 'time';
    time.name = 'time';

    let timeLabel = document.createElement('label');
    timeLabel.htmlFor = 'time';
    timeLabel.innerText = 'Time';
    dateTimeForm.append(time);
    dateTimeForm.appendChild(timeLabel);
    dateTimeForm.appendChild(document.createElement('br'));

    const showDateTime = document.createElement('button');
    showDateTime.innerText = 'Show Date/Time';
    dateTimeForm.append(showDateTime);

    const resultDisplay = document.createElement('span');
    resultDisplay.innerText = new Date().toLocaleString();
    dateTimeForm.append(resultDisplay);
    const main = document.querySelector('main');
    main.append(dateTimeForm);
}
addDataTime();



