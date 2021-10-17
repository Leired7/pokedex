import './style.css';

export const PokeCard = ({ filteredPokemon, iconHeight, iconWeight }) => {
  return (
    <>
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
    </>
  );
};
