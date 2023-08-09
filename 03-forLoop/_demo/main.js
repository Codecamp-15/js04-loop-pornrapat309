console.log("Starting...")

// for ( let i = 0; i < 3; i++) {
//     console.log("Hello")
// }

// for ( let i = 2; i <= 20; i + 2) {   // หาเลขคู่
//     console.log(i);  
// }


// for ( let i = 1; i <= 20; i++) {
//     if ( i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if ( i % 3 === 0) {
//         console.log("Fizz");
//     } else if ( i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }

// EXE 3 : Skip Fizz
// for ( let i = 1; i <= 20; i++) {
//     if ( i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if ( i % 3 === 0) {
//         continue;
//     } else if ( i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }

// EXE 4 : Concat String
// let str = ""
// for (let i = 1; i <= 10; i++) {
//     if (i % 3 === 0) continue;
//     str += i;
// }
// console.log(str);

//EXE 5 : remove vowel
// let src = "codecamp"
// let res = "";
// for (let i = 0; i < src.length; i++) {
//     let c = src[i];
//     if (c == "a" || c == "e" || c == "i" || c == "o" || c == "u") continue;
//     res = res + src[i]
// }
// console.log(res);

// ADVANCE : Nested Loop; : Multiplication Tab;e
for (let i = 2; i <= 3; i++) {
    console.log(`เริ่มท่องสูตรคูณแม่ ${i}`)
    for (let j = 1; j <= 12; j++) {
        console.log(`${i} * ${j} = ${ i * j}`)
    }
    console.log("\n")
}
console.log("Ending...")