var Greeting = /** @class */ (function () {
    //constructor
    function Greeting(name) {
        this.name = name;
    }
    //methods
    Greeting.prototype.greet = function () {
        return "Hello, " + this.name;
    };
    return Greeting;
}());
//creating an object
var greeter = new Greeting("James");
console.log(greeter.greet()); //returns "Hello, James"
