let count = 0;
let sum = 0;
let number;

do {
    number = prompt("Enter number");

    if ( number === null || number <= "0" || number === "") {
        break;
    } 

    if (!isNaN(number)) {
        sum += +number;
        count++;
    } else {
        alert("Invalid number");
    }
} while (true);

if ( count > 0) {
    let average = sum / count;
    alert(`Sum = ${sum}, Average = ${average}`);
} else {
    alert("Not input number");
}