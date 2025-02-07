import React, { useEffect } from 'react';
// import { connect } from 'react-redux';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import Layout from '@Components/Layout';
import Search from '@Components/Search';
import CardList from '@Components/CardList';
import Loader from '@Components/Loader';
import Logo from '@Assets/logo.svg';
// import { getPokemons } from '@Api';
import { fetchPokemons, setFavorite, setFilter } from './store/slices/pokemonSlice';
//import { getPokemonsDetails, setLoading, setFavorite } from '@Actions';

const App = (
  // pokemons,
  // setPokemons
) => {
  //const [pokemons, setPokemons] = React.useState([]);
  //const pokemons = useSelector(state => state.get("pokemons", shallowEqual).toJS());
  // const loading = useSelector(state => state.get("loading"));
  const pokemons = useSelector(state => state.pokemons.pokemonsFiltered, shallowEqual);
  const loading = useSelector(state => state.ui.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    // const fetchPokemons = async () => {
    //   dispatch(setLoading(true));
    //   const responsePokemon = await getPokemons();
    //   // const pokemonDetail = await Promise.all(
    //   //   responsePokemon.map(async (pokemon) => await getPokemonDetail(pokemon.url))
    //   // );
    //   dispatch(getPokemonsDetails(responsePokemon));
    // }
    // 
    // fetchPokemons();
    dispatch(fetchPokemons());
  }, []);

  const handleFavorite = (id) => {
    dispatch(setFavorite({ id: id }));
  };

  const handleOnSearch = (e) => {
    dispatch(setFilter(e.target.value));
  }

  return (
    <Layout>
      <img className="w-1/3 py-5" src={Logo} alt="logo" />
      <div className='w-96'>
        <Search placeholder="Buscar..." onChange={handleOnSearch} />
      </div>
      <div className='flex justify-center p-5'>
        {loading ? <Loader /> : <CardList items={pokemons} onClickFavorite={handleFavorite} />}
      </div>
    </Layout>
  );
};

// const mapStateToProps = (state) => ({
//   pokemons: state.pokemons,
// });
// 
// const mapDispatchToProps = (dispatch) => ({
//   setPokemon: (value) => dispatch(setPokemonAction(value)),
// });
// 
// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
