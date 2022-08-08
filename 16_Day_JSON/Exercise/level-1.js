const skills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python']
let age = 250;
let isMarried = true
const student = {
    firstName: 'Asabeneh',
    lastName: 'Yetayehe',
    age: 250,
    isMarried: true,
    skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python', ]
}
// Exercises Level 1
// 1. Change skills array to JSON using JSON.stringify()
let skillsString = JSON.stringify(skills)
console.log(skillsString)
// 2. Stringify the age variable
let ageString = JSON.stringify(age)
console.log(ageString)
// 3. Stringify the isMarried variable
let isMarriedString = JSON.stringify(isMarried)
console.log(isMarriedString)
// 4. Stringify the student object
let studentString = JSON.stringify(student, 4)
console.log(studentString)