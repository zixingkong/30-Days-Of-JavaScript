(async () => {
    try {
        let data = await fetch(countriesAPI)
        let countries = await data.json()
        let languagesSet = new Set()
        for (const country of countries) {
            languagesSet.add(country.languages)
        }
        console.log(languagesSet)
    } catch (error) {
        console.error(error)
    }
})()