// Exercises: Level 2
// 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
// Enter base: 20
// Enter height: 10
// The area of the triangle is 100
let base = prompt("Enter base: ")
let height = prompt("Enter base: ")
let area = 0.5 * base * height
console.log("The area of the triangle is " + area)

// 2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
// Enter side a: 5
// Enter side b: 4
// Enter side c: 3
// The perimeter of the triangle is 12
let sideA = prompt("Enter side a")
let sideB = prompt("Enter side b")
let sideC = prompt("Enter side c")
let perimeter = sideA + sideB + sideC
console.log("The perimeter of the triangle is " + perimeter)

// 3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let length = prompt("Enter length: ")
let width = prompt("Enter width: ")
let areaRectange = length * width
let perimeterRectange = 2 * (length + width)
// 4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let radius = prompt("Enter radius: ")
let areaCicle = Math.PI * radius * radius
let circumference = 2 * Math.PI * radius
// 5. Calculate the slope, x-intercept and y-intercept of y = 2x -2
let yIntercept = 1
let xIntercept = -2
let slope = (-2 - 0) / (0 - 1)
// 6. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let slope2 = (10 - 2) / (6 - 2)
// 7. Compare the slope of above two questions.
console.log(slope > slope2)
// 8. Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
let x = 1
let y = x * x + 6 * x + 9
x = 2
y = x * x + 6 * x + 9
// x = -3
// 9. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120
let hours = prompt("Enter hours: ")
let rate = prompt("Enter rate per hours: ")
let earn = hours * rate
console.log(`Your weekly earing is ${earn}`)
// 10. If the length of your name is greater than 7 say, your name is long else say your name is short.
let myName = 'harveyy'
myName.length > 7 ? console.log('your name is long') : console.log('your name is short.')

// 11. Compare your first name length and your family name length and you should get this output.
// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// Your first name, Asabeneh is longer than your family name, Yetayeh
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
if (firstName.length > lastName.length) {
    console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`)
}
// 12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
// let myAge = 250
// let yourAge = 25
// I am 225 years older than you.
let myAge = 250
let yourAge = 25
console.log(`I am ${myAge-yourAge} years older than you.`)
// 13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
// Enter birth year: 1995
// You are 25. You are old enough to drive

// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.
let birth = prompt("Enter birth: ")
let nowYear = new Date().getFullYear()
let age = nowYear - birth
if (age > 18) {
    console.log(`You are ${age}. You are old enough to drive`)
} else {
    console.log(`You are ${age}. You will be allowed to drive after ${18-age} years.`)
}
// 14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
// Enter number of years you live: 100
// You lived 3153600000 seconds.
let years = prompt("Enter number of years you live: ")
let seconds = years * 365 * 24 * 3600
console.log(`You lived ${seconds} seconds.`)
// 15. Create a human readable time format using the Date time object
// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm
let date = new Date()
let year = date.getFullYear()
let month = date.getMonth() + 1
let days = date.getDate()
let hours2 = date.getHours()
let minutes = date.getMinutes()
if (month < 10) {
    month = `0${month}`
}
if (days < 10) {
    days = `0${days}`
}
console.log(`${year}-${month}-${days} ${hours2}:${minutes}`)
console.log(`${days}-${month}-${year} ${hours2}:${minutes}`)
console.log(`${days}/${month}/${year} ${hours2}:${minutes}`)