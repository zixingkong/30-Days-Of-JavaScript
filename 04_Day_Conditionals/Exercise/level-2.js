// Exercises: Level 2
// 1. Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
let score = 90
let grades
if (score > 80) {
    grades = 'A'
} else if (score > 70) {
    grades = 'B'
} else if (score > 60) {
    grades = 'C'
} else if (score > 50) {
    grades = 'D'
} else {
    grades = 'F'
}

// 2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer
let season = prompt("Enter season:")
switch (season) {
    case 'September':
    case 'October':
    case 'November':
        console.log('the season is Autumn')
        break
    case 'December':
    case 'January':
    case 'February':
        console.log('the season is Winter')
        break
    case 'March':
    case 'April':
    case 'May':
        console.log('the season is Spring')
        break
    case 'June':
    case 'July':
    case 'August':
        console.log('the season is Summer')
        break
    default:
        console.log('please input right season')
}
// 3. Check if a day is weekend day or a working day. Your script will take day as an input.
//     What is the day  today? Saturday
//     Saturday is a weekend.

//     What is the day today? saturDaY
//     Saturday is a weekend.

//     What is the day today? Friday
//     Friday is a working day.

//     What is the day today? FrIDAy
//     Friday is a working day.
let today = prompt("What is the day today? ")
let todayUpper = today.toLowerCase().replace(/^\S/g, function (s) {
    return s.toUpperCase()
})
console.log(todayUpper)
switch (todayUpper) {
    case 'Monday':
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
    case 'Friday':
        console.log(`${todayUpper} is a working day`)
        break
    case 'Saturday':
    case 'Sunday':
        console.log(`${todayUpper} is a weekend`)
        break
    default:
        console.log('please input a right day')
}