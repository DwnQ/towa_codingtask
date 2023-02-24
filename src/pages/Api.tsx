import { useState, useEffect } from "react";
interface AbilityProps {
  ability: { name: string };
}
interface ApiProps {
  id: string;
  sprites: { front_default: string };
  name: string;
  height: number;
  weight: number;
  abilities: [AbilityProps];
}

function Api() {
  const [pokemonName, setPokemonName] = useState<string>("");
  const [pokemonData, setPokemonData] = useState<null | ApiProps>(null);

  useEffect(() => {
    if (pokemonName) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then((res) => res.json())
        .then((data) => {
          setPokemonData(data);
        });
    }
  }, [pokemonName]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonName(event.target.value);
  };

  const handleSearchClick = async () => {
    if (pokemonName) {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        );
        const data = await response.json();
        setPokemonData(data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="mx-auto h-[500px] mt-24">
      <h1 className="text-4xl font-bold text-center mb-4">Pokémon Search</h1>
      <div className="flex justify-center items-center mb-4">
        <input
          type="text"
          className="border border-gray-300 rounded py-2 px-4 mr-2 leading-tight focus:outline-none focus:ring-2 focus:text-gray-800"
          placeholder="Pokemon Name or ID"
          value={pokemonName}
          onChange={(x) => {
            handleSearchClick();
            handleInputChange(x);
          }}
        />
        <button
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center"
          onClick={handleSearchClick}
        >
          Search
        </button>
      </div>
      {!pokemonData && (
        <div className="text-5xl font-bold text-center mb-4 mt-40">
          Enter Pokémonname or an ID
        </div>
      )}
      {pokemonData && (
        <div key={pokemonData?.id} className="flex justify-center items-center">
          <img
            className="w-64 h-64 mb-4"
            src={pokemonData?.sprites?.front_default}
            alt={pokemonData?.name}
          />
          <div className="ml-8">
            <h2 className="text-2xl font-bold mb-4">{pokemonData?.name}</h2>
            <p className="mb-2">
              <span className="font-bold mr-2">ID:</span>
              {pokemonData?.id}
            </p>
            <p className="mb-2">
              <span className="font-bold mr-2">Height:</span>
              {pokemonData?.height}
            </p>
            <p className="mb-2">
              <span className="font-bold mr-2">Weight:</span>
              {pokemonData?.weight}
            </p>
            <p className="mb-2">
              <span className="font-bold mr-2">Abilities:</span>
              {pokemonData?.abilities.map(
                (item: { ability: { name: string } }, index: number) => (
                  <span key={index} className="mr-2">
                    {item.ability.name}
                  </span>
                )
              )}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Api;
