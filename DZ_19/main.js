class Hamburger {
    static SMALL = {price: 50, calories: 20};
    static LARGE = {price: 100, calories: 40};

    static STUFFING_CHEESE = {price: 10, calories: 20};
    static STUFFING_SALAD = {price: 20, calories: 5};
    static STUFFING_POTATO = {price: 15, calories: 10};

    static TOPPING_SAUCE = {price: 15, calories: 0};
    static TOPPING_MAYO = {price: 20, calories: 5};

    constructor(size, stuff) {
        this.size = size;
        this.stuff = stuff;
        this.topping = [];
    }

    addTopping(topping) {
        this.topping.push(topping);
        return this.topping;
    }

    calculateCalories() {
        const calories = this.size.calories + this.stuff.calories;
        const toppingCalories = this.topping.reduce((a, b) => a + b.calories, 0);
        return (calories + toppingCalories);
    }

    calcualtePrice() {
        const price = this.size.price + this.stuff.price;
        const toppingPrice = this.topping.reduce((a, b) => a + b.price, 0);
        return (price + toppingPrice);
    }
}

let test = new Hamburger(Hamburger.SMALL, Hamburger.STUFFING_CHEESE);
test.addTopping(Hamburger.TOPPING_MAYO);
console.log('Калории первого гамбургера - ' + test.calculateCalories());
console.log('Цена первого гамбургера - ' + test.calcualtePrice());

console.log(test);

let test2 = new Hamburger(Hamburger.LARGE, Hamburger.STUFFING_POTATO);
test2.addTopping(Hamburger.TOPPING_SAUCE);
test2.addTopping(Hamburger.TOPPING_SAUCE);
test2.addTopping(Hamburger.TOPPING_MAYO);
console.log('Калории второго гамбургера - ' + test2.calculateCalories());
console.log('Цена второго гамбургера - ' + test2.calcualtePrice());

console.log(test2);