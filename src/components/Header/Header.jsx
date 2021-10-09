import iconPokeBall from '../../assets/icons/icon-pokeball.svg';

export const Header = () => {
  return (
    <header className="navigation__header">
      <nav>
        <a
          href="/"
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
  );
};
