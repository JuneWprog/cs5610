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
