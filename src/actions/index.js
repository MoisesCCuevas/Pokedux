import { SET_POKEMON } from "./types";

const setPokemon = (payload) => {
  return {
    type: SET_POKEMON,
    payload
  };
}

export {
  setPokemon
};