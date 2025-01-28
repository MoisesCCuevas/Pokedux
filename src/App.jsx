import React, { useEffect } from 'react';
import Layout from '@Components/Layout';
import Search from '@Components/Search';
import CardList from '@Components/CardList';
import Logo from '@/Assets/logo.svg';
import { getPokemons } from './api';

const App = () => {
  const [pokemons, setPokemons] = React.useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemons = await getPokemons();
      setPokemons(pokemons);
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

export default App;
