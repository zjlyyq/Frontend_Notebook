## 模块化
### AMD
#### Requirejs
##### Requirejs基本使用

见 `Module/AMD/Demo/`

##### r.js

r.js 可以在Nodejs环境下运行，例如：
**hello.js**
```js
define({
    firstName: 'Zhang',
    lastName: 'San'
})
```
**main.js**
```js
define(['person'], function (person) {
    return function say() {
        console.log(`Hello, My name is ${person.firstName} ${person.lastName}`);
    }
})
```

```bash
> r.js Module/main.js     
{ firstName: 'Zhang', lastName: 'San' }
Func say called:
Hello, My name is Zhang San
```
