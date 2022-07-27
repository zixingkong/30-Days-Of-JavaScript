// Exercises: Level 3
// Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05
let date = new Date()
let year = date.getFullYear()
let month = date.getMonth() + 1
let days = date.getDate()
let hours = date.getHours()
let minutes = date.getMinutes()
if (month < 10) {
    month = `0${month}`
}
if (days < 10) {
    days = `0${days}`
}
if (hours < 10) {
    hours = `0${hours}`
}
if (minutes < 10) {
    minutes = `0${minutes}`
}
console.log(`${year}-${month}-${days} ${hours}:${minutes}`)