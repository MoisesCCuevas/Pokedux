import React, { useEffect } from 'react';
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import Layout from '@Components/Layout';
import Search from '@Components/Search';
import CardList from '@Components/CardList';
import Logo from '@/Assets/logo.svg';
import { getPokemons } from './api';
import { setPokemon } from '@Actions';

const App = (
  // pokemons,
  // setPokemons
) => {
  //const [pokemons, setPokemons] = React.useState([]);
  const pokemons = useSelector(state => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await getPokemons();
      dispatch(setPokemon(response));
    }

    fetchPokemons();
  }, []);

  return (
    <Layout>
      <img className="w-1/3 py-5" src={Logo} alt="logo" />
      <div className='w-96'>
        <Search placeholder="Buscar..." />
      </div>
      <div className='flex justify-center p-5'>
        <CardList items={pokemons} />
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
