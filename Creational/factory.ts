const enum ProductType {
    A,
    B
}

interface IProduct {
    name: string;
}

class ProductA implements IProduct {
    name: string;
    constructor(name: string) {
        this.name = name;
        console.log('ProductA created:', name);
    }
}

class ProductB {
    name: string;
    constructor(name: string) {
        this.name = name;
        console.log('ProductB created:', name);
    }
}

class Factory {
    // static function as a we don't need to create an instance of Factory to create a product
    static create(type: ProductType, name: string) {
        switch (type) {
            case ProductType.A:
                return new ProductA(name);
            case ProductType.B:
                return new ProductB(name);
        }
    }
}

const productA = Factory.create(ProductType.A, 'ProductA');
const productB = Factory.create(ProductType.B, 'ProductB');
