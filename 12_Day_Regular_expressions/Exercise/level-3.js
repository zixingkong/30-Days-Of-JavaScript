// Exercises: Level 3
// 1. Writ a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.
sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
//   console.log(cleanText(sentence))
//  I am a teacher and I love teaching There is nothing as more rewarding as educating and empowering people I found teaching more interesting than any other jobs Does this motivate you to be a teacher
function cleanText(sentence, num) {
    let pattern = /[$%@#&!?;,.]/g
    let sentenceStr = sentence.replace(pattern, '')
    let wordsArr = sentenceStr.match(/[a-zA-Z]+/g)
    let wordsCount = wordsArr.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1
        return acc
    }, {})
    let wordCountArr = []
    Object.entries(wordsCount).forEach((elem) => {
        wordCountArr.push({
            word: elem[0],
            count: elem[1]
        })
    })
    wordCountArr.sort((a, b) => b.count - a.count)
    return wordCountArr.slice(0, num)
}
console.log(cleanText(sentence, 3))