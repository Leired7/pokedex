import './App.css';
import Bulbasaur from './assets/img/bulbasaur.png';
import iconHeight from './assets/icons/icon-height.svg';
import iconWeight from './assets/icons/icon-weight.svg';

function App() {
  return (
    <div className="App">
      <article class="card">
        <header class="card__header">
          <h2 class="card__title color-white">Bulbasaur</h2>
          <p class="card__id color-white">#001</p>
        </header>
        <img src={Bulbasaur} alt="" class="card__image" />
        <div class="card__description">
          <ul class="card__list">
            <li class="card-tag tag background-color-grass">Grass</li>
            <li class="card-tag tag background-color-poison">Poison</li>
          </ul>
          <div class="card__about">
            <h3 class="card__about-title color-grass">About</h3>
            <ul class="card__icons">
              <li class="data__wrapper">
                <p class="data__text">
                  <img src={iconWeight} alt="Icono de una regla" />
                  <span class="data__number">6,9 kg</span>
                </p>
                <span class="data_type">Weight</span>
              </li>
              <li class="data__wrapper">
                <p class="data__text">
                  <img src={iconHeight} alt="Icono de una regla" />
                  <span class="data__number">0,7 m</span>
                </p>
                <span class="data__type">Height</span>
              </li>
            </ul>
            <p class="about__description truncate-overflow">
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
