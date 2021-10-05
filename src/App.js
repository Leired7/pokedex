import './App.css';
import Bulbasaur from './assets/img/bulbasaur.png';
import iconHeight from './assets/icons/icon-height.svg';
import iconWeight from './assets/icons/icon-weight.svg';
import iconPokeBall from './assets/icons/icon-pokeball.svg';

function App() {
  return (
    <div className="App">
      <header className="navigation__header">
        <nav>
          <a
            href="#"
            className="navigation__logo"
            title="Aún no tengo enlace. ¿Lo necesito?"
          >
            <img
              src={iconPokeBall}
              alt="Bola pokedex"
              className="icon-pokeball"
            />
            My Pokédex
          </a>
        </nav>
      </header>
      <div class="search__container">
        <form className="search__form">
          <label htmlFor={'pokemonName'} class="screen-reader-only">
            Search pokemon card
          </label>
          <div class="search__icon">
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
          <input id="pokemonName" type="text" className="search__input" />
        </form>
      </div>
      <section className="section__container">
        <article className="card">
          <header className="card__header">
            <h2 className="card__title color-white">Bulbasaur</h2>
            <p className="card__id color-white">#001</p>
          </header>
          <img src={Bulbasaur} alt="" className="card__image" />
          <div className="card__description">
            <ul className="card__list">
              <li className="card-tag tag background-color-grass">Grass</li>
              <li className="card-tag tag background-color-poison">Poison</li>
            </ul>
            <div className="card__about">
              <h3 className="card__about-title color-grass">About</h3>
              <ul className="card__icons">
                <li className="data__wrapper">
                  <p className="data__text">
                    <img src={iconWeight} alt="Icono de una regla" />
                    <span className="data__number">6,9 kg</span>
                  </p>
                  <span className="data__type">Weight</span>
                </li>
                <li className="data__wrapper">
                  <p className="data__text">
                    <img src={iconHeight} alt="Icono de una regla" />
                    <span className="data__number">0,7 m</span>
                  </p>
                  <span className="data__type">Height</span>
                </li>
              </ul>
              <p className="about__description truncate-overflow">
                There is a plant seed on its back right from the day this
                Pokémon is born. The seed slowly grows larger.
              </p>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}

export default App;
