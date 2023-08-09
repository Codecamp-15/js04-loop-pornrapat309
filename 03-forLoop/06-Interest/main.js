let capital = 10000;
for ( let i = 2; i <= 10; i++) {
    capital = (capital + (capital/100)*2.5);
}
console.log(capital);