class MyClass { 
    private width: number; 
    private height:number; 
    get area() { 
        return this.width * this.height; 
    } 
    set setWidth(newWidth : number){
        console.log("setting width for square...");
        this.width = newWidth;
    }
    set setHeight(newHeight : number){
        console.log("setting height for square...");
        this.height = newHeight;
    }
} 
let obj = new MyClass();

obj.setWidth = 10;
obj.setHeight = 5;
//setting height for square...
//area: 50
