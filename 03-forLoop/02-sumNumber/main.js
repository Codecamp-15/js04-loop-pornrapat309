let num = 0;
for (let i = 1; i <= 100; i++) {
    num = num + i;
}
console.log(num);


let numEven = 0;
let numOdd = 0;
for (let i = 1; i <= 100; i++) {
    if ( i % 2 === 0) numEven += i;
else numOdd += i;
}
console.log(numEven, numOdd);


let sumEvenSquare = 0;
let sumThirdSquare = 0;

for (let i=1; i<=100; i++) {
    if (i % 2 === 0 ) {
        sumEvenSquare = sumEvenSquare + i ** 2;
    }
    if (i % 3 === 0) {
        sumThirdSquare = sumThirdSquare + i ** 2;
    }
}
console.log(sumEvenSquare - sumThirdSquare);