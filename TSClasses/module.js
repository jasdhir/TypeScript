"use strict";
exports.__esModule = true;
exports.maxLength = exports.Employee = exports.sayHello = void 0;
// 'module.ts' file
function sayHello() {
    console.log("hello");
}
exports.sayHello = sayHello;
var Employee = /** @class */ (function () {
    function Employee(name, code) {
        this.empName = name;
        this.empCode = code;
    }
    Employee.prototype.displayEmployee = function () {
        console.log("Employee Code: $ {this.empCode} , Employee Name: " + this.empName + " ");
    };
    return Employee;
}());
exports.Employee = Employee;
exports.maxLength = 1200;
