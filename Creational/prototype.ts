
interface ICloneable {
    shellowClone(): ICloneable;
    deepClone(): ICloneable;
}

class Product implements ICloneable {
    name: string;
    price: number;
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
        console.log('Product created:', name, price);
    }
    shellowClone(): ICloneable {
        return this;
    }
    deepClone(): ICloneable {
        return new Product(this.name, this.price);
    }
}

class User implements ICloneable {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        console.log('User created:', name, age);
    }
    shellowClone(): ICloneable {
        return this;
    }
    deepClone(): ICloneable {
        return new User(this.name, this.age);
    }
}

const product = new Product('Laptop', 999);
const user = new User('John', 30);



