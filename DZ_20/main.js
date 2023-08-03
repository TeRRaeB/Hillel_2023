class SuperMath {
    constructor() {
        this.operations = ['+', '-', '/', '*', '%'];
    }

    check(obj) {
        if (!this.isValidOperation(obj.znak)) {
            console.log('Некорректный знак , допустимые значения: +, -, /, *, %');
            this.input(obj);
            return;
        }

        const result = this.calculate(obj.X, obj.Y, obj.znak);
        const message = `Вы хотите выполнить ${obj.X} ${obj.znak} ${obj.Y}? (y/n)`;
        const userInput = prompt(message);

        if (userInput === 'y') {
            console.log(`Результат: ${result}`);
        } else if (userInput === 'n') {
            this.input(obj);
        } else {
            console.log('Некорректный ввод.');
            this.check(obj);
        }
    }

    isValidOperation(znak) {
        return this.operations.includes(znak);
    }

    calculate(X, Y, znak) {
        switch (znak) {
            case '+':
                return X + Y;
            case '-':
                return X - Y;
            case '/':
                return X / Y;
            case '*':
                return X * Y;
            case '%':
                return X % Y;
            default:
                throw new Error('Некорректный знак');
        }
    }

    input() {
        const inputX = parseFloat(prompt('Введите число X'));
        const inputY = parseFloat(prompt('Введите число Y'));
        const inputZnak = prompt('Введите знак операции (+, -, /, *, %):');

        const inputObj = { X: inputX, Y: inputY, znak: inputZnak };
        this.check(inputObj);
    }
}

const p = new SuperMath();
const obj = { X: 12, Y: 3, znak: '/' };
p.check(obj);
