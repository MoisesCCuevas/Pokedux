import { SET_POKEMON } from "@Actions/types";

const initialState = {
  pokemons: [],
};

export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMON:
      return {
        ...state,
        pokemons: action.payload,
      };
    default:
      return state;
  }
}