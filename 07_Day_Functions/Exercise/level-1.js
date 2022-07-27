// Exercises
// Exercises: Level 1
// 1. Declare a function fullName and it print out your full name.
function fullName() {
    let name = 'harveyy'
    console.log(name)
}
console.log(fullName())
// 2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(firstName, lastName) {
    return firstName + ' ' + lastName
}
console.log(fullName('harveyy', 'xiao'))
// 3. Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(num1, num2) {
    return num1 + num2
}
console.log(addNumbers(1, 2))
// 4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(length, width) {
    return length * width
}
console.log(areaOfRectangle(2, 4))
// 5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length, width) {
    return perimeter = 2 * (length + width)
}
console.log(perimeterOfRectangle(2, 5))
// 6. A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(length, width, height) {
    return length * width * height
}
console.log(volumeOfRectPrism(2, 4, 5))
// 7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(r) {
    return Math.PI * r * r
}
console.log(areaOfCircle(3))
// 8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle(r) {
    return 2 * Math.PI * r
}
console.log(circumOfCircle(10))
// 9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function density(mass, volume) {
    return mass / volume
}
console.log(density(5, 2))
// 10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function speed(distance, time) {
    return distance / time
}
console.log(speed(10, 2))
// 11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function weight(mass, gravity) {
    return mass * gravity
}
console.log(weight(10, 10))
// 12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function convertCelsiusToFahrenheit(oc) {
    return (oc * 9 / 5) + 32
}
console.log(convertCelsiusToFahrenheit(40))
// 13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more
function BMI(weight, height) {
    return weight / (height * height)
}
let bmi = BMI(72, 1.73)
if (bmi > 30) {
    console.log('Obese')
} else if (bmi > 25) {
    console.log('Overweight')
} else if (bmi > 18.5) {
    console.log('Normal weight')
} else {
    console.log('Underweight')
}
// 14. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function getSeason(month) {
    let season = ''
    switch (month) {
        case 'September':
        case 'October':
        case 'November':
            season = 'Autumn'
            break
        case 'December':
        case 'January':
        case 'February':
            season = 'Winter'
            break
        case 'March':
        case 'April':
        case 'May':
            season = 'Spring'
            break
        case 'June':
        case 'July':
        case 'August':
            season = 'Summer'
            break
        default:
            console.log('please input right season')

    }
    return season
}
console.log(getSeason('September'))
console.log(getSeason('July'))
console.log(getSeason('November'))
// 15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
// console.log(findMax(0, 10, 5))
// 10
// console.log(findMax(0, -10, -2))
// 0
function findMax(first, second, third) {
    let max1 = first > second ? first : second
    let max = max1 > third ? max1 : third
    return max
}
console.log(findMax(0, 10, 5))
console.log(findMax(0, -10, -2))