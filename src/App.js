import './App.css';
import Bulbasaur from './assets/img/bulbasaur.png';
import iconHeight from './assets/icons/icon-height.svg';
import iconWeight from './assets/icons/icon-weight.svg';

function App() {
  return (
    <div className="App">
      <article class="poke-card">
        <header class="card-header">
          <h2 class="card-title">Bulbasaur</h2>
          <p class="card-id">#001</p>
        </header>
        <img src={Bulbasaur} alt="" class="card-image" />
        <div class="card-description">
          <ul class="card-tag-list">
            <li class="card-tag tag bg-grass">Grass</li>
            <li class="card-tag tag bg-poison">Poison</li>
          </ul>
          <div class="card-about">
            <h3 class="card-about-title c-grass">About</h3>
            <ul class="card-icons">
              <li class="icon-wrapper">
                <p class="icon-text">
                  <img src={iconWeight} alt="Icono de una regla" />
                  <span class="type-number">6,9 kg</span>
                </p>
                <span class="type">Weight</span>
              </li>
              <li class="icon-wrapper">
                <p class="icon-text">
                  <img src={iconHeight} alt="Icono de una regla" />
                  <span class="type-number">0,7 m</span>
                </p>
                <span class="type">Height</span>
              </li>
            </ul>
            <p class="pokemon-description truncate-overflow">
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
