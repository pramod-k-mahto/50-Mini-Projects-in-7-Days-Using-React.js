import { useEffect, useState } from "react";

function App() {
  const [pokemonList, setListPokemon] = useState([]);
  const pokemon_count = 50;

  const fetchPokemon = () => {
    for (let i = 1; i <pokemon_count; i++) {
      // Change to include the last Pokémon
      getPokemon(i);
    }
  };

  const getPokemon = async (id) => {
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    res = await res.json();
    setListPokemon((prev) => {
      return [...prev, res];
    });
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  const typeColors = {
    fire: "#EACEB4",
    grass: "#E4E4D0",
    electric: "#FCF7DE",
    water: "#DEF3FD",
    ground: "#f4e7da",
    rock: "#d5d5d4",
    fairy: "#F2D7D9",
    poison: "#E1ECC8",
    bug: "#EDE4E0",
    dragon: "#97b3e6",
    psychic: "#eaeda1",
    flying: "#F5F5F5",
    fighting: "#E6E0D4",
    normal: "#FFF8EA",
  };

  return (
    <div className=" w-screen overflow-hidden bg-slate-100">
      <p className="text-center mb-5 text-3xl">Pokedex</p>
      <div className=" m-auto flex justify-center flex-wrap gap-5 w-[70rem] overflow-y-auto ">
        {pokemonList.map((pokemon, index) => {
          index=index+1
          const type = pokemon.types[0].type.name;
          const bgColor = typeColors[type] || "#A8A878"; // Default color if type not found

          return (
            <div
              key={index}
              className="w-40 rounded-lg flex flex-col my-4 h-56 shadow-2xl shadow-slate-600"
            >
              <div
                style={{ backgroundColor: bgColor }}
                className="bg-slate-600 w-14 ml-[6.3rem] rounded-bl-lg"
              >
                <p className="pl-2">
                #{("00" + index).slice(-3)}
                </p>
                
              </div>
              <div className="flex flex-col pt-5 items-center text-center space-y-1">
                <div
                  className="w-28 h-28 rounded-full flex justify-center items-center"
                  style={{ backgroundColor: bgColor }}
                >
                  <img
                    className=" rounded-full"
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                  />
                </div>
                <p>{pokemon.name.charAt(0).toUpperCase()}{pokemon.name.slice(1)}</p>
                <p className="text-xs">type: {type}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
