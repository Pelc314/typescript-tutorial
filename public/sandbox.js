"use strict";
const character = 'mario';
let age = 30;
let isBlackBelt = false;
age = 31;
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(2));
let names = ['luigi', 'mario', 'yoshi'];
names.push('toad');
// names.push(3) error, not a string
names[0] = 'Maciek';
let numbers = [10, 20, 30, 40, 50];
numbers[7] = 3;
let mixedArr = ['ken', 3, false]; // it's fine because mixed values are added on creation. type of the arr is object
mixedArr.push('Hagrid');
mixedArr.push(5);
let ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
ninja.age = 40;
let character2;
let age2;
let isLoggedIn;
//objects
let ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
let ninjaTwo;
ninjaTwo = { name: 'Grzes', age: 2, belt: 'black' };
console.log('test');
