let x = 1;
// var x = 2;
[x] = [33];  
// {x} = {x: 22};  // SyntaxError: Unexpected token '='  —— {x} 会被解析为代码块
({x}= {x: 22});
console.log(x, global.x);