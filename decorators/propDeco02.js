var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class Employee {
}
__decorate([
    logProperty
], Employee.prototype, "name", void 0);
//property decorator
function logProperty(target, key) {
    // property value
    var _val = this[key];
    // property getter
    var getter = function () {
        console.log(`Get: ${key} => ${_val}`);
        return _val;
    };
    // property setter
    var setter = function (newVal) {
        console.log(`Set: ${key} => ${newVal}`);
        _val = newVal;
    };
    // Delete property.
    if (delete this[key]) {
        // Create new property with getter and setter
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    }
}
let emp = new Employee();
emp.name = 'Jas';
console.log(emp.name);
