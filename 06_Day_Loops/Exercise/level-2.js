// Exercises: Level 2
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']
// 1. Develop a small script which generate any number of characters random id:
//   fe3jo1gl124g
//   xkqci4utda1lmbelpkm03rba
let random = Math.floor(Math.random() * 100)
let charArr = [...Array(26).keys()].map(i => String.fromCharCode(i + 65))
let numArr = [...Array(10).keys()].map(i => String(i))
charArr.push(...numArr)
console.log(charArr)
let characters = ''
for (let i = 0; i < random; i++) {
    let random = Math.floor(Math.random() * (charArr.length))
    characters += charArr[random]
}
console.log(characters)
// 2. Write a script which generates a random hexadecimal number.
// '#ee33df'
let hexadecimalCharArr = [...Array(6).keys()].map(i => String.fromCharCode(i + 65))
hexadecimalCharArr.push(...numArr)
let hexadecimalChar = '#'
for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * (hexadecimalCharArr.length))
    hexadecimalChar += hexadecimalCharArr[random]
}
console.log(hexadecimalChar)
// 3. Write a script which generates a random rgb color number.
// rgb(240,180,80)
let randomRgbArr = []
for (let i = 0; i < 3; i++) {
    let random = Math.floor(Math.random() * (256))
    randomRgbArr.push(random)
}
let randomRgbStr = 'rgb(' + randomRgbArr.join() + ')'
console.log(randomRgbStr)
// 4. Using the above countries array, create the following new array.
// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
let uppercaseCountry = []
for (const i of countries) {
    uppercaseCountry.push(i.toUpperCase())
}
console.log(uppercaseCountry)
// 5. Using the above countries array, create an array for countries length'.
// [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
let countriesLength = []
for (const i of countries) {
    countriesLength.push(i.length)
}
console.log(countriesLength)
// 6. Use the countries array to create the following array of arrays:
//   [
//   ['Albania', 'ALB', 7],
//   ['Bolivia', 'BOL', 7],
//   ['Canada', 'CAN', 6],
//   ['Denmark', 'DEN', 7],
//   ['Ethiopia', 'ETH', 8],
//   ['Finland', 'FIN', 7],
//   ['Germany', 'GER', 7],
//   ['Hungary', 'HUN', 7],
//   ['Ireland', 'IRE', 7],
//   ['Iceland', 'ICE', 7],
//   ['Japan', 'JAP', 5],
//   ['Kenya', 'KEN', 5]
// ]
let arrArr = []
for (const i of countries) {
    let countryArr = [i, [...i.slice(0, 3)].map(j => j.toUpperCase()).join(''), i.length]
    arrArr.push(countryArr)
}
console.log(arrArr)
// 7. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
// ['Finland','Ireland', 'Iceland']
let containingLandCountries = []
for (let country of countries) {
    if (country.includes('land')) {
        containingLandCountries.push(country)
    }
}
if (containingLandCountries.length !== 0) {
    console.log(containingLandCountries)
} else {
    console.log('All these countries are without land')
}
// 8. In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ia', print 'These are countries ends without ia'.
// ['Albania', 'Bolivia','Ethiopia']
let endWithIaCountries = new Array()
for (let country of countries) {
    if (country.endsWith('ia')) {
        endWithIaCountries.push(country)
    }
}
if (endWithIaCountries.length !== 0) {
    console.log(endWithIaCountries)
} else {
    console.log('These are countries ends without ia')
}

// 9. Using the above countries array, find the country containing the biggest number of characters.
// Ethiopia
let max = countries[0]
for (let country of countries) {
    if (country.length > max.length) {
        max = country
    }
}
console.log(max)
// 10. Using the above countries array, find the country containing only 5 characters.
// ['Japan', 'Kenya']
let length5Countries = []
for (let country of countries) {
    if (country.length === 5) {
        length5Countries.push(country)
    }
}
console.log(length5Countries)
// 11. Find the longest word in the webTechs array
let longestWord = webTechs[0]
for (let webTech of webTechs) {
    if (longestWord.length < webTech.length) {
        longestWord = webTech
    }
}
console.log(longestWord)
// 12. Use the webTechs array to create the following array of arrays:
// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
let newArr = []
for (let webTech of webTechs) {
    newArr.push([webTech, webTech.length])
}
console.log(newArr)
// 13. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
let appName = ''
for (let i of mernStack) {
    appName += i[0]
}
console.log(appName)
// 14. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
for (let frontend of webTechs) {
    console.log(frontend)
}
// 15. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
let fruits = ['banana', 'orange', 'mango', 'lemon']
for (let i = 0; i < Math.floor(fruits.length / 2); i++) {
    // 交换变量，第一种方法
    // let temp = fruits[i]
    // fruits[i] = fruits[fruits.length - 1 - i]
    // fruits[fruits.length - 1 - i] = temp
    //第二种方法
    [fruits[i], fruits[fruits.length - 1 - i]] = [fruits[fruits.length - 1 - i], fruits[i]]
    // 第三种方法
    // fruits[i] = [fruits[fruits.length - 1 - i],fruits[fruits.length - 1 - i]=fruits[i]][0];
}
console.log(fruits)
// 16. Print all the elements of array as shown below.
//   const fullStack = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB']
//   ]
//   HTML
//   CSS
//   JS
//   REACT
//   NODE
//   EXPRESS
//   MONGODB
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]
for (let stack of fullStack) {
    for (let s of stack) {
        console.log(s.toUpperCase())
    }
}