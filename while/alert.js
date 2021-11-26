for (let i=0; i <= 31; i++) {
    if (i % 3 === 0){
        document.write ('#');
    }
    if ((i % 3 === 0) && (i % 5 === 0)) {
        document.write ('&');
    }
    if (!(i % 2 === 0) || !(i %3 === 0) || !(i %5 === 0)) {
        document.write ('_');
    } 
    if (i == 30) {
        document.write ('!');
    }
}
