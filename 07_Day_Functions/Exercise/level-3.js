// Exercises: Level 3
// 1. Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
// userIdGeneratedByUser()
// 'kcsy2
// SMFYb
// bWmeq
// ZXOYh
// 2Rgxf
// '
// userIdGeneratedByUser()
// '1GCSgPLMaBAVQZ26
// YD7eFwNQKNs7qXaT
// ycArC5yrRupyG00S
// UbGxOFI7UXSWAyKN
// dIV0SSUTgAdKwStr
// '

function userIdGeneratedByUser() {
    let numArr = [...Array(10).keys()]
    let charArr = [...Array(26).keys()].map(i => String.fromCharCode(i + 65))
    let arr = numArr.concat(charArr)
    let numCharacters = prompt("please input number of characters: ")
    let numIds = prompt("please input number of Id: ")
    let userIdArr = ''
    for (let i = 0; i < numIds; i++) {
        let userId = ''
        for (let j = 0; j < numCharacters; j++) {
            userId += arr[Math.floor(Math.random() * arr.length)]
        }
        userIdArr += userId + '\n'
    }
    console.log(userIdArr)
}
// 2. Write a function name rgbColorGenerator and it generates rgb colors.
// rgbColorGenerator()
// rgb(125,244,255)
function rgbColorGenerator() {
    let rgbArr = []
    for (let i = 0; i < 3; i++) {
        rgbArr.push(Math.floor(Math.random() * 256))
    }
    return 'rgb(' + rgbArr.join() + ')'
}
console.log(rgbColorGenerator())
// 3. Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
function arrayOfHexaColors(num) {
    let numArr = [...Array(10).keys()]
    let charArr = [...Array(6).keys()].map(i => String.fromCharCode(i + 65))
    let arr = numArr.concat(charArr)
    let rgbColorArr = new Array()
    for (let i = 0; i < num; i++) {
        let hexaColor = '#'
        for (let j = 0; j < 6; j++) {
            hexaColor += arr[Math.floor(Math.random() * arr.length)]
        }
        rgbColorArr.push(hexaColor)
    }
    return rgbColorArr
}
console.log(arrayOfHexaColors(10))
// 4. Write a function arrayOfRgbColors which return any number of RGB colors in an array.
function arrayOfRgbColors(num) {
    let rgbColorArr = new Array()
    for (let i = 0; i < num; i++) {
        let rGBColorArr = []
        for (let j = 0; j < 3; j++) {
            rGBColor = Math.floor(Math.random() * 256)
            rGBColorArr.push(rGBColor)
        }
        rgbColorArr.push(rGBColorArr)
    }
    return rgbColorArr
}
console.log(arrayOfRgbColors(5))
// 5. Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
function convertHexaToRgb(hexa) {
    let hexaLen = hexa.length
    let rgbArr = []
    for (let i = 1; i < hexaLen; i++) {
        if (i % 2 !== 0) {
            let hexaStr = '0x' + hexa[i] + hexa[i + 1]
            let rgb = eval(hexaStr).toString(10)
            rgbArr.push(rgb)
        }
    }
    return 'rgb(' + rgbArr.join() + ')'
}
console.log(convertHexaToRgb("#ADDFCA"))
// 6. Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
function convertRgbToHexa(rgb) {
    let pattern = /\d+/g
    let rgbArr = rgb.match(pattern)
    let hexaArr = []
    for (let item of rgbArr) {
        let hexa = eval(item).toString(16)
        hexaArr.push(hexa)
    }
    return '#' + hexaArr.join('')
}
console.log(convertRgbToHexa('rgb(173,223,202)'))
// 7. Write a function generateColors which can generate any number of hexa or rgb colors.
// console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
// console.log(generateColors('hexa', 1)) // '#b334ef'
// console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
// console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
function generateColors(mode, num) {
    let rgbColorArr = new Array()
    if (mode == 'hexa') {
        let numArr = [...Array(10).keys()]
        let charArr = [...Array(6).keys()].map(i => String.fromCharCode(i + 65))
        let arr = numArr.concat(charArr)
        for (let i = 0; i < num; i++) {
            let hexaColor = '#'
            for (let j = 0; j < 6; j++) {
                hexaColor += arr[Math.floor(Math.random() * arr.length)]
            }
            rgbColorArr.push(hexaColor)
        }
    } else if (mode == 'rgb') {
        for (let i = 0; i < num; i++) {
            let rGBColorArr = []
            for (let j = 0; j < 3; j++) {
                rGBColor = Math.floor(Math.random() * 256)
                rGBColorArr.push(rGBColor)
            }
            rgbColorArr.push('rgb(' + rGBColorArr.join() + ')')
        }
    }
    if (rgbColorArr.length === 1) {
        return rgbColorArr[0]
    }
    return rgbColorArr
}
console.log('='.repeat(50))
console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors('hexa', 1)) // '#b334ef'
console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
// 8. Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }
    return array;
}
// Used like so
var arr = [2, 11, 37, 42];
console.log(arr);
shuffle(arr);
console.log(arr);
// 9. Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
function factorial(num) {
    let factorialNum = 1
    for (let i = 1; i <= num; i++) {
        factorialNum *= i
    }
    return factorialNum
}
console.log(factorial(3))
console.log(factorial(5))
// 10. Call your function isEmpty, it takes a parameter and it checks if it is empty or not
function isEmpty(parameter) {
    if (parameter) {
        return true
    }
    return false
}
console.log(isEmpty(null))
console.log(isEmpty(undefined))
console.log(isEmpty(NaN))
console.log(isEmpty(''))
console.log(isEmpty(" "))
console.log(isEmpty(0))
console.log(isEmpty(false))
console.log(isEmpty(5))
// 11. Call your function sum, it takes any number of arguments and it returns the sum.
function sum(num) {
    let addSum = 0
    for (let i = 0; i <= num; i++) {
        addSum += i
    }
    return addSum
}
console.log(sum(100))
// 12. Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
function sumOfArrayItems(arr) {
    let sum = 0
    for (let item of arr) {
        if (typeof item === 'number' && !isNaN(item)) {
            sum += item
        } else {
            return `${item} is not a number`
        }
    }
    return sum
}
console.log(sumOfArrayItems([1, 2, 3, 4, 5]))
console.log(sumOfArrayItems(['1', 2, 3, 4, 5]))
console.log(sumOfArrayItems([1, 2, 3, null, 5]))
// 13. Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
function average(arr) {
    let sum = 0
    for (let item of arr) {
        if (typeof item === 'number' && !isNaN(item)) {
            sum += item
        } else {
            return `${item} is not a number`
        }
    }
    return sum / arr.length
}
console.log(average([1, 2, 3, 4, 5]))
console.log(average(['1', 2, 3, 4, 5]))
console.log(average([1, 2, 3, null, 5]))
// 14. Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
// console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
// ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
// ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
//   'Not Found'
function modifyArray(arr) {
    if (arr.length < 5) {
        return 'Not Found'
    } else {
        arr[4] = arr[4].toUpperCase()
    }
    return arr
}
console.log(modifyArray(['Avocado', 'Tomato', 'Potato', 'Mango', 'Lemon', 'Carrot']))
// ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
console.log(modifyArray(['Google', 'Facebook', 'Apple', 'Amazon', 'Microsoft', 'IBM']))
// ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
console.log(modifyArray(['Google', 'Facebook', 'Apple', 'Amazon']))
//   'Not Found'
// 15. Write a function called isPrime, which checks if a number is prime number.
function isPrime(num) {
    let sqrt = Math.floor(Math.sqrt(num) + 1)
    for (let i = 2; i < sqrt; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return num >= 2
}
// 16. Write a functions which checks if all items are unique in the array.
function checkUnique(arr) {
    return arr.length === new Set(arr).size
}
console.log(checkUnique([1, 2, 3, 4, 5]))
console.log(checkUnique([1, 5, 3, 4, 5]))
// 17. Write a function which checks if all the items of the array are the same data type.
function allSameType(arr) {
    return new Set(arr.map(x => typeof x)).size <= 1;
}

console.log(allSameType([1, 2, 3, 4]));
console.log(allSameType([2, 3, 4, "foo"]));
// 18. JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.
function isValidVarName(name) {
    try {
        // Update, previoulsy it was
        // eval('(function() { var ' + name + '; })()');
        Function('var ' + name);
    } catch (e) {
        return false;
    }
    return true;
}
console.log('='.repeat(50))
console.log(isValidVarName('my_var'))
console.log(isValidVarName('11e'))
console.log(isValidVarName('asdfas$_swdfs'))
console.log(isValidVarName('@#$%dsfsdaf'))
// 19. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
// sevenRandomNumbers()
// [(1, 4, 5, 7, 9, 8, 0)]
function sevenRandomNumbers() {
    let randomUniq = new Array();
    let arr = Array(10).fill(0).map((v, i) => i);
    console.log(arr)
    while (randomUniq.length < 7) {
        let num = arr[Math.floor(Math.random(randomUniq.length))]
        if (!randomUniq.includes(num)) {
            randomUniq.push()
        }
    }
    return randomUniq
}
// console.log(sevenRandomNumbers())
// console.log(sevenRandomNumbers())
// console.log(sevenRandomNumbers())
// 20. Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
function reverseCountries(arr) {
    let countriesDeepCopy = JSON.parse(JSON.stringify(arr))
    return countriesDeepCopy.reverse()
}
console.log(reverseCountries(['China', 'America', 'Japan']))