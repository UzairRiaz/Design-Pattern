interface IUser {
    name: string;
    age: number;
}

interface AIProduct {
    name: string;
    price: number;
}

abstract class AbstractFactory {
    abstract createUser(name: string, age: number): IUser;
    abstract createProduct(name: string, price: number): AIProduct;
}

class AFactory extends AbstractFactory {
    createUser(name: string, age: number): IUser {
        return new User(name, age);
    }
    createProduct(name: string, price: number): AIProduct {
        return new Product(name, price);
    }
}

class User {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        console.log('User created:', name, age);
    }
}

class Product {
    name: string;
    price: number;
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
        console.log('Product created:', name, price);
    }
}

AFactory.prototype.createUser('John', 30);
AFactory.prototype.createProduct('Laptop', 999);
