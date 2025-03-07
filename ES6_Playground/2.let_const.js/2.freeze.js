const person = Object.freeze({ name: '张三', parents: [] })

const personProxy = new Proxy(person, {
    get(target, key) {
        return target[key];
    },
    set(target, key, value) {
        target[key] = value;
        console.log(`set ${key} = ${value}: `, target);
    }
})
personProxy.age = 0;   // 不起作用
personProxy.name = '李四'; // 不起作用
personProxy.parents = ['mother']; // 不起作用
personProxy.parents.push('father'); // 起作用
console.log(person);


/**
 * 彻底冻结一个对象
 */

const constantize = (obj) => {
    Object.freeze(obj);
    Object.keys(obj).forEach(key => {
        if (typeof obj[key] === 'object') {
            constantize(obj[key]);
        }
    })
}