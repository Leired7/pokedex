import './style.css';

export const Loading = () => {
  return (
    <>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p>Estamos buscando Pokémons...</p>
    </>
  );
};
