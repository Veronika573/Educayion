let square = document.getElementById('square1');
let add = document.getElementById('add');
let remove = document.getElementById('remove');
let square2 = document.getElementById('square2');
let toggle = document.getElementById('toggle');
 
add.addEventListener('click', function(){
    square.classList.add('scale')
});

remove.addEventListener('click', function(){
    square.classList.remove('scale')
});

toggle.addEventListener('click', function(){
    square2.classList.toggle('rotate')
});
