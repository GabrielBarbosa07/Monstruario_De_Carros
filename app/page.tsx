import { Hero, SearchBar, CustomFilter } from "../components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 py-36 sm:px-16 px-6 max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Catágolo De Carros</h1>
          <p>Explore os carros que voçê goste</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="Combustível" />
            <CustomFilter title="Ano" />
          </div>
        </div>
      </div>
    </main>
  );
}
