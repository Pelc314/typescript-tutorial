// this function takes an argument which can be either string or a number
const logDetails = (uid: string | number, item: string)=>{
    console.log(`${item} has a uid of ${uid}`)
}

// it is possible to define a type if needed, it's called an alias.
type StringOrNum = string | number;

const logDetails2 = (uid: StringOrNum, item: string)=>{
    console.log(`${item} has a uid of ${uid}`)
}

//greet is a signature function
let greet: (a: string, b:string) => void

greet = (name:string, greeting:string)=>{
    console.log(`${name} says ${greeting}`)
}


