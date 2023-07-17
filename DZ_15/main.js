function summ() {
    let result = 0;
    return function (sum){
        return result += sum;
    }
}

let start = summ();

console.log(start(5));
console.log(start(24));
console.log(start(31));
console.log(start(40));
