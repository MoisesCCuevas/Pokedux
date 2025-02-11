import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemons, getPokemonDetail } from "@Api";
import { setLoading } from "./uiSlice";

export const fetchPokemons = createAsyncThunk("pokemon/fetchPokemons", async (_, thunkAPI) => {
  const { dispatch } = thunkAPI;
  dispatch(setLoading(true));
  const responsePokemon = await getPokemons();
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
});

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    pokemons: [],
    pokemonsFiltered: []
  },
  reducers: {
    setPokemon: (state, action) => {
      state.pokemons = action.payload;
      state.pokemonsFiltered = action.payload;
    },
    setFavorite: (state, action) => {
      const pokemonIndex = state.pokemons.findIndex(pokemon => pokemon.id === action.payload.id);
      if (pokemonIndex !== -1) {
        state.pokemons[pokemonIndex].fav = !state.pokemons[pokemonIndex].fav;
      }
      state.pokemonsFiltered = state.pokemons;
    },
    setFilter: (state, action) => {
      state.pokemonsFiltered = state.pokemons.filter(pokemon => pokemon.name.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1);
    }
  }
});

export const { setPokemon, setFavorite, setFilter } = pokemonSlice.actions;
export default pokemonSlice.reducer;
