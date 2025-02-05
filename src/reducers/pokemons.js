import { SET_POKEMON, SET_LOADING, SET_FAVORITE } from "@Actions/types";

const initialState = {
  pokemons: [],
  loading: false
};

export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMON:
      return {
        ...state,
        pokemons: action.payload,
      };
    case SET_FAVORITE:
      const newPokemonList = [...state.pokemons]
      const pokemonIndex = newPokemonList.findIndex(pokemon => pokemon.id === action.payload.id)
      if (pokemonIndex !== -1) {
        newPokemonList[pokemonIndex].fav = !newPokemonList[pokemonIndex].fav
      }
      return {
        ...state,
        pokemons: newPokemonList,
      }
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
}