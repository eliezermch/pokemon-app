import { SafeAreaView, Text, Button } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import React from "react";
import { getFavoritesApi } from "../api/favorite";
import { getPokemonDetailsApi } from "../api/pokemon";
import useAuth from "../hooks/useAuth";
import { PokemonList } from "../components/PokemonList";
import { NoLogged } from "../components/NoLogged";

export default function Favorite() {
  const [favoritesPokemos, setFavoritesPokemons] = React.useState([]);
  const { auth } = useAuth();

  useFocusEffect(
    React.useCallback(() => {
      if (auth) {
        (async () => {
          const response = await getFavoritesApi();
          const pokemonsArray = [];
          for await (const id of response) {
            const pokemonDetails = await getPokemonDetailsApi(id);

            pokemonsArray.push({
              id: pokemonDetails.id,
              name: pokemonDetails.name,
              type: pokemonDetails.types[0].type.name,
              order: pokemonDetails.order,
              imagen:
                pokemonDetails.sprites.other["official-artwork"].front_default,
            });
          }

          setFavoritesPokemons(pokemonsArray);
        })();
      }
    }, [auth])
  );

  return !auth ? <NoLogged /> : <PokemonList pokemons={favoritesPokemos} />;
}

export { Favorite };
