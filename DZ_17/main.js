function Person(name, age) {
    this.name = name;
    this.age = age;
    this.snowInfo = function () {
        return `${this.name} , ${this.age}`;
    }
}

function Cars(brand, model, release, color, person) {
    this.brand = brand;
    this.model = model;
    this.release = release;
    this.color = color;

    if ((person instanceof Person)) {
        if (person.age >= 18) {
            this.owner = person;
        } else {
            console.log('Владелец автомобиля должен быть старше 18 лет.');
            this.owner = person;
        }
    }
    this.snowInfoCar = function () {
        console.log(`Марка авто: ${this.brand} , Модель: ${this.model}, Год выпуска: ${this.release}, Цвет: ${this.color}.
        Информация о владельце: ${this.owner.snowInfo()}`)
    }
}

const jon = new Person('Дима', 18);
const car = new Cars('BMW', 'X5', 2020, 'красный', jon);

car.snowInfoCar();