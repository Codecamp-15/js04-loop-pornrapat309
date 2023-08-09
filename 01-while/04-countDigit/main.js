let n = +prompt("Enter number");
let count = 0;
if ( n < 0) n = -n;   // เอาเลขลบด้วย
while (n >= 1) {
    console.log(n);
    count++;
    n = n / 10;
}
console.log(count);

