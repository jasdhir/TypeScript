var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Enumerable(target, propertyKey, descriptor) {
    console.log("-- target --");
    console.log(target);
    console.log("-- proertyKey --");
    console.log(propertyKey);
    console.log("-- descriptor --");
    console.log(descriptor);
    //make the method enumerable
    descriptor.enumerable = true;
}
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.run = function () {
        console.log("inside run method...");
    };
    __decorate([
        Enumerable
    ], Car.prototype, "run", null);
    return Car;
}());
console.log("-- creating instance --");
var car = new Car();
console.log("-- looping --");
for (var key in car) {
    console.log("key: " + key);
}
car.run();
