class Greeting {
    //fields
    name: string;
    //constructor
    constructor(name: string) {
        this.name = name;
    }
    //methods
    greet() : string {
        return "Hello, " + this.name;
    }
}
//creating an object
let greeter = new Greeting("James");
console.log(greeter.greet()); //returns "Hello, James"
