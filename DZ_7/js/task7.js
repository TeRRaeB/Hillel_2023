let sum = 0;
for (let i = 30; i <= 80; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    sum = sum + i;
}
console.log(sum);