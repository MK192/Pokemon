import { useState } from 'react';
import { useSelectedId } from '../context/SelectedPokemonContext';
import { StyledPokemonPreview } from '../componentStyles/PokemonPreview.styled';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { SelectedAbility } from '../types/types';
import { pokemonCatch } from '../utils/functions';
import { isLocalStorageAccessible } from '../utils/functions';
import { useUserData } from '../context/UserContext';

import axios from 'axios';
import PreviewMessage from './PreviewMessage';

type Props = {
    isSinglePokemon: boolean;
};
const PokemonPreview = ({ isSinglePokemon }: Props) => {
    const { selected } = useSelectedId();
    const { setLogedUser } = useUserData();

    const [isAnimationActive, setIsAnimationActive] = useState(false);
    const [catchMessage, setCatchMessage] = useState('');
    let catchedPokemonNumber = null;
    if (isLocalStorageAccessible()) {
        catchedPokemonNumber = JSON.parse(
            localStorage.getItem('pokemonMaster') || '{}'
        );
    }
    const {
        isLoading,
        isError,
        error,
        data: selectedPokemon,
    } = useQuery({
        queryKey: ['pokemons', selected],

        refetchOnWindowFocus: false,
        queryFn: () =>
            axios
                .get(`https://pokeapi.co/api/v2/pokemon/${selected}`)
                .then((res) => {
                    return res.data;
                }),
    });

    const animation = () => {
        setIsAnimationActive(true);
        setTimeout(() => {
            setIsAnimationActive(false);
        }, 3000);
    };
    if (isLoading) return 'Loading...';

    if (isError && error instanceof Error)
        return 'An error has occurred: ' + error.message;

    return (
        <StyledPokemonPreview>
            <div className="button-container">
                <button
                    type="button"
                    onClick={() => {
                        pokemonCatch(selectedPokemon.name, selected).then(
                            (result) => {
                                setCatchMessage(result);
                                if (result === 'catched') {
                                    setLogedUser(
                                        JSON.parse(
                                            localStorage.getItem(
                                                'pokemonMaster'
                                            ) || '[]'
                                        )
                                    );
                                }
                            }
                        );

                        animation();
                    }}
                    disabled={catchedPokemonNumber?.pokemons.length >= 9}
                >
                    <img
                        src="/pokeball.png"
                        alt="pokeball"
                        className={
                            catchedPokemonNumber?.pokemons.length >= 9
                                ? 'pokeball-inactive'
                                : isAnimationActive
                                ? 'pokeball-spining'
                                : 'pokeball'
                        }
                    />
                </button>
            </div>
            <div className="preview-container">
                <img
                    src={`https://unpkg.com/pokeapi-sprites@2.0.4/sprites/pokemon/other/dream-world/${selected}.svg`}
                    alt={`pokemon - ${selectedPokemon.name}}`}
                    className="preview-image"
                />
                <div className="pokemon-preview-name">
                    {catchMessage === 'catched' && (
                        <div className="catched-image">
                            <img
                                src="/greenCircle.png"
                                className="outer-image"
                                alt="green circle"
                            />
                            <img
                                src="/greenClear.png"
                                className="inner-image"
                                alt="green clear icon"
                            />
                        </div>
                    )}
                    <strong>{selectedPokemon.name}</strong>
                    {!isSinglePokemon && (
                        <Link to={`pokemon/${selected}`}>
                            <button type="button">
                                <img src="preview.png" alt="arrow icon " />
                            </button>
                        </Link>
                    )}
                </div>
                <div className="stats-abilities">
                    <hr />
                    <div className="preview-stats">
                        <ul>
                            <li>height: {selectedPokemon.height}</li>
                            <li>weight: {selectedPokemon.weight}</li>
                            <li>abilites:</li>
                        </ul>
                    </div>
                    <div className="preview-abilities">
                        {selectedPokemon.abilities?.map(
                            (pokemon: SelectedAbility) => {
                                return (
                                    <div
                                        className="ability"
                                        key={pokemon?.ability?.name}
                                    >
                                        {pokemon?.ability?.name}
                                    </div>
                                );
                            }
                        )}
                    </div>
                </div>
                <PreviewMessage
                    catchedPokemonNumber={catchedPokemonNumber?.pokemons.length}
                    catchMessage={catchMessage}
                />
            </div>
            {isSinglePokemon && (
                <div className="selected-id">{selectedPokemon.id}</div>
            )}
        </StyledPokemonPreview>
    );
};

export default PokemonPreview;
