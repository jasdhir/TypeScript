"use strict";
//'main.ts' file
//importing the Entire Module into a Variable
exports.__esModule = true;
var Emp = require("./module");
console.log(Emp.maxLength); // returns '1200'
Emp.sayHello(); //returns 'hello'
var empObj = new Emp.Employee("Gavin", 2);
empObj.displayEmployee(); // returns 'Employee Code: 2 , Employee Name: Gavin'
