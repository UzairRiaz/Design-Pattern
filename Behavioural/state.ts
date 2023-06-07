class Context {
    private state: State;
    constructor(state: State) {
        this.state = state;
    }
    public setState(state: State) {
        this.state = state;
    }
    public getState(): State {
        return this.state;
    }
}

interface State {
    handle(context: Context): void;
}

class ConcreteStateA implements State {

    public handle(context: Context): void {
        console.log('ConcreteStateA handles request.');
        context.setState(new ConcreteStateB());
    }
}

class ConcreteStateB implements State {

    public handle(context: Context): void {
        console.log('ConcreteStateB handles request.');
        context.setState(new ConcreteStateA());
    }
}

const context: Context = new Context(new ConcreteStateA());
context.getState().handle(context);
context.getState().handle(context);