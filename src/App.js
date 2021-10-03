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
      <div class="card__searcher">
        <form>
          <label htmlFor={'pokemonName'} class="screen-reader-only">
            Search pokemon card
          </label>
          <input id="pokemonName" type="text" className="poke-search" />
        </form>
      </div>
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
              There is a plant seed on its back right from the day this Pokémon
              is born. The seed slowly grows larger.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}

export default App;
