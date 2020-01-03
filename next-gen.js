// // Let anad Const
// var myName = "Noble";
// console.log(myName);
// myName = "Mcnoble";
// console.log(myName);

// // let myName = "Noble";
// // console.log(myName);
// // myName = "Mcnoble";
// // console.log(myName);

// // const myName = "Noble";
// // console.log(myName);
// // myName = "Mcnoble";
// // console.log(myName);

// // Arrow Functions
// const printMyName = (name) => {
// 	console.log(name);
// }
// printMyName('Noble');

// const multiply = number => {
// 	return number * 2;
// }
// console.log(multiply(2));

// // const multiply = number => number * 2;
// // multiply(2);

// const details =(name, age) => {
// 	console.log(name, age);
// }
// details('Festus', 20);


// // Exports and Imports
// // person.js
// const person = {
// 	name: 'Max';
// }

// export default person;

// // utility.js
// export const clean = () => {   }
// export const baseData = 10;

// // app.js
// import person from './person.js'
// import prs from './person.js'
// import {baseData} from './utility.js'
// import {clean} from './utility.js'

// classes
class Human {
	constructor() {
		this.gender = "male";
		this.age = 20;
	}
	printMyGender () {
		console.log(this.gender);
	}
	printMyAge () {
		console.log(this.age);
	}
}

class Person extends Human {
	// For variables
	constructor() {
		super();           
		this.name = "Noble";
		this.gender = "female";
	}
	// For methods
	printMyName() {
		console.log(this.name);
	}
}
// Instantiation of the class
const person = new Person();
person.printMyName();
person.printMyGender();
person.printMyAge();

