let sideBar = document.getElementById('sideBar');
let hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', function(){
    sideBar.classList.toggle('bias');
    hamburger.classList.toggle('is-active')
})

