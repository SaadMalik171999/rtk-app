import { useDispatch } from "react-redux";
import "./App.css";
import { setPokemon } from "./features/pokemonSlice";
import { useGetPokemonByNameQuery } from "./services/pokemon";
import PokemonComponent from "./PokemonComponent";
function App() {
  
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");

  const dispatch = useDispatch();

  dispatch(setPokemon(data));
  return (
    <>
      <div className="App">
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <>
            <h3>{data.species.name}</h3>
            <img src={data.sprites.front_shiny} alt={data.species.name} />
            <PokemonComponent />
          </>
        ) : null}
      </div>
    </>
  );
}

export default App;
