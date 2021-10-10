import React, { useState, useEffect } from 'react';
import './App.css';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { PokeCard } from './components/Pokecard';
import { Footer } from './components/Footer';

import iconHeight from './assets/icons/icon-height.svg';
import iconWeight from './assets/icons/icon-weight.svg';
import iconGithub from './assets/icons/icon-github.svg';
import logoPokeapi from './assets/icons/logo-pokeapi.svg';

function App() {
  const [pokeCards, setPokeCards] = useState([]);
  const [filter, setFilter] = useState('');

  const filteredPokemon =
    pokeCards.length > 0
      ? pokeCards.filter((item) => {
          return item.name.toLowerCase().includes(filter);
        })
      : [];

  useEffect(() => {
    async function getPokecards() {
      const pokeApiInfo = await fetch('https://pokeapi.co/api/v2/pokemon').then(
        (res) => res.json()
      );

      const pokemonUrls = pokeApiInfo.results.map((item) => item.url);

      const pokeCardFetched = await Promise.all(
        pokemonUrls.map(async (url) => {
          const resp = await fetch(url);
          return resp.json();
        })
      );

      console.log(pokeCardFetched[3]);
      setPokeCards(pokeCardFetched);
    }

    getPokecards();
  }, []);

  return (
    <main className="App">
      <Header />
      <SearchBar filter={filter} onChangeSetFilter={setFilter} />

      <section className="section__container">
        <PokeCard
          filteredPokemon={filteredPokemon}
          iconHeight={iconHeight}
          iconWeight={iconWeight}
        />
      </section>
      <Footer iconGithub={iconGithub} logoPokeapi={logoPokeapi} />
    </main>
  );
}

export default App;
