//const name = "lee", age = 1, gender = "male";

const sayHi = (name:string, age:number, gender?:string): String =>{
   // console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
    return `Hello ${name}, you are ${age}, you are a ${gender}`;
}

console.log(sayHi("lee",10,"male"));

export {};