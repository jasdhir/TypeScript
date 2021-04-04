class MyTask {
    constructor(name) {
        this.name = name;
    }
    run(arg) {
        console.log(`running: ${this.name}, arg: ${arg}`);
    }
}
let myTask = new MyTask('someTask');
myTask.run("test");
