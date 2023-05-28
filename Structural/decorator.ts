class value {
    val = 0;
    constructor(val: number) {
        this.val = val;
    }
    get value(): number {
        return this.val;
    }
    set value(val: number) {
        this.val = val;
    }
}

const add = (val1: value | number, val2: value | number) => {
    if (typeof val1 === 'number') {
        val1 = new value(val1);
    }
    if (typeof val2 === 'number') {
        val2 = new value(val2);
    }
    return new value(val1.value + val2.value);
}

const sub = (val1: value | number, val2: value | number) => {
    if (typeof val1 === 'number') {
        val1 = new value(val1);
    }
    if (typeof val2 === 'number') {
        val2 = new value(val2);
    }
    return new value(val1.value - val2.value);
}


console.log(add(2, sub(2, 3)))