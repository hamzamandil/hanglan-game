const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if(response.status === 200){
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('unable to get puzzle')
    }
}


// making an http request 

// country api
const getCountry = async (countryCode) => {
    const response = await fetch('//restcountries.eu/rest/v2/all')
    if(response.status === 200) {
        const data = await response.json()
        const countryMatch = data.find((count) => count.alpha2Code === countryCode)
        return countryMatch
    } else {
        throw new Error('unable to fetch IP')
    }
}

const getLocation = async () => {
    const response = await fetch('//ipinfo.io/json?token=19692271451939')
    if(response.status === 200) {
        return response.json()
    } else {
        throw new Error('unable to fetch your country')
    }
}

const getCurrentCountry = async () => {
    const location = await getLocation()
    const country = await getCountry(location.country)
    return country
}