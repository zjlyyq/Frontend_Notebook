function Point(x, y) {
  this.x = x;
  this.y = y;
  this.formate = function() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}

function PointFactory(x, y) {
  const point = {};
  point.x = x;
  point.y = y;
  point.formate = function() {
    return '(' + this.x + ', ' + this.y + ')';
  }

  return point;
}

var point = new Point(1, 2);
var point2 = new PointFactory(2, 3);
console.log(point instanceof Point, point.toString(), point.formate(), point.__proto__, Point.protoType);
console.log(point2 instanceof PointFactory, point2.formate());