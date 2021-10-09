import React, { useState, useEffect } from 'react';
import './App.css';
import { Header } from './components/Header';
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

  const handleSearch = (e) => {
    setFilter(e.target.value);
  };

  return (
    <main className="App">
      <Header />
      <div className="search__container">
        <form className="search__form">
          <label htmlFor={'pokemonName'} className="screen-reader-only">
            Search pokemon card
          </label>
          <div className="search__icon">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              focusable="true"
              aria-hidden="false"
            >
              <path
                d="M15.8898 14.6524L12.0963 10.8588C12.0244 10.787 11.9307 10.7495 11.8307 10.7495H11.4182C12.4025 9.60891 12.9994 8.1246 12.9994 6.49968C12.9994 2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.1246 12.9994 9.60891 12.4025 10.7495 11.4182V11.8307C10.7495 11.9307 10.7901 12.0244 10.8588 12.0963L14.6524 15.8898C14.7993 16.0367 15.0368 16.0367 15.1836 15.8898L15.8898 15.1836C16.0367 15.0368 16.0367 14.7993 15.8898 14.6524ZM6.49968 11.4994C3.73732 11.4994 1.49993 9.26205 1.49993 6.49968C1.49993 3.73732 3.73732 1.49993 6.49968 1.49993C9.26205 1.49993 11.4994 3.73732 11.4994 6.49968C11.4994 9.26205 9.26205 11.4994 6.49968 11.4994Z"
                fill="#666666"
              />
            </svg>
          </div>
          <input
            id="pokemonName"
            type="text"
            className="search__input"
            value={filter}
            onChange={handleSearch}
          />
        </form>
      </div>
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
