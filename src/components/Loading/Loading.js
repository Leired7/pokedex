import './style.css';

export const Loading = () => {
  return (
    <>
      <div class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p>Estamos buscando Pokémons...</p>
    </>
  );
};
