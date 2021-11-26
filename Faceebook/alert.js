let operation = prompt ('Яку з 4-х тригонометричних операцій ти хочеш здійснити?');
let number = prompt ('Введіть число');
if (operation = 'sin') {
    alert(Math.sin(number));
} else if (operation = 'cos') {
    alert(Math.cos(number));
} else if (operation = 'tg') {
    alert(Math.tan(number));
} else if (operation = 'ctg') {
    alert(1 / Math.tan(number));
}