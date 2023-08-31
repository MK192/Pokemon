import { useEffect, useState } from 'react';
import { useQueries } from '@tanstack/react-query';
import { StyledPokemonList } from '../componentStyles/PokemonList.styled';
import { format } from 'date-fns';
import { PokemonResult, Colors } from '../types/types';
import { useSelectedId } from '../context/SelectedPokemonContext';

import axios from 'axios';
import PokemonCard from './PokemonCard';
import PokemonPreview from './PokemonPreview';
import PokemonLoading from './PokemonLoading';
import PokemonError from './PokemonError';
import Nav from './Nav';

const PokemonList = () => {
    const [page, setPage] = useState<number>(0);
    const [offset, setOFfset] = useState<number>(0);
    const [pokemonFilter, setPokemonFilter] = useState<string>('');

    const { selected, setSelected } = useSelectedId();

    /* there is 2 queries, first query  fetch all pokemons, or pokemons 
    with selected color if filter is activated.
    Second query fetch all pokemon queries 
*/
    const queryResults = useQueries({
        queries: [
            {
                queryKey: ['pokemons', { offset }, { pokemonFilter }],
                keepPreviousData: true,
                refetchOnWindowFocus: false,

                queryFn: () =>
                    axios
                        .get(
                            pokemonFilter
                                ? `https://pokeapi.co/api/v2/pokemon-color/${pokemonFilter}`
                                : `https://pokeapi.co/api/v2/pokemon/?limit=8&offset=${offset}`
                        )
                        .then((res) => {
                            if (!res.data) {
                                throw new Error('Error');
                            }
                            return res.data;
                        }),
                staleTime: 1000000000,
            },
            {
                queryKey: ['colors'],
                keepPreviousData: true,
                refetchOnWindowFocus: false,

                queryFn: () =>
                    axios
                        .get(`https://pokeapi.co/api/v2/pokemon-color/`)
                        .then((res) => {
                            return res.data;
                        }),
                staleTime: 10000000,
            },
        ],
    });

    useEffect(() => {
        setSelected(1);

        JSON.stringify(localStorage.setItem('selected', `${selected}`));
    }, []);

    // extracting ids to send to PokemonCard component for display

    let ids: number[] = [];
    if (pokemonFilter) {
        ids = queryResults[0]?.data.pokemon_species
            ?.slice(page * 8, page * 8 + 8)
            .map((pokemon: any) => {
                const idMatch = pokemon?.url.match(/\/(\d+)\/$/);
                const id = idMatch ? Number(idMatch[1]) : null;

                return id;
            });
    } else {
        ids = queryResults[0]?.data?.results?.map((pokemon: PokemonResult) => {
            const idMatch = pokemon?.url.match(/\/(\d+)\/$/);
            const id = idMatch ? Number(idMatch[1]) : null;

            return id;
        });
    }

    //const currentDate = format(dataUpdatedAt, 'dd MMM yy, H:mm:ss');
    const currentDate = format(
        queryResults[0]?.dataUpdatedAt,
        'dd MMM yy, H:mm:ss'
    );
    if (queryResults[0].isLoading)
        return (
            <>
                <Nav backButtonEnabled={false} navText="Pokemon App" />
                <PokemonLoading />
            </>
        );
    if (queryResults[0].isError)
        return (
            <>
                <Nav backButtonEnabled={false} navText="Pokemon App" />
                <PokemonError offset={offset} />;
            </>
        );

    return (
        <>
            <Nav backButtonEnabled={false} navText="Pokemon App" />
            <StyledPokemonList>
                <div className="filter">
                    <span>Filter by color: </span>
                    <select
                        name="color"
                        onChange={(e) => {
                            setPokemonFilter(e.target.value);
                            setPage(0);
                            setOFfset(0);
                        }}
                    >
                        <option value="">All</option>
                        {queryResults[1]?.data?.results.map((color: Colors) => {
                            return (
                                <option
                                    value={`${color.name}`}
                                    key={`${color.name}`}
                                >
                                    {color.name}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <hr />

                <div className="pokemon-content">
                    <div className="pokemon-list">
                        {pokemonFilter
                            ? queryResults[0]?.data.pokemon_species
                                  ?.slice(page * 8, page * 8 + 8)
                                  .map(
                                      (
                                          pokemon: PokemonResult,
                                          index: number
                                      ) => (
                                          <PokemonCard
                                              pokemon={pokemon}
                                              isError={queryResults[0].isError}
                                              isLoading={
                                                  queryResults[0].isLoading
                                              }
                                              error={queryResults[0].error}
                                              key={pokemon.name}
                                              ids={ids[index]}
                                          />
                                      )
                                  )
                            : queryResults[0]?.data.results
                                  ?.slice(0, 8)
                                  .map(
                                      (
                                          pokemon: PokemonResult,
                                          index: number
                                      ) => (
                                          <PokemonCard
                                              pokemon={pokemon}
                                              isError={queryResults[0].isError}
                                              isLoading={
                                                  queryResults[0].isLoading
                                              }
                                              error={queryResults[0].error}
                                              key={pokemon.name}
                                              ids={ids[index]}
                                          />
                                      )
                                  )}
                    </div>
                    <div className="pokemon-preview">
                        <PokemonPreview isSinglePokemon={false} />
                    </div>
                </div>
                <div className="date-totalCount">
                    <div className="date-fetched">
                        <span>Data fetched:</span>
                        {currentDate}
                    </div>
                    <div className="pokemon-count">
                        <span>Total pokemons:</span>{' '}
                        {queryResults[0]?.data.count}
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
                        readOnly
                    />
                    <button
                        type="button"
                        onClick={() => {
                            setPage((prev) => prev + 1);
                            setOFfset((prev) => prev + 8);
                        }}
                        disabled={
                            (page + 1) * 8 > queryResults[0]?.data.count ||
                            (page + 1) * 8 >
                                queryResults[0]?.data.pokemon_species?.length
                        }
                    >
                        {'>'}
                    </button>
                </div>
            </StyledPokemonList>
        </>
    );
};

export default PokemonList;
