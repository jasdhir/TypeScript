class Employee {
    readonly name: string;
    readonly dept_id: number = 123;
    constructor (name: string) {
        this.name = name;
    }
}

let e1 = new Employee("Grace");
e1.dept_id = "543"; // error! dept_id is readonly.
