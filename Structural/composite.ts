class file {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class folder {
    name: string;
    files: Array<file>;
    constructor(name: string) {
        this.name = name;
        this.files = [];
    }
    add(file: file) {
        this.files.push(file);
    }
}

let root = new folder('root');

let folder1 = new folder('folder1');
let folder2 = new folder('folder2');

let file1 = new file('file1');
let file2 = new file('file2');
let file3 = new file('file3');


folder1.add(file1);
folder1.add(file2);

folder2.add(file3);
folder2.add(file1);
