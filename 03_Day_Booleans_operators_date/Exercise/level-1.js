// Exercises: Level 1
// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = 'wang'
let lastName = 'xiaobo'
let country = 'China'
let city = 'Changsha'
let age = 18
let isMarried = false
let year1 = 2022
console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof year1)
// 2. Check if type of '10' is equal to 10
console.log(typeof '10' == typeof 10)
// 3. Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') == 10)
// 4. Boolean value is either true or false.

// Write three JavaScript statement which provide truthy value.
// Write three JavaScript statement which provide falsy value.

let trueValue1 = 'false'
let trueValue2 = -1
let trueValue3 = new Object()
console.log(Boolean(trueValue1) == true)
console.log(Boolean(trueValue2) == true)
console.log(Boolean(trueValue3) == true)

let falseValue1 = 0
let falseValue2 = ''
let falseValue3 = null

console.log(Boolean(falseValue1) == false)
console.log(Boolean(falseValue2) == false)
console.log(Boolean(falseValue3) == false)


// 5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

// 4 > 3 true
// 4 >= 3 true
// 4 < 3  false 
// 4 <= 3  false
// 4 == 4  true 
// 4 === 4  true
// 4 != 4    false
// 4 !== 4   false 
// 4 != '4'   false
// 4 == '4'   true 
// 4 === '4'  false 
// Find the length of python and jargon and make a falsy comparison statement.

console.log('4 > 3', 4 > 3)
console.log('4 >= 3 ', 4 >= 3)
console.log('4 < 3', 4 < 3)
console.log('4 <= 3', 4 <= 3)
console.log('4 == 4', 4 == 4)
console.log('4 === 4', 4 === 4)
console.log('4 != 4 ', 4 != 4)
console.log('4 !== 4', 4 !== 4)
console.log("4 != '4'", 4 != '4')
console.log("4 == '4'", 4 == '4')
console.log("4 === '4' ", 4 === '4')

// 6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

// 4 > 3 && 10 < 12  true
// 4 > 3 && 10 > 12  false
// 4 > 3 || 10 < 12  true
// 4 > 3 || 10 > 12   true
// !(4 > 3)  false
// !(4 < 3)   true
// !(false)   true
// !(4 > 3 && 10 < 12)   false
// !(4 > 3 && 10 > 12)   true
// !(4 === '4')      true
// There is no 'on' in both dragon and python
console.log('4 > 3 && 10 < 12', 4 > 3 && 10 < 12)
console.log('4 > 3 && 10 > 12', 4 > 3 && 10 > 12)
console.log('4 > 3 || 10 < 12', 4 > 3 || 10 < 12)
console.log('4 > 3 || 10 > 12', 4 > 3 || 10 > 12)
console.log('!(4 > 3)', !(4 > 3))
console.log('!(4 < 3)', !(4 < 3))
console.log('!(false)', !(false))
console.log('!(4 > 3 && 10 < 12)', !(4 > 3 && 10 < 12))
console.log('!(4 > 3 && 10 > 12)', !(4 > 3 && 10 > 12))
console.log("!(4 === '4'", !(4 === '4'))
console.log('dragon'.includes('on'))
console.log('python'.includes('on'))
// 7. Use the Date object to do the following activities
// What is the year today?
// What is the month today as a number?
// What is the date today?
// What is the day today as a number?
// What is the hours now?
// What is the minutes now?
// Find out the numbers of seconds elapsed from January 1, 1970 to now.
let now = new Date()
let year = now.getFullYear()
let month = now.getMonth()
let date = now.getDate()
let days = now.getDay()
let hours = now.getHours()
let minutes = now.getMinutes()
let times = now.getTime()
console.log(now)
console.log(year)
console.log(month)
console.log(date)
console.log(days)
console.log(hours)
console.log(minutes)
console.log(times)