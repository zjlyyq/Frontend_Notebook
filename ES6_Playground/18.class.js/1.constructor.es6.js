class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return this.x + ' ' + this.y;
  }
}

console.log(Point === Point.prototype.constructor) // true 类就是函数，类指向类的原型的构造函数 ？？？
class ColorPoint extends Point {
  constructor(x, y, color) {
    // console.log(super)  // super关键字，只能在在派生类中的方法中用以调用父类的方法，这里是console.log的上下文。会报错。
    super(x, y);
    this.color = color;
  }

  toString() {
    // console.log(super); // super关键字，只能在在派生类中的方法中用以调用父类的方法，这里是console.log的上下文。会报错。
    return this.color + super.toString();
  }
}


let redPoint = new ColorPoint(1, 1, '#f00');
console.log(redPoint.toString());
