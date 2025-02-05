import {
  SET_POKEMON,
  SET_LOADING,
  SET_FAVORITE
} from "./types";
import { getPokemonDetail } from "@Api";

const setPokemon = (payload) => {
  return {
    type: SET_POKEMON,
    payload
  };
}

const setLoading = (payload) => {
  return {
    type: SET_LOADING,
    payload
  };
}

// action creator for fetching pokemons
const getPokemonsDetails = (responsePokemon = []) => async (dispatch) => {
  const pokemonDetail = await Promise.all(
    responsePokemon.map(async (pokemon) => {
      const detail = await getPokemonDetail(pokemon.url);
      const typesDetail = await Promise.all(
        detail.types.map(async (type) => {
          const response = await getPokemonDetail(type.type.url);
          return {
            name: type.type.name,
            url: response.sprites["generation-viii"]["sword-shield"].name_icon
          };
        })
      );
      return {
        id: detail.id,
        name: detail.name,
        url: detail.sprites.other["official-artwork"].front_default,
        types: typesDetail,
        fav: false
      };
    })
  );
  dispatch(setPokemon(pokemonDetail));
  dispatch(setLoading(false));
};

const setFavorite = (payload) => {
  return {
    type: SET_FAVORITE,
    payload
  };
};

export {
  setPokemon,
  getPokemonsDetails,
  setLoading,
  setFavorite
};