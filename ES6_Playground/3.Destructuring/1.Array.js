let [foo, [[bar], baz]] = [1, [[2], 3]];
foo // 1
bar // 2
baz // 3

let [ , , third] = ["foo", "bar", "baz"];
third // "baz"

let [x, , y] = [1, 2, 3];
x // 1
y // 3

let [head, ...tail] = [1, 2, 3, 4];
head // 1
tail // [2, 3, 4]

let [x, y, ...z] = ['a'];
x // "a"
y // undefined
z // []

// 不完全解构
let [x, y] = [1, 2, 3];
x // 1
y // 2

let [a, [b], d] = [1, [2, 3], 4];
a // 1
b // 2
d // 4

// 本质上，数组形式的解构只需要等号右边是可迭代对象
let [p1, ...p2] = {
  [Symbol.iterator]: function it() {
    let count = 0;
    return {
      next() {
        let rand = Math.random(10);
        console.log(rand);
        return {
          value: count ++,
          done: rand > 0.9
        }
      }
    } 
  }
}

function() {
  let count = 0;
  return {
    next() {
      let rand = Math.random(10);
      return {
        value: count ++,
        done: rand > 0.5
      }
    }
  } 
}