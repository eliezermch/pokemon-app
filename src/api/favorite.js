import AsyncStorage from "@react-native-async-storage/async-storage";
import { includes, pull } from "lodash";
import { FAVORITE_STORAGE } from "../utils/constans";

const getFavoritesApi = async () => {
  try {
    const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
    return JSON.parse(response || "[]");
  } catch (err) {
    console.log(err);
  }
};

export { getFavoritesApi };

const addFavoritePokemonApi = async (id) => {
  try {
    const favorites = await getFavoritesApi();
    favorites.push(id);
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
  } catch (err) {
    console.log(err);
  }
};

export { addFavoritePokemonApi };

const isPokemonFavoriteApi = async (id) => {
  try {
    const response = await getFavoritesApi();
    return includes(response, id);
  } catch (err) {
    console.log(err);
  }
};

export { isPokemonFavoriteApi };

const removePokemonFavoriteApi = async (id) => {
  try {
    const favorites = await getFavoritesApi();
    const newFavorites = pull(favorites, id);
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(newFavorites));
  } catch (err) {
    console.log(err);
  }
};

export { removePokemonFavoriteApi };
