import { View, Text } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {
  addFavoritePokemonApi,
  isPokemonFavoriteApi,
  removePokemonFavoriteApi,
} from "../../api/favorite";

const Favorite = (props) => {
  const { id } = props;

  const [isFavorite, setIsFavorite] = React.useState(undefined);

  const Icon = isFavorite ? FontAwesome : FontAwesome5;

  React.useEffect(() => {
    (async () => {
      try {
        const response = await isPokemonFavoriteApi(id);
        setIsFavorite(response);
      } catch (err) {
        setIsFavorite(false);
      }
    })();
  }, [id]);

  const addFavorite = async () => {
    try {
      await addFavoritePokemonApi(id);
      setIsFavorite(!isFavorite);
    } catch (err) {
      console.log(err);
    }
  };

  const removeFavorite = async () => {
    try {
      await removePokemonFavoriteApi(id);
      setIsFavorite(!isFavorite);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View>
      <Icon
        name="heart"
        color="#fff"
        size={20}
        onPress={isFavorite ? removeFavorite : addFavorite}
        style={{ marginRight: 20 }}
      />
    </View>
  );
};

export { Favorite };
