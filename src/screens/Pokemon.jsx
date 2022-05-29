import { ScrollView } from "react-native";
import React from "react";
import { getPokemonDetailsApi } from "../api/pokemon";
import { Header } from "../components/pokemon/Header";
import { Types } from "../components/pokemon/Types";
import { Stats } from "../components/pokemon/Stats";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Favorite } from "../components/pokemon/Favorite";
import useAuth from "../hooks/useAuth";

const Pokemon = (props) => {
  const {
    navigation,
    route: { params },
  } = props;

  const [pokemon, setPokemon] = React.useState(null);
  const { auth } = useAuth();

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => auth && <Favorite id={pokemon?.id} />,
      headerLeft: () => (
        <Icon
          name="arrow-left"
          color="#fff"
          size={20}
          style={{ marginLeft: 20 }}
          onPress={navigation.goBack}
        />
      ),
    });
  }, [navigation, params, pokemon]);

  React.useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsApi(params.id);
        setPokemon(response);
      } catch (err) {
        navigation.goBack();
      }
    })();
  }, [params]);

  if (!pokemon) return null;

  return (
    <ScrollView>
      <Header
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other["official-artwork"].front_default}
        type={pokemon.types[0].type.name}
      />
      <Types types={pokemon.types} />
      <Stats stats={pokemon.stats} />
    </ScrollView>
  );
};

export { Pokemon };
