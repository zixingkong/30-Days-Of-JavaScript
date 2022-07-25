// Exercise
// Exercise: Level 1
// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya'
// ]

// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB'
// ]
// 1. Declare an empty array;
let emptyArr1 = Array()
let emptyArr2 = []
// 2. Declare an array with more than 5 number of elements
let arr1 = [1,2,3,4,5,6,7,8,9,10]
console.log(arr1)
// 3. Find the length of your array
console.log(arr1.length)
// 4. Get the first item, the middle item and the last item of the array
console.log(arr1[0])
console.log(arr1[Math.floor(arr1.length/2)])
console.log(arr1[arr1.length-1])
// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = [1, 2, 3,'one','two','three']
console.log(mixedDataTypes.length)
// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
// 7. Print the array using console.log()
console.log(itCompanies)
// 8. Print the number of companies in the array
console.log(itCompanies.length)
// 9. Print the first company, middle and last company
console.log(itCompanies[0])
console.log(itCompanies[Math.floor(itCompanies.length/2)])
console.log(itCompanies[itCompanies.length-1])
// 10. Print out each company
console.log(itCompanies[0])
console.log(itCompanies[1])
console.log(itCompanies[2])
console.log(itCompanies[3])
console.log(itCompanies[4])
console.log(itCompanies[5])
console.log(itCompanies[6])
// 11. Change each company name to uppercase one by one and print them out
console.log(itCompanies[0].toUpperCase())
console.log(itCompanies[1].toUpperCase())
console.log(itCompanies[2].toUpperCase())
console.log(itCompanies[3].toUpperCase())
console.log(itCompanies[4].toUpperCase())
console.log(itCompanies[5].toUpperCase())
console.log(itCompanies[6].toUpperCase())
// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.join(),'are big IT companies')
// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let company = 'Tencent'
let index = itCompanies.indexOf(company)
if (index === -1){
    console.log(`${company} is not found`)
}else{
    console.log(`return the ${company}`)
}
// 14. Filter out companies which have more than one 'o' without the filter method
let filterCompanies = []
const regexp = /o/g;
for(let i = 0; i < itCompanies.length;i++){
    if (itCompanies[i].includes('o')){
        let oCount = [...itCompanies[i].match(regexp)]
        if(oCount.length>=2){
            filterCompanies.push(itCompanies[i])
        }
    }
}
console.log('Filter companies')
console.log(filterCompanies)
// 15. Sort the array using sort() method
itCompanies.sort()
console.log(itCompanies)
// 16. Reverse the array using reverse() method
itCompanies.reverse()
console.log(itCompanies)
// 17. Slice out the first 3 companies from the array
console.log(itCompanies.slice(0,3))
// 18. Slice out the last 3 companies from the array
console.log(itCompanies.slice(itCompanies.length-3))
// 19. Slice out the middle IT company or companies from the array
if (itCompanies.length % 2 === 0){
    console.log(itCompanies.slice(Math.floor(itCompanies.length/2)-1,Math.floor(itCompanies.length/2)+1))
}else{
    console.log(itCompanies.slice(Math.floor(itCompanies.length/2),Math.floor(itCompanies.length/2)+1))
}
// 20. Remove the first IT company from the array
console.log(itCompanies.splice(0,1))
console.log(itCompanies)
// console.log(itCompanies.shift())
// 21. Remove the middle IT company or companies from the array
if (itCompanies.length % 2 === 0){
    console.log(itCompanies.splice(Math.floor(itCompanies.length/2)-1,2))
}else{
    console.log(itCompanies.slice(Math.floor(itCompanies.length/2)))
}
// 22. Remove the last IT company from the array
console.log(itCompanies.pop())
// 23. Remove all IT companies
itCompanies.splice(0,itCompanies.length)
console.log(itCompanies)