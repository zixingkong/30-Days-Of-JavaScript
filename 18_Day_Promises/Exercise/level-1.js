// Exercises
import fetch from "node-fetch"

const countriesAPI = 'https://restcountries.com/v2/all'

// Exercises: Level 1
// 1. Read the countries API using fetch and print the name of country, capital, languages, population and area.
fetch(countriesAPI).then(response => response.json()).then(data => {
    for (const country of data) {
        console.log('-'.repeat(100))
        console.log(country.name)
        console.log(country.capital)
        console.log(country.languages)
        console.log(country.population)
        console.log(country.area)
    }
}).catch(error => console.error(error))