import React, { useEffect } from 'react';
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import Layout from '@Components/Layout';
import Search from '@Components/Search';
import CardList from '@Components/CardList';
import Loader from '@Components/Loader';
import Logo from '@Assets/logo.svg';
import { getPokemons } from '@Api';
import { getPokemonsDetails, setLoading, setFavorite } from '@Actions';

const App = (
  // pokemons,
  // setPokemons
) => {
  //const [pokemons, setPokemons] = React.useState([]);
  const pokemons = useSelector(state => state.pokemons);
  const loading = useSelector(state => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true));
      const responsePokemon = await getPokemons();
      // const pokemonDetail = await Promise.all(
      //   responsePokemon.map(async (pokemon) => await getPokemonDetail(pokemon.url))
      // );
      dispatch(getPokemonsDetails(responsePokemon));
    }

    fetchPokemons();
  }, []);

  const handleFavorite = (id) => {
    dispatch(setFavorite({ id: id }));
  };

  return (
    <Layout>
      <img className="w-1/3 py-5" src={Logo} alt="logo" />
      <div className='w-96'>
        <Search placeholder="Buscar..." />
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
