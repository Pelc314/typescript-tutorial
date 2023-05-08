// arrow functions
let sayHello = () => {
    console.log('hello, world');
}

let greet2: Function;

greet2 = () => { console.log('hello world') }

// argument with a question mark is optional, default value also makes a parameter optional.
// this returns void
const add = (a: number, b: number, c?: number, d: string = '10') => {
    console.log(a + b);
}

add(5, 10);

const addition = (a: number, b: number): number => {
    return a + b;
}

let result = addition(10, 7);

console.log(result);
console.log(result);

