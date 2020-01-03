// Let anad Const
var myName = "Noble";
console.log(myName);
myName = "Mcnoble";
console.log(myName);

// let myName = "Noble";
// console.log(myName);
// myName = "Mcnoble";
// console.log(myName);

// const myName = "Noble";
// console.log(myName);
// myName = "Mcnoble";
// console.log(myName);

// Arrow Functions
const printMyName = (name) => {
	console.log(name);
}
printMyName('Noble');

const multiply = number => {
	return number * 2;
}
console.log(multiply(2));

// const multiply = number => number * 2;
// multiply(2);

const details =(name, age) => {
	console.log(name, age);
}
details('Festus', 20);


// Exports and Imports
// person.js
const person = {
	name: 'Max';
}

export default person;

// utility.js
export const clean = () => {   }
export const baseData = 10;

// app.js
import person from './person.js'
import prs from './person.js'
import {baseData} from './utility.js'
import {clean} from './utility.js'
