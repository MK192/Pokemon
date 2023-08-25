import 'react-toastify/dist/ReactToastify.css';

import { StyledItemModal } from '../componentStyles/ItemModal.styled';
import { PokemonsModal } from '../types/types';
import { removePokemon } from '../utils/functions';
import { useUserData } from '../context/UserContext';
import { ToastContainer, toast } from 'react-toastify';

type Props = {
    pokemon: PokemonsModal;
    index: number;
    setSelectedPokemonId: (selectedId: number) => void;
};
const ItemModal = ({ pokemon, index, setSelectedPokemonId }: Props) => {
    const { logedUser, setLogedUser } = useUserData();

    const showToastMessagePokemonRelease = () => {
        toast.success(`${pokemon.name} relased`, {
            position: toast.POSITION.TOP_RIGHT,
        });
    };

    return pokemon.name ? (
        <StyledItemModal
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
        </StyledItemModal>
    ) : (
        <StyledItemModal className="empty">
            <img
                src={'/onlyPokeball.png'}
                className="free-slot-img"
                alt="pokeball"
            />
        </StyledItemModal>
    );
};

export default ItemModal;
