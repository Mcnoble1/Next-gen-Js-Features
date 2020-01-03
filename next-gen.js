// // Let anad Const
// var myName = "Noble";
// console.log(myName);
// myName = "Mcnoble";
// console.log(myName);

 let myName = "Noble";
 console.log(myName);
 myName = "Mcnoble";
 console.log(myName);

 const myBrandName = "McNoble";
 console.log(myBrandName);
 // myBrandName = "Mcnoble";
 // console.log(myName);

// // Arrow Functions
const printMyName = (name) => {
console.log(name);
 }
printMyName('Noble');

const multiply = number => {
	return number * 2;
 }
console.log(multiply(2));

const mult = number => number * 2;
 mult(2);

const details =(name, age) => {
	console.log(name, age);
 }
details('Festus', 20);


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
// class Human {
// 	constructor() {
// 		this.gender = "male";
// 		this.age = 20;
// 	}
// 	printMyGender () {
// 		console.log(this.gender);
// 	}
// 	printMyAge () {
// 		console.log(this.age);
// 	}
// }

// class Person extends Human {
// 	// For variables
// 	constructor() {
// 		super();           
// 		this.name = "Noble";
// 		this.gender = "female";
// 	}
// 	// For methods
// 	printMyName() {
// 		console.log(this.name);
// 	}
// }


// Using ES7
class Human {
	gender = "male";
	printMyGender = () => {
		console.log(this.gender);
	}
}

class Person extends Human {
	name = "Festus";
	printMyName = () => {
		console.log(this.name);
	}
}

// Instantiation of the class
const person = new Person();
person.printMyName();
person.printMyGender();


// Spread and Rest Operator ...
// Spread
const oldArray = [2,4,6];
const newArray = [...oldArray,8,10];
console.log(newArray);

const bioData = {
	name : "Festus",
	age : 20,
	job : "web developer"
}
const newBioData = {
	...bioData,
	level : 300
}
console.log(newBioData);
// Rest
const filter = (...args) => {
	return args.filter(el => (el / 2) === 1);
} 
console.log(filter(1,2,3));