const list = [1, 3, 5, 7];

function Person() {

}

let proxy = new Proxy(list, {
  enumerate: (target) => {
    console.log('for in catched');
    return []
  },

  // 拦截propKey in proxy
  has(target, propKey) {
    console.log('has: ', propKey);
    return !!target[propKey];
  },

  hasOwn(target, propKey) {
    console.log('hasOwn: ', propKey);
    return !!target[propKey];
  },

  /**
   Proxy 对象的 handler 中的 ownKeys 方法是用来拦截对目标对象自身属性的查询操作的。
   当使用 Object.keys()、Object.getOwnPropertyNames() 或 for...in 循环等方法来获
   取目标对象的属性键时，ownKeys 方法会被触发。
   */
  ownKeys(target) {
    const keys = Object.keys(target).concat(['length']);
    console.log('ownKeys', keys);
    return keys;
  }
})

// enumerate 拦截
for(let x in proxy) {
  console.log('for-in:', x);
}

// has 拦截
if ('name' in proxy) {
  console.log(list['name'])
}

// hasOwn
if (proxy.hasOwnProperty('name')) {
  console.log(list['name'])
}

// ownKeys
console.log(Object.keys(proxy));