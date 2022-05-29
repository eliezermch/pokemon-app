import { POKEMON_TYPE_COLORS } from "./constans";

const getColorByPokemonType = (type) => {
  return POKEMON_TYPE_COLORS[type.toLowerCase()];
};

export { getColorByPokemonType };
