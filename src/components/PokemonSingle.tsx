import { useParams, useNavigate } from 'react-router-dom';
import { useInfiniteQuery, useQuery, QueryCache } from '@tanstack/react-query';
import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const PokemonSingle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const { data, error, status, isPreviousData } = useQuery({
    queryKey: ['pokemons', { page }],

    keepPreviousData: true,
    queryFn: () =>
      axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=8`).then((res) => {
        console.log(res.data);

        return res.data;
      }),
  });

  const queryCache = new QueryCache({
    onError: (error) => {
      console.log(error);
    },
    onSuccess: (data) => {
      console.log(data);
    },
    onSettled: (data, error) => {
      console.log(data, error);
    },
  });

  const query = queryCache.find(['pokemons']);
  console.log(query);

  if (status === 'loading') return <h1>Loading ....</h1>;
  if (status === 'error') return <h1>{JSON.stringify(error)}</h1>;
  return (
    <>
      <h1>
        Post List Paginated
        <br />
        <small>{isPreviousData && 'Previous Data'}</small>
      </h1>
      {data?.results?.map((pokemon) => (
        <div key={pokemon.name}>{pokemon.name}</div>
      ))}
      {data.previousPage && (
        <button onClick={() => setPage(data.previousPage)}>Previous</button>
      )}{' '}
      {data.nextPage && (
        <button onClick={() => setPage(data.nextPage)}>Next</button>
      )}
    </>
  );
};
export default PokemonSingle;
