function notNull(target: any, propertyKey: string) {
    Validator.registerNotNull(target, propertyKey);
}

class Validator {
    private static notNullValidatorMap: Map<any, string[]> = new Map();

    //todo add more validator maps

    static registerNotNull(target: any, property: any): void {
        let keys: string[] = this.notNullValidatorMap.get(target);
        if (!keys) {
            keys = [];
            this.notNullValidatorMap.set(target, keys);
        }
        keys.push(property);
    }

    static validate(target: any): boolean {
        let notNullProps: string[] = this.notNullValidatorMap.get(Object.getPrototypeOf(target));
        if (!notNullProps) {
            return true;
        }
        let hasErrors: boolean = false;
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

class Person {
    @notNull
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

console.log("-- creating instance --");
let person: Person = new Person(null);
console.log(person);
let b = Validator.validate(person);
console.log("validation passed: " + !b);
console.log("-- creating another instance --");
let person2: Person = new Person("Tina");
console.log(person2);
b = Validator.validate(person2);
console.log("validation passed: " + !b);