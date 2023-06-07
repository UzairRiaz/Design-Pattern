class Observer {
    update() {
        console.log('Observer: My state has just changed');
    }
}

class Subject {
    private observers: Observer[] = [];

    public attach(observer: Observer): void {
        this.observers.push(observer);
    }

    public detach(observer: Observer): void {
        const observerIndex: number = this.observers.indexOf(observer);
        this.observers.splice(observerIndex, 1);
    }

    public notify(): void {
        for (const observer of this.observers) {
            observer.update();
        }
    }
}

const subject: Subject = new Subject();
const observer1: Observer = new Observer();

subject.attach(observer1);

subject.notify(); // Observer: My state has just changed

subject.detach(observer1);

subject.notify(); // Nothing happens