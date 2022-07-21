// Exercises: Level 3
// 1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let sentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let pattern = /love/gi
let wordArr = sentence.match(pattern)
console.log(wordArr.length);
// 2. Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence2 = 'You cannot end a sentence with because because because is a conjunction'
let pattern2 = /because/gi
let becauseArr = sentence2.match(pattern2)
console.log(becauseArr.length);
// 4. Clean the following text and find the most frequent word (hint, use replace and regular expressions).
// 重要
const sentence3 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let pattern3 = /[%$@&#;!]/g
let cleanSentence = sentence3.replace(pattern3,'')
console.log(cleanSentence)
let words = cleanSentence.split(/\s/)
console.log(words)
let wordFrenquencies = new Map()
words.forEach(element => {
    if(!wordFrenquencies.has(element)){
        wordFrenquencies.set(element,1)
    }else{
        wordFrenquencies.set(element,wordFrenquencies.get(element)+1)
    }
});
console.log(wordFrenquencies)
let maxFrequency = Math.max(...wordFrenquencies.values())
let wordsMatchingMaxFrequency = Array.from(wordFrenquencies.keys()).filter((word)=>{return wordFrenquencies.get(word)==maxFrequency})
console.log(wordsMatchingMaxFrequency)

// 5. Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let incomeSentence = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let incomePattern = /\d+/g
let subIncome = incomeSentence.match(incomePattern)
let salaryPerMonth = Number(subIncome[0])
let annual = Number(subIncome[1])
let salaryCourse = Number(subIncome[2])
let total = salaryPerMonth * 12 + annual + salaryCourse*12
console.log(total)
