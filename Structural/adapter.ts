// Adapter pattern -- Structural example

interface IA {
    methodA(): void;
}

class A implements IA {
    public methodA(): void {
        console.log('methodA of A');
    }
}

interface IB {
    methodB(): void;
}

class B implements IB {
    public methodB(): void {
        console.log('methodB of B');
    }
}

class Adapter implements IA {
    private adaptee: IB;

    constructor(adaptee: IB) {
        this.adaptee = adaptee;
    }

    public methodA(): void {
        console.log('methodA of Adapter');
        this.adaptee.methodB();
    }
}

const ITEMS = [new A(), new Adapter(new B())];

ITEMS.forEach((item) => {
    item.methodA();
});
