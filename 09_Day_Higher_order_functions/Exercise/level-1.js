// Exercises
// Exercises: Level 1
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [{
        product: 'banana',
        price: 3
    },
    {
        product: 'mango',
        price: 6
    },
    {
        product: 'potato',
        price: ' '
    },
    {
        product: 'avocado',
        price: 8
    },
    {
        product: 'coffee',
        price: 10
    },
    {
        product: 'tea',
        price: ''
    },
]
// 1. Explain the difference between forEach, map, filter, and reduce.
// forEach: 遍历数组中的每个元素
// map: 遍历修改数组中的每个元素，返回一个新数组
// filter: 筛选数组中符合给定条件的元素，组成一个新数组返回
// reduce: 对数组中的每个元素做累计运算，返回单个值
// 2. Define a callback function before you use it in forEach, map, filter or reduce.
function callback(country) {
    return country.length
}
// 3. Use forEach to console.log each country in the countries array.
countries.forEach((elem) => console.log(elem))
// 4. Use forEach to console.log each name in the names array.
names.forEach((elem) => console.log(elem))
// 5. Use forEach to console.log each number in the numbers array.
numbers.forEach((elem) => console.log(elem))
// 6. Use map to create a new array by changing each country to uppercase in the countries array.
let uppercaseCountries = countries.map((elem) => elem.toUpperCase())
console.log(uppercaseCountries)
// 7. Use map to create an array of countries length from countries array.
let lengthCountries = countries.map((elem) => elem.length)
console.log(lengthCountries)
// 8. Use map to create a new array by changing each number to square in the numbers array
let squareNumbers = numbers.map((elem) => Math.round(Math.sqrt(elem) * 100) / 100)
console.log(squareNumbers)
// 9. Use map to change to each name to uppercase in the names array
let uppercaseNames = names.map((elem) => elem.toUpperCase())
console.log(uppercaseNames)
// 10. Use map to map the products array to its corresponding prices.
let productsPrices = products.map((elem) => {
    let productObj = {}
    productObj[elem.product] = elem.price
    return productObj
})
console.log(productsPrices)
// 11. Use filter to filter out countries containing land.
let containingLandCountries = countries.filter((elem) => elem.includes('land'))
console.log(containingLandCountries)
// 12. Use filter to filter out countries having six character.
let havingSixCharacterCountries = countries.filter((elem) => elem.length === 6)
console.log(havingSixCharacterCountries)
// 13. Use filter to filter out countries containing six letters and more in the country array.
let containingSixOrMoreLettersCountries = countries.filter((elem) => elem.length >= 6)
console.log(containingSixOrMoreLettersCountries)
// 14. Use filter to filter out country start with 'E';
let startWithECountries = countries.filter((elem) => {
    return elem.startsWith('E')
})
console.log(startWithECountries)
// 15. Use filter to filter out only prices with values.
// 写了{}里面的要return，没写{}不加return
let onlyPriceProducts = products.filter(elem =>
    typeof elem.price === 'number' && !isNaN(elem.price)
)
console.log(onlyPriceProducts)
// 16. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
function getStringLists(arr) {
    let onlyWithStringItems = arr.filter((elem) => {
        return typeof elem === 'string'
    })
    return onlyWithStringItems
}
console.log(getStringLists([1, 2, 3, 'test', 'debug']))
// 17. Use reduce to sum all the numbers in the numbers array.
let sumOfNumbers = numbers.reduce((act, cur) => act + cur, 0)
console.log(sumOfNumbers)
// 18. Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
console.log(countries)
let concatenateCountries = countries.reduce((act, cur) => act + ', ' + cur).concat('are north European countries')
console.log(concatenateCountries)
// 19. Explain the difference between some and every
// some: 检查数组中是否存在元素满足条件
// every: 检查数组中的所有元素是否均满足条件
// 20. Use some to check if some names' length greater than seven in names array
let lengthGreaterThan7 = names.some((elem) => elem.length > 7)
console.log(lengthGreaterThan7)
// 21. Use every to check if all the countries contain the word land
let containingLand = countries.every((elem) => elem.includes('land'))
console.log(containingLand)
// 22. Explain the difference between find and findIndex.
// find: 返回满足条件的第一个元素
// findIndex: 返回满足条件的第一个元素的索引
// 23. Use find to find the first country containing only six letters in the countries array
let countriesContaining6 = countries.find((elem) => elem.length === 6)
console.log(countriesContaining6)
// 24. Use findIndex to find the position of the first country containing only six letters in the countries array
let countriesContaining6Index = countries.findIndex((elem) => elem.length === 6)
console.log(countriesContaining6Index)
// 25. Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
let norwayIndex = countries.findIndex((elem) => elem === 'Norway')
console.log(norwayIndex)
// 26. Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
let russiaIndex = countries.findIndex((elem) => elem === 'Russia')
console.log(russiaIndex)