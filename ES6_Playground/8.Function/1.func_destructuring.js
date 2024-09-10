// 函数参数的解构
function m1({x = 0, y = 0 } = {}) {
  console.log([x, y]);
}

m1();

function m2({x, y} = {x: 0, y : 0}) {
  console.log([x, y]);
}

m2();

m1({x: 1})
m2({x: 1})

m1({})
m2({})