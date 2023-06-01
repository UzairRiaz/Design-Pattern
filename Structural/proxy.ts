
interface ISubject {
    data: string;
    request(): void;
}

class realData implements ISubject {
    data: string;
    constructor() {
        this.data = 'realData';
    }
    public request(): void {
        console.log('realData request');
    }
}

class proxyData implements ISubject {
    data: string;
    realData: realData;
    constructor() {
        this.data = 'proxyData';
        this.realData = new realData();
    }
    public request(): void {
        this.realData.request();
    }
}

const proxy = new proxyData();
proxy.request();
