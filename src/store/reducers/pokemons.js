import { fromJS } from "immutable";
import { SET_POKEMON, SET_FAVORITE, SET_LOADING } from "@Actions/types";

const initialState = fromJS({
  pokemons: [],
  loading: false
});

export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMON:
      //return {
      //  ...state,
      //  pokemons: action.payload,
      //};
      return state.setIn(["pokemons"], fromJS(action.payload));
    case SET_FAVORITE:
      // const newPokemonList = [...state.pokemons]
      // const pokemonIndex = newPokemonList.findIndex(pokemon => pokemon.id === action.payload.id)
      // if (pokemonIndex !== -1) {
      //   newPokemonList[pokemonIndex].fav = !newPokemonList[pokemonIndex].fav
      // }
      // return {
      //   ...state,
      //   pokemons: newPokemonList,
      // }
      const pokemonIndex = state.get("pokemons").findIndex(pokemon => pokemon.get("id") === action.payload.id);
      if (pokemonIndex !== -1) {
        const isFavorite = state.getIn(["pokemons", pokemonIndex, "fav"]);
        return state.setIn(["pokemons", pokemonIndex, "fav"], !isFavorite);
      }
      return state
    case SET_LOADING:
      return state.setIn(["loading"], action.payload);
      // return {
      //   ...state,
      //   loading: action.payload,
      // };
    default:
      return state;
  }
}