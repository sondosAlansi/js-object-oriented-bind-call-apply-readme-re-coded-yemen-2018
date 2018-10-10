function greet() {
    console.log(`my name is ${this.name}, hi!`);
}
 
greet(); // my name is , hi!
 
let person = {
    name: 'Bob',
    greet: greet
};
 
person.greet();

function greet() {
    console.log(`my name is ${this.name}, hi!`);
}
 
let sally = { name: 'Sally' };
 
greet.call(sally);
// my name is Sally, hi!
 
greet.apply(sally);


let sally = { name: 'Sally' };
 
function greet(customerOne, customerTwo) {
    console.log(`Hi ${customerOne} and ${customerTwo}, my name is ${this.name}!`);
}
 
greet.call(sally, 'Terry', 'George');