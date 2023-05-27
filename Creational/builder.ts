interface IBurger {
    name: string;
    price: number;
    addPatty(): void;
    addCheese(): void;
    addTomato(): void;
    addOnion(): void;
    addLettuce(): void;
    addKetchup(): void;
    addMustard(): void;
    addMayonnaise(): void;
    addBarbecue(): void;
}

class Burger implements IBurger {
    name: string;
    price: number;
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
        console.log('Burger created:', name, price);
    }
    addPatty(): void {
        this.price += 1.5;
        console.log('Patty added');
    }
    addTomato() {
        this.price += 0.5;
        console.log('Tomato added');
    }
    addCheese(): void {
        this.price += 0.5;
        console.log('Cheese added');
    }
    addOnion(): void {
        this.price += 0.5;
        console.log('Onion added');
    }
    addLettuce(): void {
        this.price += 0.5;
        console.log('Lettuce added');
    }
    addKetchup(): void {
        this.price += 0.5;
        console.log('Ketchup added');
    }
    addMustard(): void {
        this.price += 0.5;
        console.log('Mustard added');
    }
    addMayonnaise(): void {
        this.price += 0.5;
        console.log('Mayonnaise added');
    }
    addBarbecue(): void {
        this.price += 0.5;
        console.log('Barbecue added');
    }
}

class BurgerBuilder {
    burger: IBurger;
    constructor(name: string, price: number) {
        this.burger = new Burger(name, price);
    }
    addPatty(): BurgerBuilder {
        this.burger.addPatty();
        return this;
    }
    addTomato(): BurgerBuilder {
        this.burger.addTomato();
        return this;
    }
    addCheese(): BurgerBuilder {
        this.burger.addCheese();
        return this;
    }
    addOnion(): BurgerBuilder {
        this.burger.addOnion();
        return this;
    }
    addLettuce(): BurgerBuilder {
        this.burger.addLettuce();
        return this;
    }
    addKetchup(): BurgerBuilder {
        this.burger.addKetchup();
        return this;
    }
    addMustard(): BurgerBuilder {
        this.burger.addMustard();
        return this;
    }
    addMayonnaise(): BurgerBuilder {
        this.burger.addMayonnaise();
        return this;
    }
    addBarbecue(): BurgerBuilder {
        this.burger.addBarbecue();
        return this;
    }
    build(): IBurger {
        return this.burger;
    }
}

const burger = new BurgerBuilder('Burger', 5)
    .addPatty()
    .addCheese()
    .addTomato()
    .addLettuce()
    .addKetchup()
    .addMustard()
    .addMayonnaise()
    .addBarbecue()
    .build();

console.log(burger);
