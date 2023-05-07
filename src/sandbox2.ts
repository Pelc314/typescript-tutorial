// arrow functions
let greet = () => {
    console.log('hello, world');
}

let greet2: Function;

greet2 = () => { console.log('hello world') }

const add = (a: number, b:number)=>{
    console.log(a + b);
}

add(5,10);
