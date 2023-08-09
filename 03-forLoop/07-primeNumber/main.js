for (let i = 1; i <= 100; i++) {
    let num = 0;
    for ( let j = 1; j <= i; j++) {
        if (i % j === 0) {
            num++;
        }
    }
    if (num === 2) {
        console.log(i);
    }
}

