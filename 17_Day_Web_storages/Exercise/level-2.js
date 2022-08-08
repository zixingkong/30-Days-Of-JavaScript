// Exercises: Level 2
// 1. Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.
let student = {
    firstName: 'harveyy',
    lastName: 'shi',
    age: 20,
    skills: ['HTML', 'CSS', 'Python', 'Go'],
    country: 'China'
}
let studentString = JSON.stringify(student)
localStorage.setItem('student', studentString)