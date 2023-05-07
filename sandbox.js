var character = 'mario';
var age = 30;
var isBlackBelt = false;
age = 31;
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(2));
var names = ['luigi', 'mario', 'yoshi'];
names.push('toad');
// names.push(3) error, not a string
names[0] = 'Maciek';
var numbers = [10, 20, 30, 40, 50];
numbers[7] = 3;
var mixedArr = ['ken', 3, false]; // it's fine because mixed values are added on creation. type of the arr is object
mixedArr.push('Hagrid');
mixedArr.push(5);
var ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
ninja.age = 40;
var character2;
var age2;
var isLoggedIn;
//objects
var ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
var ninjaTwo;
ninjaTwo = { name: 'Grzes', age: 2, belt: 'black' };
