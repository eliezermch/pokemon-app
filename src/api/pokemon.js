import { API_HOST } from "../utils/constans";

const getPokemon = async (endpointUrl) => {
  try {
    const url = `${API_HOST}/pokemon?limit=20&offset=0`;
    const response = await fetch(endpointUrl || url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export { getPokemon };

const getPokemonDetailsByUrl = async (url) => {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export { getPokemonDetailsByUrl };

const getPokemonDetailsApi = async (id) => {
  try {
    const url = `${API_HOST}/pokemon/${id}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export { getPokemonDetailsApi };
