function fn1() {
    console.log('fn1')
}

function fn2() {
    console.log('fn2')
}


function fn3() {
    console.log('fn3')
}

function fn4() {
    console.log('fn4')
}

function iterator(...fns: Function[]) {
    let index = 0;
    return function () {
        if (index === fns.length) return;
        fns[index++]();
    }
}

const it = iterator(fn1, fn2, fn3, fn4);

it();
it();
it();
it();
it();