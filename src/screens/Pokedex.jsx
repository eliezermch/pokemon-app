import { SafeAreaView, Text } from "react-native";
import React from "react";
import { getPokemon, getPokemonDetailsByUrl } from "../api/pokemon";
import { PokemonList } from "../components/PokemonList";

const Pokedex = () => {
  const [pokemons, setPokemos] = React.useState([]);
  const [nextUrl, setNextUrl] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const responde = await getPokemon(nextUrl);
      setNextUrl(responde.next);
      const pokemonsArray = [];
      for await (const pokemon of responde.results) {
        const pokemonDetails = await getPokemonDetailsByUrl(pokemon.url);

        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          imagen:
            pokemonDetails.sprites.other["official-artwork"].front_default,
        });
      }
      setPokemos([...pokemons, ...pokemonsArray]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SafeAreaView>
      <PokemonList
        pokemons={pokemons}
        loadPokemons={loadPokemons}
        isNext={nextUrl}
      />
    </SafeAreaView>
  );
};

export { Pokedex };
