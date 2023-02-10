import React from "react";
import { useSelector } from "react-redux";

const PokemonComponent = () => {
  const { pokemon } = useSelector((state) => state.pokemon);

  return (
    <div>
      <p>{pokemon.species.name}</p>
    </div>
  );
};

export default PokemonComponent;
