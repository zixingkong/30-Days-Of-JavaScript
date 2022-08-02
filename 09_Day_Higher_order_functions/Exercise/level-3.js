// Exercises: Level 3
// 1. Use the countries information, in the data folder. Sort countries by name, by capital, by population
const countries = require('../09_day_starter/data/countries_data.js')
let sortByName = countries.sort((a, b) => a.name - b.name)
console.log(sortByName)
let sortByCapital = countries.sort((a, b) => a.capital - b.capital)
console.log(sortByCapital)
let sortByPopulation = countries.sort((a, b) => a.population - b.population)
console.log(sortByPopulation)
// 2. *** Find the 10 most spoken languages:
// // Your output should look like this
// console.log(mostSpokenLanguages(countries, 10))
// [
// {country: 'English',count:91},
// {country: 'French',count:45},
// {country: 'Arabic',count:25},
// {country: 'Spanish',count:24},
// {country:'Russian',count:9},
// {country:'Portuguese', count:9},
// {country:'Dutch',count:8},
// {country:'German',count:7},
// {country:'Chinese',count:5},
// {country:'Swahili',count:4}
// ]

// // Your output should look like this
// console.log(mostSpokenLanguages(countries, 3))
// [
// {country: 'English',count: 91},
// {country: 'French',count: 45},
// {country: 'Arabic',count: 25},
// ]```
function mostSpokenLanguages(countries, num) {
    let spokenLanguages = countries.map((country) =>
        ({
            country: country.name,
            languages: country.languages
        })
    )
    let languagesCountries = spokenLanguages.reduce((acc, cur) => {
        for (let language of cur.languages) {
            acc[language] = (acc[language] || 0) + 1
        }
        return acc
    }, {})
    let languagesCountriesCountArr = []
    Object.entries(languagesCountries).forEach((elem) => languagesCountriesCountArr.push({
        country: elem[0],
        count: elem[1]
    }))
    let languageSort = languagesCountriesCountArr.sort((a, b) => b.count - a.count)
    return languageSort.slice(0, num)
}
console.log(mostSpokenLanguages(countries, 10))
console.log(mostSpokenLanguages(countries, 3))
// 3. *** Use countries_data.js file create a function which create the ten most populated countries
// console.log(mostPopulatedCountries(countries, 10))

// [
// {country: 'China', population: 1377422166},
// {country: 'India', population: 1295210000},
// {country: 'United States of America', population: 323947000},
// {country: 'Indonesia', population: 258705000},
// {country: 'Brazil', population: 206135893},
// {country: 'Pakistan', population: 194125062},
// {country: 'Nigeria', population: 186988000},
// {country: 'Bangladesh', population: 161006790},
// {country: 'Russian Federation', population: 146599183},
// {country: 'Japan', population: 126960000}
// ]

// console.log(mostPopulatedCountries(countries, 3))
// [
// {country: 'China', population: 1377422166},
// {country: 'India', population: 1295210000},
// {country: 'United States of America', population: 323947000}
// ]
// ```

function mostPopulatedCountries(countries, num) {
    let populatedCountries = countries.map((country) =>
        ({
            country: country.name,
            population: country.population
        })
    )
    populatedCountries.sort((a, b) => b.population - a.population)
    return populatedCountries.slice(0, num)
}
console.log(mostPopulatedCountries(countries, 10))
console.log(mostPopulatedCountries(countries, 3))
// 4. *** Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object. Check the output below.

// const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

// console.log('Count:', statistics.count()) // 25
// console.log('Sum: ', statistics.sum()) // 744
// console.log('Min: ', statistics.min()) // 24
// console.log('Max: ', statistics.max()) // 38
// console.log('Range: ', statistics.range() // 14
// console.log('Mean: ', statistics.mean()) // 30
// console.log('Median: ',statistics.median()) // 29
// console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Standard Deviation: ', statistics.std()) // 4.2
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Frequency Distribution: ',statistics.freqDist()) # [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
// console.log(statistics.describe())
// Count: 25
// Sum:  744
// Min:  24
// Max:  38
// Range:  14
// Mean:  30
// Median:  29
// Mode:  (26, 5)
// Variance:  17.5
// Standard Deviation:  4.2
// TODO
// Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

function count() {
    return ages.length
}

function sum() {
    return ages.reduce((acc, cur) => acc + cur, 0)
}

function min() {
    return Math.min.apply(null, ages)
}

function max() {
    return Math.max.apply(null, ages)
}

function range() {
    return max(ages) - min(ages)
}

function mean() {
    return (sum(ages) / count(ages)).toFixed()
}

function median() {
    ages.sort()
    if (ages.length % 2 === 0) {
        return (ages[ages.length / 1] + ages[ages.length / 2 + 1]) / 2
    } else {
        return ages[Math.floor(ages.length / 2)]
    }
}

function mode() {
    let countAge = ages.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1
        return acc
    }, {})
    let modeArr = []
    Object.entries(countAge).forEach((elem) => {
        modeArr.push({
            mode: elem[0],
            count: elem[1]
        })
    })
    modeArr.sort((a, b) => b.count - a.count)
    return modeArr[0]
}

function variance() {
    let meanAge = mean(ages)
    let powSum = ages.reduce((acc, cur) => {
        acc = acc + Math.pow((cur - meanAge), 2)
        return acc
    }, 0)
    return (powSum / count(ages)).toFixed(1)
}

function std() {
    return (Math.sqrt(variance(ages))).toFixed(1)
}
let statistics = {
    count: count,
    sum: sum,
    min: min,
    max: max,
    range: range,
    mean: mean,
    median: median,
    mode: mode,
    variance: variance,
    std: std
}

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ', statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ', statistics.variance()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
// console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]