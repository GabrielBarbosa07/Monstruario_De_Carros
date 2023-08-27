export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': 'e3a14cbfd6mshce25c720da589fap131c6fjsn61b36c2940c6',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars', { headers: headers })

    const data = await response.json()

    return data
}