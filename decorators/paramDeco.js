var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function notNull(target, propertyKey, parameterIndex) {
    console.log("param decorator notNull function invoked ");
    Validator.registerNotNull(target, propertyKey, parameterIndex);
}
function validate(target, propertyKey, descriptor) {
    console.log("method decorator validate function invoked ");
    let originalMethod = descriptor.value;
    //wrapping the original method
    descriptor.value = function (...args) {
        if (!Validator.performValidation(target, propertyKey, args)) {
            console.log("validation failed, method call aborted: " + propertyKey);
            return;
        }
        let result = originalMethod.apply(this, args);
        return result;
    };
}
class Validator {
    //todo add more validator maps
    static registerNotNull(target, methodName, paramIndex) {
        let paramMap = this.notNullValidatorMap.get(target);
        if (!paramMap) {
            paramMap = new Map();
            this.notNullValidatorMap.set(target, paramMap);
        }
        let paramIndexes = paramMap.get(methodName);
        if (!paramIndexes) {
            paramIndexes = [];
            paramMap.set(methodName, paramIndexes);
        }
        paramIndexes.push(paramIndex);
    }
    static performValidation(target, methodName, paramValues) {
        let notNullMethodMap = this.notNullValidatorMap.get(target);
        if (!notNullMethodMap) {
            return true;
        }
        let paramIndexes = notNullMethodMap.get(methodName);
        if (!paramIndexes) {
            return true;
        }
        let hasErrors = false;
        for (const [index, paramValue] of paramValues.entries()) {
            if (paramIndexes.indexOf(index) != -1) {
                if (!paramValue) {
                    console.error("method param at index " + index + " cannot be null");
                    hasErrors = true;
                }
            }
        }
        return !hasErrors;
    }
}
Validator.notNullValidatorMap = new Map();
class Task {
    run(name) {
        console.log("running task, name: " + name);
    }
}
__decorate([
    validate,
    __param(0, notNull)
], Task.prototype, "run", null);
console.log("-- creating instance --");
let task = new Task();
console.log("-- calling Task#run(null) --");
task.run(null);
console.log("----------------");
console.log("-- calling Task#run('test') --");
task.run("test");
