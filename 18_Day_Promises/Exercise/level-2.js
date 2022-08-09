// Exercises: Level 2
import fetch from "node-fetch"
// 1. Print out all the cat names in to catNames variable.

const catsAPI = 'https://api.thecatapi.com/v1/breeds'

const fetchDat = async () => {
    try {
        const response = await fetch(catsAPI)
        const catArr = await response.json()
        for (let cat of catArr) {
            console.log(cat.name)
        }
    } catch (err) {
        console.error(err)
    }
}
console.log('==============async and await')
fetchDat()