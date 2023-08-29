import 'react-toastify/dist/ReactToastify.css';

import { StyledModalPokemonCard } from '../componentStyles/ModalPokemonCard.styled';
import { PokemonsModal } from '../types/types';
import { removePokemon } from '../utils/functions';
import { useUserData } from '../context/UserContext';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';

type Props = {
    pokemon: PokemonsModal;
    index: number;
    setSelectedPokemonId: (selectedId: number) => void;
};
const ModalPokemonCard = ({ pokemon, index, setSelectedPokemonId }: Props) => {
    const { setLogedUser } = useUserData();
    const [count, setCount] = useState(0);
    const showToastMessagePokemonRelease = () => {
        toast.success(`${pokemon.name} relased`, {
            position: toast.POSITION.TOP_RIGHT,
        });
    };
    useEffect(() => {
        console.log(count);
    }, []);

    return pokemon.name ? (
        <StyledModalPokemonCard
            className="catched"
            pokemonName={pokemon?.name}
            onClick={() => setSelectedPokemonId(index)}
        >
            <button
                type="button"
                className="remove-pokemon-button"
                onClick={() => {
                    removePokemon(pokemon.id);
                    showToastMessagePokemonRelease();
                    setLogedUser(
                        JSON.parse(
                            localStorage.getItem('pokemonMaster') || '[]'
                        )
                    );
                }}
            >
                <img
                    src={'/x.png'}
                    className="remove-pokemon-image"
                    alt="x character"
                />
            </button>

            <img
                src={`https://unpkg.com/pokeapi-sprites@2.0.4/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                className="catched-img"
                alt={`image of catched pokemon ${pokemon.name}`}
            />

            <p>{pokemon.name}</p>
        </StyledModalPokemonCard>
    ) : (
        <StyledModalPokemonCard className="empty">
            <img
                src={'/onlyPokeball.png'}
                className="free-slot-img"
                alt="pokeball"
            />
        </StyledModalPokemonCard>
    );
};

export default ModalPokemonCard;
