
function f1(x, y, z) {
  console.log([x, y, z])
}
f1(, 2, 3);
function f2(x, y = 1, z) {
  console.log([x, y, z])
}

f2(1);
f2(1, undefined ,1);
// f(1,  ,1);

