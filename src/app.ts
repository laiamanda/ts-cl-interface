// interface Person {
//     name: string;
//     age: number;

//     greet(phrase: string): void;
// }

// let user1: Person;
// user1 = {
//     name: 'Amanda',
//     age: 22,
//     greet(phrase:string){
//         console.log(phrase + ' ' + this.name);
//     }
// };

// user1.greet('Howdy there - I am');
// type AddFn = (a: number, b: number) => number;
interface AddFn{
    (a:number, b:number):number;
}
let add: AddFn;
add = (n1: number, n2: number) => {
    return n1 + n2;
}

interface Named {
    readonly name?: string;
    outputName?: string; // ? = optional
}

interface Greetable extends Named {
    greet(phrase: string): void;
}
class Person implements Greetable{
    name?: string;
    age = 22;

    constructor(n?: string){
        if(n){
            this.name = n;
        }
    }
    greet(phrase:string){
        if(this.name){
            console.log(phrase + ' ' + this.name);
        }
        else{
            console.log('Howdy');
        }
    }
}

let user1: Greetable;
user1 = new Person('Amanda');

user1.greet('Howdy there - I am');
console.log(user1);