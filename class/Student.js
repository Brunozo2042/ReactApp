const Person = require('./Person')

class Student extends Person{

    constructor(name,age,rgm){
        super(name,age)
        this.rgm = rgm
    }

    greetings(){
        console.log("Hello World, my name is", this.name,"my RGM is", this.rgm);
    }

}

module.exports = Student