define(['person'], function (person) {
    return function say() {
        console.log(`Hello, My name is ${person.firstName} ${person.lastName}`);
    }
})