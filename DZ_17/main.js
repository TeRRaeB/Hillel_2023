class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    snowInfo() {
        return (`Имя : ${this.name} , возрост: ${this.age}`);
    }
}

class Cars extends Person {
    constructor(name, age, brand, model, release, color) {
        super(name, age);
        this.brand = brand;
        this.model = model;
        this.release = release;
        this.color = color;
    }
    snowInfoCar() {
        if(this.age < 18){
            console.log(`${this.name} не является владельцем ${this.brand}`);
        }
    console.log(`Марка авто: ${this.brand} , Модель: ${this.model}, Год выпуска: ${this.release}, Цвет: ${this.color}.
        Информация о владельце:${this.snowInfo()}`)
}
}

const car = new Cars('Дима', 12, 'BMW', 'X5', 2020, 'красный');
const car2 = new Cars('Сережа', 18, 'AUDI', 'A4', 2012, 'черный');
const car3 = new Cars('Петя', 33, 'ВАЗ', '2105', 1999, 'бежевый');

console.log(car.snowInfoCar());
console.log(car2.snowInfoCar());
console.log(car3.snowInfoCar());