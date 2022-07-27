// 1. Using console.log() print out the following statement:
// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.')

// 2. Using console.log() print out the following quote by Mother Teresa:
// "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log("\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"")
// 3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log(typeof '10' == typeof 10)
console.log(typeof parseInt('10') == typeof 10)
// 4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log(parseFloat('9.8') == 10)
console.log(Math.round(parseFloat('9.8')) == 10)
// 5. Check if 'on' is found in both python and jargon
console.log('python'.includes('on'))
console.log('jargon'.includes('on'))
// 6. I hope this course is not full of jargon. Check if jargon is in the sentence.
console.log('I hope this course is not full of jargon.'.includes('jargon'))
// 7. Generate a random number between 0 and 100 inclusively.
let randomNumber = Math.random()
let numBtnZeroAndHundred = randomNumber * 101
console.log(numBtnZeroAndHundred)
let randomNumRoundToFloor = Math.floor(numBtnZeroAndHundred)
console.log(randomNumRoundToFloor)
// 8. Generate a random number between 50 and 100 inclusively.
let randomNumRoundToFloor2 = randomNumRoundToFloor - 50
// 9. Generate a random number between 0 and 255 inclusively.
let numBtnZeroAndHundred2 = randomNumber * 256
console.log(numBtnZeroAndHundred2)
let randomNumRoundToFloor3 = Math.floor(numBtnZeroAndHundred2)
console.log(randomNumRoundToFloor3)
// 10. Access the 'JavaScript' string characters using a random number.
let strLen = 'JavaScript'.length
let index = Math.floor(Math.random() * strLen)
console.log('JavaScript' [index])
// 11. Use console.log() and escape characters to print the following pattern.
console.log('1\t1\t1\t1\t1')
console.log('2\t1\t2\t4\t8')
console.log('3\t1\t3\t9\t27')
console.log('4\t1\t4\t16\t64')
console.log('5\t1\t5\t25\t125')
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125
// 12. Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let becauseSentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(becauseSentence.split('because because because'))