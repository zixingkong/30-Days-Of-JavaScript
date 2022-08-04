// Exercises: Level 2
// 1. Write a function called tenMostFrequentWords which get the ten most frequent word from a string?
paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
//     console.log(tenMostFrequentWords(paragraph))
//     [
//     {word:'love', count:6},
//     {word:'you', count:5},
//     {word:'can', count:3},
//     {word:'what', count:2},
//     {word:'teaching', count:2},
//     {word:'not', count:2},
//     {word:'else', count:2},
//     {word:'do', count:2},
//     {word:'I', count:2},
//     {word:'which', count:1},
//     {word:'to', count:1},
//     {word:'the', count:1},
//     {word:'something', count:1},
//     {word:'if', count:1},
//     {word:'give', count:1},
//     {word:'develop',count:1},
//     {word:'capabilities',count:1},
//     {word:'application', count:1},
//     {word:'an',count:1},
//     {word:'all',count:1},
//     {word:'Python',count:1},
//     {word:'If',count:1}]
// console.log(tenMostFrequentWords(paragraph, 10))
// [{word:'love', count:6},
// {word:'you', count:5},
// {word:'can', count:3},
// {word:'what', count:2},
// {word:'teaching', count:2},
// {word:'not', count:2},
// {word:'else', count:2},
// {word:'do', count:2},
// {word:'I', count:2},
// {word:'which', count:1}
// ]
function tenMostFrequentWords(sentence, num = 0) {
    let pattern = /[a-zA-Z]+/g
    let words = sentence.match(pattern)
    let wordsCountArr = []
    let worldObj = words.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1
        return acc
    }, {})
    Object.entries(worldObj).forEach((world) => {
        wordsCountArr.push({
            word: world[0],
            count: world[1]
        })
    })
    wordsCountArr.sort((a, b) => b.count - a.count)
    if (num) {
        return wordsCountArr.slice(0, num)
    } else {
        return wordsCountArr
    }

}
console.log(tenMostFrequentWords(paragraph))
console.log(tenMostFrequentWords(paragraph, 10))