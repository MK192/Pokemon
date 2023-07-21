import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { StyledPokemonList } from '../componentStyles/PokemonList.styled';
import { format } from 'date-fns';
import { useSelectedId } from '../context/ContextProvider';

import axios from 'axios';
import PokemonCard from './PokemonCard';
const PokemonList = () => {
  const [page, setPage] = useState<number>(0);
  const [offset, setOFfset] = useState<number>(0);
  const [lastFetchDate, setLastFetchDate] = useState<string | null>(null);

  const {
    isLoading,
    error,
    data: pokemons,
    refetch,
  } = useQuery({
    queryKey: ['pokemons', { offset }],
    cacheTime: 600000,
    keepPreviousData: true,
    queryFn: () =>
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/?limit=8&offset=${offset}`)
        .then((res) => {
          //    console.log(res.data);
          return res.data;
        }),
    onSuccess: () => {
      const currentDate = format(new Date(), 'dd MMM yy, H:mm');

      setLastFetchDate(currentDate);
    },
  });

  const ids = pokemons?.results?.map((pokemon: any) => {
    const id = pokemon?.url.match(/\/(\d+)\/$/)[1];

    return id;
  });
  /*
  useEffect(() => {
    //  console.log(offset);

    refetch();
  }, [offset, refetch]);*/
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
        <div className="pokemon-content">
          <div className="pokemon-list">
            {pokemons?.results?.map((pokemon, index: number) => (
              <PokemonCard
                pokemon={pokemon}
                isLoading={isLoading}
                error={error}
                key={pokemon.name}
                ids={ids[index]}
              />
            ))}
          </div>
          <div className="pokemon-preview">
            <span>preview</span>
          </div>
        </div>
      </div>
      <div className="date-totalCount">
        <div className="date-fetched">
          <span>Data fetched:</span>
          {lastFetchDate}
        </div>
        <div className="pokemon-count">
          <span>Total pokemons:</span> {pokemons?.count}
        </div>
      </div>
      <hr />
      <div className="pagination">
        <button
          type="button"
          onClick={() => {
            setPage((prev) => prev - 1);
            setOFfset((prev) => prev - 8);
          }}
          disabled={page === 0}
        >
          {'<'}
        </button>
        <input
          type="number"
          min={0}
          value={page}
          onChange={(e) => setPage(Number(e.target.value))}
        />
        <button
          type="button"
          onClick={() => {
            setPage((prev) => prev + 1);
            setOFfset((prev) => prev + 8);
          }}
          disabled={(page + 1) * 8 > pokemons?.count}
        >
          {'>'}
        </button>
      </div>
    </StyledPokemonList>
  );
};

export default PokemonList;
