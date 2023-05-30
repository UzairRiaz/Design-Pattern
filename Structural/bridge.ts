interface IShape {
    draw(): void;
}

class Circle implements IShape {
    draw() {
        console.log("      * *     ");
        console.log("    *     *    ");
        console.log("    *     *    ");
        console.log("      * *     ");
    }
}

class Square implements IShape {
    draw() {
        console.log("   * * * * *   ");
        console.log("   *       *   ");
        console.log("   *       *   ");
        console.log("   *       *   ");
        console.log("   * * * * *   ");
    }
}

const circle = new Circle();
const square = new Square();
circle.draw();
square.draw();
