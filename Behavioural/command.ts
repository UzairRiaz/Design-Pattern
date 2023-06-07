interface Command {
    execute(): void;
}

class ConcreteCommand implements Command {
    private receiver: Receiver;

    constructor(receiver: Receiver) {
        this.receiver = receiver;
    }

    public execute(): void {
        this.receiver.action();
    }
}

class Receiver {
    public action(): void {
        console.log('Receiver: Action');
    }
}

class Invoker {
    private command: Command;

    constructor(command: Command) {
        this.command = command;
    }

    public setCommand(command: Command): void {
        this.command = command;
    }

    public executeCommand(): void {
        this.command.execute();
    }
}

const receiver: Receiver = new Receiver();
const command: Command = new ConcreteCommand(receiver);
const invoker: Invoker = new Invoker(command);

invoker.executeCommand();
