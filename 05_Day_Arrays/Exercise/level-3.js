// Exercise: Level 3
// 1. The following is an array of 10 students ages:

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age
// Find the median age(one middle item or two middle items divided by two)
// Find the average age(all items divided by number of items)
// Find the range of the ages(max minus min)
// Compare the value of (min - average) and (max - average), use abs() method 
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
console.log(ages)
console.log(ages[0])
console.log(ages[ages.length - 1])
let len = ages.length
console.log(len)
if(len % 2 === 0) {
    console.log(ages.slice(len/2-1,len/2+1))
}else{
    console.log(ages[Math.floor(len/2-1)])
}
let sum = 0 
for(let i=0;i<len;i++){
    sum += ages[i]
}
let avg = sum / len 
console.log(avg)
let range = ages[len-1]-ages[0]
console.log(range)
let minAvg = Math.abs(ages[0]-avg)
let maxAvg = Math.abs(ages[len-1]-avg)
// if (maxAvg>minAvg){
//     console.log('maxAvg > minAvg')
// }else{
//     console.log('maxAvg < minAvg')
// }

maxAvg > minAvg ?console.log('maxAvg > minAvg'): console.log('maxAvg < minAvg')

// 1. Slice the first ten countries from the countries array
const {countries} = require('./countries.js')
console.log(countries.slice(0,10))
// 2. Find the middle country(ies) in the countries array
let iesIndex = countries.indexOf('ies')
console.log(iesIndex)
// 3. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
let countriesLen = countries.length
if (countriesLen % 2 === 0){
    let firstArr = countries.slice(0,countriesLen/2)
    let secondArr = countries.slice(countriesLen/2)
    console.log(firstArr)
    console.log(secondArr)
}else{
    let firstArr = countries.slice(0,Math.floor(countriesLen/2)+1)
    let secondArr = countries.slice(Math.floor(countriesLen/2)+1)
    console.log(firstArr)
    console.log(secondArr)
    console.log(firstArr.length)
    console.log(secondArr.length)
}