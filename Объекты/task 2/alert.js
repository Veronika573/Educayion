let double = {
    name: 'double'
}



double.make = function(a) {
    if (typeof a == 'number'){
        return a * 2;
    } else {
        return 'Please, provide a number'
    }
}