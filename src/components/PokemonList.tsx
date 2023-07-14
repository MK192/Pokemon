import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { StyledPokemonList } from '../componentStyles/PokemonList.styled';
import axios from 'axios';
import PokemonCard from './PokemonCard';
const PokemonList = () => {
  const {
    isLoading,
    error,
    data: pokemons,
  } = useQuery({
    queryKey: ['pokemons'],

    queryFn: () =>
      axios.get('https://pokeapi.co/api/v2/pokemon/?limit=8').then((res) => {
        console.log(res.data);

        return res.data;
      }),
  });
  const urls = pokemons?.results?.map((pokemon: any) => pokemon.url);

  const { data: singlePokemon } = useQuery({
    queryKey: ['pokemon', urls],
    queryFn: async () => {
      const fetchData = async (url) => {
        const response = await axios.get(url);
        return response.data;
      };

      if (urls) {
        const data = await Promise.all(urls.map(fetchData));
        return data;
      } else {
        return null;
      }
    },
  });

  return (
    <StyledPokemonList>
      <div className="filter">
        <span>Filter by color: </span>
        <select name="color">
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>
      </div>
      <hr />
      <div className="pokemon-container">
        <div className="pokemon-list">
          {singlePokemon?.map((pokemon) => (
            <PokemonCard
              pokemon={pokemon}
              isLoading={isLoading}
              error={error}
              key={pokemon.id}
            />
          ))}
        </div>
        <div className="pokemon-preview">
          <p>preview</p>
        </div>
      </div>
    </StyledPokemonList>
  );
};

export default PokemonList;
