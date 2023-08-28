//Chamando todos os carros
export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': 'e3a14cbfd6mshce25c720da589fap131c6fjsn61b36c2940c6',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', { headers: headers })

    const data = await response.json()

    return data
}
//Calculando o Preço do Aluguel de um carro
export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Preço base do aluguel por dia em reais
    const mileageFactor = 0.1; // Taxa adicional por quilômetro rodado
    const ageFactor = 0.05; // Taxa adicional por ano de idade do veículo

    // Calcular taxa adicional com base na quilometragem e idade
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calcular a taxa total de aluguel por dia
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};
