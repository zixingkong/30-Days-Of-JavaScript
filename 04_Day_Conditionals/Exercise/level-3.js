// Exercises: Level 3
// Write a program which tells the number of days in a month.
//   Enter a month: January
//   January has 31 days.

//   Enter a month: JANUARY
//   January has 31 day

//   Enter a month: February
//   February has 28 days.

//   Enter a month: FEbruary
//   February has 28 days.
// Write a program which tells the number of days in a month, now consider leap year.
let month = prompt('Enter a month: ')
month = month.toLowerCase().replace(/^\S/g, function (s) {
    return s.toUpperCase()
})
let monthObi = {
    "January": 1,
    "February": 2,
    "March": 3,
    "April": 4,
    "May": 5,
    "June": 6,
    "July": 7,
    "August": 8,
    "September": 9,
    "October": 10,
    "November": 11,
    "December": 12

}
const date = new Date(2022, monthObi[month], 0).getDate();
console.log(`${month} has ${date} days`)