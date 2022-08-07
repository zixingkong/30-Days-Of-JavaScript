// Exercises
// Exercises Level 1
// 1. Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal {
    constructor(name, age, color, legs) {
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }
    get getName() {
        return this.name
    }

    get getAge() {
        return this.age
    }

    set setName(value) {
        this.name = value
    }

}
let animal = new Animal('小白', 3, 'white', 4)
// console.log(animal.getName()) 错误
console.log(animal.getName)
// animal.setName('罗小黑') 错误
animal.setName = '罗小黑'
console.log(animal.getName)
// 2. Create a Dog and Cat child class from the Animal Class.
class Dog extends Animal {
    constructor(name, age, color, legs, gender) {
        super(name, age, color, legs)
        this.gender = gender
    }
}

class Cat extends Animal {
    constructor(name, age, color, legs, gender) {
        super(name, age, color, legs)
        this.gender = gender
    }
}