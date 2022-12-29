// interface Person {
//     name: string;
//     age: number;
var add;
add = function (n1, n2) {
    return n1 + n2;
};
var Person = /** @class */ (function () {
    function Person(n) {
        this.age = 22;
        if (n) {
            this.name = n;
        }
    }
    Person.prototype.greet = function (phrase) {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        }
        else {
            console.log('Howdy');
        }
    };
    return Person;
}());
var user1;
user1 = new Person('Amanda');
user1.greet('Howdy there - I am');
console.log(user1);
