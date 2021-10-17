export const Footer = ({ iconGithub, logoPokeapi }) => {
  return (
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
  );
};
