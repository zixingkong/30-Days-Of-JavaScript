// Exercises: Level 2
// 1. Find the person who has many skills in the users object.
const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}
let entries = Object.entries(users)
for (let i = 0; i < entries.length; i++) {
    let name = entries[i][0]
    let skills = entries[i][1].skills
    console.log(name, skills)
}
// 2. Count logged in users, count users having greater than equal to 50 points from the following object.
// const users = {
//   Alex: {
//     email: 'alex@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript'],
//     age: 20,
//     isLoggedIn: false,
//     points: 30
//   },
//   Asab: {
//     email: 'asab@asab.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
//     age: 25,
//     isLoggedIn: false,
//     points: 50
//   },
//   Brook: {
//     email: 'daniel@daniel.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//     age: 30,
//     isLoggedIn: true,
//     points: 50
//   },
//   Daniel: {
//     email: 'daniel@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   },
//   John: {
//     email: 'john@john.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//     age: 20,
//     isLoggedIn: true,
//     points: 50
//   },
//   Thomas: {
//     email: 'thomas@thomas.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   },
//   Paul: {
//     email: 'paul@paul.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   }
// }
let loggedCount = 0
let greaterThanEqual50Count = 0
for (let i = 0; i < entries.length; i++) {
    let name = entries[i][0]
    let logged = entries[i][1].isLoggedIn
    let points = entries[i][1].points
    if (logged) {
        loggedCount++
    }
    if (points >= 50) {
        greaterThanEqual50Count++
    }
}
console.log(`count logged is ${loggedCount}`)
console.log(`count points greater than equal 50  is ${greaterThanEqual50Count}`)

// 3. Find people who are MERN stack developer from the users object
let mernStackDeveloper = []
let mernStackArr = ['MongoDB', 'Express', 'React', 'Node']
for (let i = 0; i < entries.length; i++) {
    let name = entries[i][0]
    let skills = entries[i][1].skills
    if (mernStackArr.every(item => skills.includes(item))) {
        mernStackDeveloper.push(name)
    }
}
console.log(mernStackDeveloper)
// 4. Set your name in the users object without modifying the original users object
users.harveyy = {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
}
console.log(users)
// 5. Get all keys or properties of users object
let keysArr = Object.keys(users)
console.log(keysArr)
// 6. Get all the values of users object
let vauleArr = Object.values(users)
console.log(vauleArr)
// 7. Use the countries object to print a country name, capital, populations and languages.
const { countries } = require('../08_day_starter/data/countries_data.js')
for (let country of countries) {
    console.log(`country name: ${country.name}`)
    console.log(`   capital: ${country.capital}`)
    console.log(`   populations: ${country.population}`)
    console.log(`   languages: ${country.languages}`)
}