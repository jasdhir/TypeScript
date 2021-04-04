var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function SelfDriving(constructorFunction) {
    console.log('-- decorator function invoked --');
    constructorFunction.prototype.selfDrivable = true;
}
var Car = /** @class */ (function () {
    function Car(make) {
        console.log('-- this constructor invoked --');
        this._make = make;
    }
    Car = __decorate([
        SelfDriving
    ], Car);
    return Car;
}());
console.log('-- creating an instance --');
var car = new Car("Nissan");
console.log(car);
console.log("selfDriving: " + car['selfDrivable']);
console.log('-- creating one more instance --');
car = new Car("Toyota");
console.log(car);
console.log("selfDriving: " + car['selfDrivable']);
