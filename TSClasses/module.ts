// 'module.ts' file
export function sayHello(){
    console.log("hello");
}

export class Employee{
    empCode: number;
    empName: string;
    constructor(name: string, code: number) {
        this.empName = name;
        this.empCode = code;
    }
    displayEmployee(){
    console.log(`Employee Code: $ {this.empCode} , Employee Name: ${this.empName} `);
  
    }
}

export const maxLength : number = 1200;
