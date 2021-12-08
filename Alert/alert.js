let container = document.getElementById('container')
let textShow = document.getElementById('showMes')

function customAlert(text) {
    container.style.opacity = '1'; 
    textShow.textContent = text;
}

let button = document.getElementById('button')
button.addEventListener ('click', function () {
    container.style.opacity = '0';
})

