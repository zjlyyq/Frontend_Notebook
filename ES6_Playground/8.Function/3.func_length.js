function f1(x, y, z) {
  console.log([x, y, z]);
}

console.log(f1.length);


function f2(x = 1, y, z) {
  console.log([x, y, z]);
}

console.log(f2.length);