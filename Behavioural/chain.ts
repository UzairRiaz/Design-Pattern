// Usually Used in Express app

class MyRequest {
    amount: number;
    constructor(amount: number) {
        this.amount = amount;
    }
}

abstract class Handler {
    protected successor: Handler | null = null;

    public setSuccessor(successor: Handler): void {
        this.successor = successor;
    }

    public abstract handle(request: MyRequest): void;
}

class ConcreteHandler1 extends Handler {
    public handle(request: MyRequest): void {
        if (request.amount < 0) {
            console.log(`ConcreteHandler1: ${request.amount}`);
        } else if (this.successor) {
            this.successor.handle(request);
        }
    }
}

class ConcreteHandler2 extends Handler {
    public handle(request: MyRequest): void {
        if (request.amount < 100) {
            console.log(`ConcreteHandler2: ${request.amount}`);
        } else if (this.successor) {
            this.successor.handle(request);
        }
    }
}

class ConcreteHandler3 extends Handler {

    public handle(request: MyRequest): void {
        if (request.amount < 1000) {
            console.log(`ConcreteHandler3: ${request.amount}`);
        } else if (this.successor) {
            this.successor.handle(request);
        }
    }
}

const h1: Handler = new ConcreteHandler1();
const h2: Handler = new ConcreteHandler2();
const h3: Handler = new ConcreteHandler3();

h1.setSuccessor(h2);
h2.setSuccessor(h3);

const request: MyRequest = new MyRequest(0);
h1.handle(request);
