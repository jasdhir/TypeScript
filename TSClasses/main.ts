//'main.ts' file
//importing the Entire Module into a Variable

import * as Emp from "./module";

console.log(Emp.maxLength); // returns '1200'

Emp.sayHello(); //returns 'hello'

let empObj = new Emp.Employee("Gavin" , 2);
empObj.displayEmployee(); // returns 'Employee Code: 2 , Employee Name: Gavin'
