for (let i = 1; i <= 10; i++) {
    document.write('<h3> Таблица умножение для ' + i + '</h3>');
    for (let b = 1; b <= 10; b++) {
        let umnojenie = i * b;
        document.write(`${i} x ${b} = ${umnojenie} <br>`);
    }
}