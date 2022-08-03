// Exercises:Level 3
// 1. How many languages are there in the countries object file.
let countries = require('../10_day_starter/data/countries_data.js')
let languagesArr = countries.reduce((acc, cur) => {
    let language = cur.languages
    acc.push(...language)
    return acc
}, [])
let languagesSet = new Set(languagesArr)
let languagesSize = languagesSet.size
console.log(languagesSet)
console.log(languagesSize)
// 2. *** Use the countries data to find the 10 most spoken languages:

//    // Your output should look like this
//    console.log(mostSpokenLanguages(countries, 10))
//    [
//      { English: 91 },
//      { French: 45 },
//      { Arabic: 25 },
//      { Spanish: 24 },
//      { Russian: 9 },
//      { Portuguese: 9 },
//      { Dutch: 8 },
//      { German: 7 },
//      { Chinese: 5 },
//      { Swahili: 4 },
//      { Serbian: 4 }
//    ]

//   // Your output should look like this
//   console.log(mostSpokenLanguages(countries, 3))
//   [
//   {English:91},
//   {French:45},
//   {Arabic:25}
//   ]
function mostSpokenLanguages(countries, num) {
    let languagesMap = new Map()
    let languageArr = []
    countries.forEach(function (country) {
        for (let language of country.languages) {
            if (languagesMap.get(language)) {
                languagesMap.set(language, languagesMap.get(language) + 1)
            } else {
                languagesMap.set(language, 1)
            }
        }
    })
    for (const [language, num] of languagesMap) {
        let languageObj = {}
        languageObj[language] = num
        languageArr.push(languageObj)
    }
    console.log(languageArr)
    languageArr.sort((a, b) => Object.values(b)[0] - Object.values(a)[0])
    return languageArr.slice(0, num)
}
console.log(mostSpokenLanguages(countries, 10))
console.log(mostSpokenLanguages(countries, 3))