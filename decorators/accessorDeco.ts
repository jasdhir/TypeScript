function Enumerable(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    //make the method enumerable
    descriptor.enumerable = true;
}

class Person {
    _name: string;

    constructor(name: string) {
        this._name = name;
    }

    @Enumerable
    get name() {
        return this._name;
    }
}

console.log("-- creating instance --");
let person = new Person("Diana");
console.log("-- looping --");
for (let key in person) {
    console.log(key + " = " + person[key]);
}