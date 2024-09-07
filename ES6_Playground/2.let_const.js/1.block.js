var tmp = new Date();

function f() {
  console.log(tmp);
  if (false) {
    // var tmp = 'hello world';
  }
}

f(); // undefined (var命令会发生”变量提升“现象，即变量可以在声明之前使用，值为undefined。)