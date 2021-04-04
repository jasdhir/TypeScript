var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function notNull(target, propertyKey) {
    Validator.registerNotNull(target, propertyKey);
}
class Validator {
    //todo add more validator maps
    static registerNotNull(target, property) {
        let keys = this.notNullValidatorMap.get(target);
        if (!keys) {
            keys = [];
            this.notNullValidatorMap.set(target, keys);
        }
        keys.push(property);
    }
    static validate(target) {
        let notNullProps = this.notNullValidatorMap.get(Object.getPrototypeOf(target));
        if (!notNullProps) {
            return true;
        }
        let hasErrors = false;
        for (const property of notNullProps) {
            let value = target[property];
            if (!value) {
                console.error(property + " value cannot be null");
                hasErrors = true;
            }
        }
        return hasErrors;
    }
}
Validator.notNullValidatorMap = new Map();
class Person {
    constructor(name) {
        this.name = name;
    }
}
__decorate([
    notNull
], Person.prototype, "name", void 0);
console.log("-- creating instance --");
let person = new Person(null);
console.log(person);
let b = Validator.validate(person);
console.log("validation passed: " + !b);
console.log("-- creating another instance --");
let person2 = new Person("Tina");
console.log(person2);
b = Validator.validate(person2);
console.log("validation passed: " + !b);
