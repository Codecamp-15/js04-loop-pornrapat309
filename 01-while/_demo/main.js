console.log('Learn while loop');

console.log("Starting..")

// let i = 1;
// while (i <= 10) {
//     console.log(i)
//     i++;
// }
// while (++i <= 10) {
//     console.log(i)
// }
// let i = 1;
// while (i <= 20) {
//     if ( i % 3 === 0) {
//         console.log(i)
//     }
//     i++;
// }

let i = 1;
while ( i <= 20) {
    if ( i % 3 === 0 && i % 5 === 0 ) {
        console.log("FizzBuzz");
    } else if ( i % 3 === 0 ) {
        console.log("Fizz");
    } else if ( i % 5 === 0 ) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
    i++;
}
console.log("Ending..")