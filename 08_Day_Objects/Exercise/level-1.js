// Exercises
// Exercises: Level 1
// 1. Create an empty object called dog
let dog = {}
// 2. Print the the dog object on the console
console.log(dog)
// 3. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = '哮天犬'
dog.legs = 4 
dog.color = '黑色'
dog.age = 1500 
dog.bark = function () {
    return 'woof woof'
}
// 4. Get name, legs, color, age and bark value from the dog object
console.log(dog.name)
console.log(dog.legs)
console.log(dog.color)
console.log(dog.age)
console.log(dog.bark())
// 5. Set new properties the dog object: breed, getDogInfo
dog.breed = '牧羊犬'
dog.getDogInfo = function(){
    let info = `${dog.name}
    ${dog.legs}
    ${dog.color}
    ${dog.name}
    ${dog.age}`
    return info
}

console.log(dog.getDogInfo())