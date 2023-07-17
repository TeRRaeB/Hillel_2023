const arr = ['5', 4, 2, null, 'string', '56', 123, 'hello', -5, '-24'];

function average(arr) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(parseFloat(arr[i]))) {
            sum += parseFloat(arr[i]);
            count++;
        }
    }
    return (sum / count);
}

console.log(average(arr))