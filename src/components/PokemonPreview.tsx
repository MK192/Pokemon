import { useEffect, useState } from 'react';
import { useSelectedId } from '../context/SelectedPokemonContext';
import { StyledPokemonPreview } from '../componentStyles/PokemonPreview.styled';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { SelectedAbility } from '../types/types';
import { pokemonCatch, isCatched } from '../utils/functions';
import { isLocalStorageAccessible } from '../utils/functions';
import { useUserData } from '../context/UserContext';
import { UserData } from '../types/types';
import { format } from 'date-fns';

import axios from 'axios';
import PreviewMessage from './PreviewMessage';

type Props = {
    isSinglePokemon: boolean;
};
const PokemonPreview = ({ isSinglePokemon }: Props) => {
    const { setLogedUser } = useUserData();
    const { selected, setSelected } = useSelectedId();

    const [isPokemonCatched, setIsPokemonCatched] = useState(false);
    const [isAnimationActive, setIsAnimationActive] = useState(false);
    const [catchMessage, setCatchMessage] = useState('');
    const [catchedPokemon, setCatchedPokemon] = useState<UserData | null>(
        JSON.parse(localStorage.getItem('pokemonMaster') || '{}')
    );
    /*  const [pokemonId, setPokemonId] = useState(
        isLocalStorageAccessible()
            ? JSON.parse(localStorage.getItem('selected') || '')
            : 1
    );*/

    useEffect(() => {
        setSelected(1);
    }, []);

    /* pokemonId state and this useEffect is use to preserve selected pokemon
    id. Without saving selected id in localstorage data will be reverted to 
    default value (1).*/

    useEffect(() => {
        if (isLocalStorageAccessible()) {
            setSelected(JSON.parse(localStorage.getItem('selected') || '1'));
        }

        const userData = JSON.parse(
            localStorage.getItem('pokemonMaster') || '{}'
        );
        const catched = isCatched(selected, userData);
        setIsPokemonCatched(catched);
    }, [selected, setSelected, isPokemonCatched]);

    const isPokemonStorageFull =
        catchedPokemon?.pokemons && catchedPokemon?.pokemons.length >= 9;

    const {
        isLoading,
        isError,
        error,
        data: selectedPokemon,
        dataUpdatedAt,
    } = useQuery({
        queryKey: ['pokemons', selected],

        refetchOnWindowFocus: false,
        queryFn: () =>
            axios
                .get(`https://pokeapi.co/api/v2/pokemon/${selected}`)
                .then((res) => {
                    return res.data;
                }),
        staleTime: 100000000,
    });

    const animation = () => {
        setIsAnimationActive(true);
        setTimeout(() => {
            setIsAnimationActive(false);
        }, 3000);
    };
    if (isLoading) return <div>Loading...</div>;

    if (isError && error instanceof Error)
        return <div>An error has occurred: error.message</div>;

    return (
        <StyledPokemonPreview>
            <div className="button-container">
                {!isPokemonCatched && (
                    <button
                        type="button"
                        onClick={() => {
                            pokemonCatch(selectedPokemon.name, selected).then(
                                (result) => {
                                    setCatchMessage(result);
                                    if (result === 'catched') {
                                        setIsPokemonCatched(true);

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
                        disabled={isPokemonStorageFull ? true : false}
                    >
                        <img
                            src="/pokeball.png"
                            alt="pokeball"
                            className={
                                isPokemonStorageFull
                                    ? 'pokeball-inactive'
                                    : isAnimationActive
                                    ? 'pokeball-spining'
                                    : 'pokeball'
                            }
                        />
                    </button>
                )}
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
                        <Link
                            to={`pokemon/${selected}`}
                            state={selectedPokemon.name}
                        >
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
                    <div className="time-fetched">
                        Data fetched:{' '}
                        {format(dataUpdatedAt, 'dd MMM yy, H:mm:ss')}
                    </div>
                </div>
                <PreviewMessage
                    catchedPokemonNumber={catchedPokemon}
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
