import { PokemonCard } from "../../components";
import { useState, useEffect } from "react";
import { usePokemon } from "../../contexts";

export default function PokedexPage() {
  // const { setPokemon } = usePokemon();
  const [pokedex, setPokedex] = useState([]);
  const grabPokemon = async () => {
    let i = 0;
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
      mode: "cors",
    };
    while (i < 102) {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${i + 1}`,
        options
      );
      if (response.ok) {
        const data = await response.json();
        // console.log(pokemon);
        setPokedex((pokedex) => [...pokedex, data]);
        i++;
      } else {
        console.log("error");
      }
    }
  };

  useEffect(() => {
    grabPokemon();
  }, []);
  return (
    <div className="main-container">
      <div className="pokedex">
        {pokedex.map((p, i) => {
          return <PokemonCard pokemon={p} key={i} />;
        })}
      </div>
    </div>
  );
}
