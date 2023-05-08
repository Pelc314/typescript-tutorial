"use strict";
// arrow functions
let sayHello = () => {
    console.log('hello, world');
};
let greet2;
greet2 = () => { console.log('hello world'); };
// argument with a question mark is optional, default value also makes a parameter optional.
// this returns void
const add = (a, b, c, d = '10') => {
    console.log(a + b);
};
add(5, 10);
const addition = (a, b) => {
    return a + b;
};
let result = addition(10, 7);
console.log(result);
console.log(result);
