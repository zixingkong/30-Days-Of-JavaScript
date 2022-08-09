// Exercises: Level 3
import fetch from "node-fetch"
const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
// 1. Read the cats api and find the average weight of cat in metric unit.
fetch(catsAPI)
    .then(response => response.json())
    .then(data => {
        let sumWeight = data.reduce((acc, cur) => {
            console.log(Number(cur.weight.imperial.split(' - ')[0]))
            let weight = Number(cur.weight.imperial.split(' - ')[0])
            acc += weight
            return acc
        }, 0)
        let averageWeight = sumWeight / data.length
        console.log('averageWeight: ' + averageWeight)
    })
    .catch(err => console.error(err))
// 2. Read the countries api and find out the 10 largest countries
const fetchData = async () => {
    try {
        let data = await fetch(countriesAPI)
        let countries = await data.json()
        let areaMap = new Map()
        for (const country of countries) {
            areaMap.set(country.name, country.area)
        }
        let countryAreaArr = []
        for (const [country, area] of areaMap) {
            let areaObj = {}
            areaObj[country] = area
            countryAreaArr.push(areaObj)
        }
        countryAreaArr.sort((a, b) => Object.values(b)[0] - Object.values(a)[0])
        console.log(countryAreaArr.slice(0, 10))
    } catch (error) {
        console.error(error)
    }
}
fetchData()
// 3. Read the countries api and count total number of languages in the world used as officials.
const fetchDataNew = async () => {
    try {
        let data = await fetch(countriesAPI)
        let countries = await data.json()
        let languagesSet = new Set()
        for (const country of countries) {
            languagesSet.add(...country.languages.reduce((acc, cur) => {
                acc.push(cur.name)
                return acc
            }, []))
        }
        console.log(languagesSet)
        console.log(languagesSet.length)
    } catch (error) {
        console.error(error)
    }
}
fetchDataNew()