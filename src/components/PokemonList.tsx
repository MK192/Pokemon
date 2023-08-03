import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { StyledPokemonList } from '../componentStyles/PokemonList.styled';
import { format } from 'date-fns';
import { PokemonResult } from '../types/types';

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
    let {
        isLoading,
        isError,
        error,
        data: pokemons,
        dataUpdatedAt,
    } = useQuery({
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
                    // console.log(res.data);
                    return res.data;
                }),
        staleTime: 10000000,
    });

    // extracting ids to send to PokemonCard component for display
    let ids: number[] = [];
    if (pokemonFilter) {
        ids = pokemons?.pokemon_species
            ?.slice(page * 8, page * 8 + 8)
            .map((pokemon: any) => {
                const idMatch = pokemon?.url.match(/\/(\d+)\/$/);
                const id = idMatch ? Number(idMatch[1]) : null;

                return id;
            });
    } else {
        ids = pokemons?.results?.map((pokemon: PokemonResult) => {
            const idMatch = pokemon?.url.match(/\/(\d+)\/$/);
            const id = idMatch ? Number(idMatch[1]) : null;

            return id;
        });
    }

    const currentDate = format(dataUpdatedAt, 'dd MMM yy, H:mm:ss');
    if (isLoading)
        return (
            <>
                <Nav backButtonEnabled={false} navText="Pokemon App" />
                <PokemonLoading />
            </>
        );
    if (isError)
        return (
            <>
                <Nav backButtonEnabled={false} navText="Pokemon App" />
                <PokemonError offset={offset} />;
            </>
        );
    console.log(pokemons);
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
                        <option value="red">Red</option>
                        <option value="green">Green</option>
                        <option value="blue">Blue</option>
                    </select>
                </div>
                <hr />

                <div className="pokemon-content">
                    <div className="pokemon-list">
                        {pokemonFilter
                            ? pokemons.pokemon_species
                                  ?.slice(page * 8, page * 8 + 8)
                                  .map(
                                      (
                                          pokemon: PokemonResult,
                                          index: number
                                      ) => (
                                          <PokemonCard
                                              pokemon={pokemon}
                                              isError={isError}
                                              isLoading={isLoading}
                                              error={error}
                                              key={pokemon.name}
                                              ids={ids[index]}
                                          />
                                      )
                                  )
                            : pokemons.results
                                  ?.slice(0, 8)
                                  .map(
                                      (
                                          pokemon: PokemonResult,
                                          index: number
                                      ) => (
                                          <PokemonCard
                                              pokemon={pokemon}
                                              isError={isError}
                                              isLoading={isLoading}
                                              error={error}
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
                        readOnly
                    />
                    <button
                        type="button"
                        onClick={() => {
                            setPage((prev) => prev + 1);
                            setOFfset((prev) => prev + 8);
                        }}
                        disabled={
                            (page + 1) * 8 > pokemons?.count ||
                            (page + 1) * 8 > pokemons?.pokemon_species?.length
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
