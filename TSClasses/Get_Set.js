var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    Object.defineProperty(MyClass.prototype, "area", {
        get: function () {
            return this.width * this.height;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyClass.prototype, "setWidth", {
        set: function (newWidth) {
            console.log("setting width for square...");
            this.width = newWidth;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyClass.prototype, "setHeight", {
        set: function (newHeight) {
            console.log("setting height for square...");
            this.height = newHeight;
        },
        enumerable: false,
        configurable: true
    });
    return MyClass;
}());
var obj = new MyClass();
obj.setWidth = 10;
obj.setHeight = 5;
console.log("area: " + obj.area);
//output will be:
//setting width for square...
//setting height for square...
//area: 50
