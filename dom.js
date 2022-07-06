function changeMode() {
    changeClasses();
    changeText();
}

function changeClasses() {
    button.classList.toggle(DarkMode);
    h1.classList.toggle(DarkMode);
    body.classList.toggle(DarkMode);
    footer.classList.toggle(DarkMode)
}


//Modo Diferente do apresentado na Aula
function changeText() {

    const dark = 'Dark Mode ON'
    const light = 'Light Mode ON';

    if (!body.classList.contains(DarkMode)) {
        h1.innerHTML = light
        button.innerHTML = 'Dark Mode'
    } else {
        h1.innerHTML = dark
        button.innerHTML = 'Light Mode'
    }
}

const DarkMode = 'dark-mode';
const button = document.getElementById("mode-selector");
const h1 = document.getElementById("page-title");
const body = document.getElementsByTagName("body")[0];
const footer = document.getElementsByTagName("footer")[0];

button.addEventListener("click", changeMode)

