import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function PokemonPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState({});
  const [fetchStatus, setFetchStatus] = useState(false);
  const [abilityFetchStatus, setAbilityFetchStatus] = useState(false);
  const [ability, setAbility] = useState({});
  const [abilities, setAbilities] = useState([]);

  //abilities: [{name: ,effect:},{}]

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setPokemon(data);
        setFetchStatus(true);
        setAbilities(getAbilities());
      });
  }, []);

  function getAbilities() {
    if (pokemon.abilities) {
      pokemon.abilities.map((a, i) => {
        fetch(a.ability.url)
          .then((resp) => resp.json())
          .then((data) => {
            setAbilityFetchStatus(true);
            const effectObj = ability.effect_entries
              ? ability.effect_entries.find((a) => a.language.name == "en")
              : null;

            setAbilities([
              ...abilities,
              {
                name: a.ability.name,
                effect: effectObj.effect,
              },
            ]);
          });
      });
    } else {
      return <p>Loading</p>;
    }
  }

  if (pokemon && fetchStatus && pokemon.abilities) {
    return (
      <div className="pokemon-container">
        <h1>Pokemon Page</h1>
        <div className="pokemon">
          <h1 className="title">{pokemon.name}</h1>
          {pokemon.sprites ? (
            <div className="images">
              <img src={pokemon.sprites.front_default} className="sprite" />
              <img src={pokemon.sprites.back_default} className="sprite" />
            </div>
          ) : (
            "Loading"
          )}
          <h3>types:</h3>
          <div className="types">
            <ul>
              {pokemon.types.map((type, i) => {
                return (
                  <li key={i} className={type.type.name}>
                    {type.type.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="abilities">{getAbilities()}</div>

        <button
          className="back-button"
          onClick={() => {
            navigate("/pokemon");
          }}
        >
          Back
        </button>
      </div>
    );
  } else {
    return <h1>Loading</h1>;
  }
}
