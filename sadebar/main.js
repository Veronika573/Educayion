let sideBar = document.getElementById('sideBar');
let hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', function(){
    sideBar.classList.toggle('rotate');
    hamburger.classList.toggle('is-active')
});

