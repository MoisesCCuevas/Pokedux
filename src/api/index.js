import axios from "axios";

const API = axios.create();

export const getPokemons = async () => {
  const response = await API.get(process.env.POKE_API);
  return response.data.results;
}