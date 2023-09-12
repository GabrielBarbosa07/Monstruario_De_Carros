import { Hero, SearchBar, CustomFilter, CarCard } from "../components";
import { fuels, yearsOfProduction } from "../constants";
import { HomeProps } from "../types";
import { fetchCars } from "../utils";

export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2023,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 12,
    model: searchParams.model || "",
  });

  const isDataEmpty = !Array.isArray(allCars) || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 py-36 sm:px-16 px-6 max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Catágolo De Carros</h1>
          <p>Explore os carros que você goste</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels}/>
            <CustomFilter title="year" options={yearsOfProduction}/>
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard key={car?.model} car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">
              Oops, Sem Resultado
            </h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
