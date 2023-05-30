
class SubSystem1 {

    public operation1(): string {
        return 'Subsystem1: Ready!\n';
    }

    public operationN(): string {
        return 'Subsystem1: Go!\n';
    }
}

class SubSystem2 {

    public operation1(): string {
        return 'Subsystem2: Get ready!\n';
    }

    public operationZ(): string {
        return 'Subsystem2: Fire!';
    }
}

class Facade {
    operation(): string {
        const subsystem1 = new SubSystem1();
        const subsystem2 = new SubSystem2();
        let result = 'Facade initializes subsystems:\n';
        result += subsystem1.operation1();
        result += subsystem2.operation1();
        result += 'Facade orders subsystems to perform the action:\n';
        result += subsystem1.operationN();
        result += subsystem2.operationZ();
        return result;
    }
}

function clientCode(facade: Facade) {
    console.log(facade.operation());
}
