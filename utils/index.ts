import { CarProps, FiltersProps } from "../types";

//Chamando todos os carros
export async function fetchCars(filters: FiltersProps) {
    const { manufacturer, year, fuel, limit, model } = filters

    const headers = {
        'X-RapidAPI-Key': 'e3a14cbfd6mshce25c720da589fap131c6fjsn61b36c2940c6',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, { headers: headers })

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

    //Preço do dolar
    const dolarPrice = 5

    const rentalRatePerDayInBrl = rentalRatePerDay * dolarPrice

    return rentalRatePerDayInBrl.toFixed(0);
};

//Gerando uma imagem para um carro especifico. Porem a chave da api n está voltando os itens corretos
export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    const url = new URL("https://cdn.imagin.studio/getimage");
    const { make, model, year } = car;

    //Esse custumer já recebeu muitas requisições
    url.searchParams.append("custumer", 'hrjavascript-mastery')
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(" ")[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    url.searchParams.append('angle', `${angle}`);

    return `${url}`;
}

//Atualizando o pathname e setando os novos pares de tipo e valor
export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set(type, value);

    const newPathname = `${window.location.pathname
        }?${searchParams.toString()}`

    return newPathname
}