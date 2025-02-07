// import { combineReducers } from "redux-immutable";
// import { pokemonsReducer } from "./pokemons";
// import { uiReducer } from "./ui";
import { combineReducers } from "redux";
import pokemonSlice from "../slices/pokemonSlice";
import uiReducer from "../slices/uiSlice";

const rootReducer = combineReducers({
  pokemons: pokemonSlice,
  ui: uiReducer
});

export default rootReducer;
