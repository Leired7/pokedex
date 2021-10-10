import React, { useState, useEffect } from 'react';
import './App.css';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';

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
        {filteredPokemon.map((pokeitem, index) => {
          return (
            <article
              className={`card background-color-${pokeitem.types[0].type.name}`}
              key={index}
            >
              <header className="card__header">
                <h2 className="card__title color-white">{pokeitem.name}</h2>
                <p className="card__id color-white">#{pokeitem.id}</p>
              </header>
              <img
                src={`${pokeitem.sprites.other.dream_world.front_default}`}
                alt={`${pokeitem.name}`}
                className="card__image"
              />
              <div className="card__description">
                <ul className="card__list">
                  {pokeitem.types.map((pokeTag, index) => {
                    return (
                      <li
                        className={`card-tag tag background-color-${pokeTag.type.name}`}
                        key={index}
                      >
                        {pokeTag.type.name}
                      </li>
                    );
                  })}
                </ul>
                <div className="card__about">
                  <h3
                    className={`card__about-title color-${pokeitem.types[0].type.name}`}
                  >
                    About
                  </h3>
                  <ul className="card__icons">
                    <li className="data__wrapper">
                      <p className="data__text">
                        <img src={iconWeight} alt="Icono de una regla" />
                        <span className="data__number">{pokeitem.weight}</span>
                      </p>
                      <span className="data__type">Weight</span>
                    </li>
                    <li className="data__wrapper">
                      <p className="data__text">
                        <img src={iconHeight} alt="Icono de una regla" />
                        <span className="data__number">{pokeitem.height}</span>
                      </p>
                      <span className="data__type">Height</span>
                    </li>
                  </ul>
                  <p className="about__description truncate-overflow">
                    {pokeitem.description}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </section>
      <footer>
        <ul className="footer__container">
          <li className="footer__link">
            <a href="https://github.com/Leired7/pokedex">
              <img src={iconGithub} alt="Logo Github" />
            </a>
          </li>
          <li className="footer__link">
            <a href="https://pokeapi.co/">
              <img src={logoPokeapi} alt="Logo Poke API" />
            </a>
          </li>
        </ul>
      </footer>
    </main>
  );
}

export default App;
