// Exercises: Level 2
// 1. Create a closure which has three inner functions

function outerFunction() {
    let count = 10;

    function pow() {
        return Math.pow(count, 2);
    }

    function squareRoot() {
        return Math.sqrt(count)
    }

    function factorial() {
        let sum = 1
        for (let i = 1; i < count; i++) {
            sum *= i
        }
        return sum
    }
    return {
        pow: pow(),
        squareRoot: squareRoot(),
        factorial: factorial()
    }
}

let innerFunction = outerFunction()
console.log(innerFunction.pow)
console.log(innerFunction.squareRoot)
console.log(innerFunction.factorial)