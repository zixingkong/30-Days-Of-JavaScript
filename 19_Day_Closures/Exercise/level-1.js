// Exercises
// Exercises: Level 1
// 1. Create a closure which has one inner function
function outerFunction() {
    let count = 65;

    function innerFunction() {
        let char = String.fromCharCode(count++);
        return char;
    }
    return innerFunction
}

let innerFunction = outerFunction()
console.log(innerFunction())
console.log(innerFunction())
console.log(innerFunction())
console.log(innerFunction())
console.log(innerFunction())
console.log(innerFunction())
console.log(innerFunction())
console.log(innerFunction())