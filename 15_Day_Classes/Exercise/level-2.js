// Exercises Level 2
// 1. Override the method you create in Animal class

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
    say(message) {
        console.log(message)
    }
}

class Dog extends Animal {
    constructor(name, age, color, legs, gender) {
        super(name, age, color, legs)
        this.gender = gender
    }
    say(message) {
        console.log('汪汪汪' + message)
    }
}
let animal = new Animal('罗小黑', 2, 'black', 4, 'female')
animal.say('风起')
let dog = new Dog('哮天犬', 1000, 'black', 4, 'male')
dog.say('二郎神座下')