console.log("Hello")

function Obj(name, age){
    this.name = name;
    this.age = age;
    this.data = () => {
        console.log(`Hello my name is ${this.name} and I am ${this.age} years old`)
    }
}
let myObj = new Obj("Susan", 23)
console.log(myObj)
myObj.data()