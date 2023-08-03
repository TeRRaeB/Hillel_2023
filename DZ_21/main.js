class Person {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}

class Apartment {
    dweller = [];

    addDweller(human) {
        this.dweller.push(human);
    }
}

class House {
    constructor(maxApart) {
        this.apartments = [];
        this.maxAparts = maxApart;
    }

    addApartment(apartment) {
        if (this.apartments.length < this.maxAparts) {
            this.apartments.push(apartment);
        } else {
            console.log('Достигнуто максимальное кол-во квартир.');
        }
    }
}


const person1 = new Person('Tommy', 'man');
const person2 = new Person('Jimmy', 'man');
const person3 = new Person('Lora', 'women');


const apartment1 = new Apartment();
const apartment2 = new Apartment();
const apartment3 = new Apartment();

apartment1.addDweller(person1);
apartment2.addDweller(person2);
apartment3.addDweller(person3);

const house = new House(2);

house.addApartment(apartment1);
house.addApartment(apartment2);
house.addApartment(apartment3); // проверяем проверку на максимальное кол-во квартир.

console.log(house);