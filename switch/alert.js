let operation = prompt ('Яку з 4-х тригонометричних операцій ти хочеш здійснити?');
let number = prompt ('Введіть число');
switch (operation) {
case 'sin':
    alert (Math.sin(number));
    break;

case 'cos': 
    alert (Math.cos(number));
    break;

case 'tg':
    alert (Math.tan(number));
    break;

case 'ctg':
    alert (1 / Math.tan(number));
    break;
default:
    alert ('Такої операції не існує');    
}
let work = confirm ("Чи бажаєш ти продовжити роботу?");
if (work == true)  {
    document.location.reload();
} else {
   alert ('Дякую за користування нашим сайтом');    
}
