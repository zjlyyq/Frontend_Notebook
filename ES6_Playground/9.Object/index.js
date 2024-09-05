const obj = {
  a: 1,
  b: 2
};

Object.defineProperty(obj, 'c', {
  value: 3,
  enumerable: false
});

console.log(Object.keys(obj)); // 输出: ['a', 'b'], 'c' 不可枚举

for (let key in obj) {
  console.log(key); // 输出: 'a'、 'b', 'c' 不可枚举
}

console.log(Object.getOwnPropertyNames(obj)); // 输出: ['a', 'b', 'c'], 'c' 也会被列出来