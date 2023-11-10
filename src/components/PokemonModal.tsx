import 'react-toastify/dist/ReactToastify.css';

import { useEffect, useState } from 'react';
import { StyledPokemonModal } from '../componentStyles/PokemonModal.styled';
import { isLocalStorageAccessible } from '../utils/functions';
import { PokemonsModal } from '../types/types';
import { useUserData } from '../context/UserContext';
import { relaseAllPokemons } from '../utils/functions';
import { ToastContainer, toast } from 'react-toastify';

import Button from './Button';
import ModalPokemonCard from './ModalPokemonCard';
import ModalInfo from './ModalInfo';
import Modal from './Modal';

type Props = {
    setShowModal: (showModal: boolean) => void;
};

const PokemonModal = ({ setShowModal }: Props) => {
    const { loggedUser, setLogedUser } = useUserData();

    const [catchedPokemon, setCatchedPokemon] = useState<PokemonsModal[]>([]);
    const [selectedPokemonId, setSelectedPokemonId] = useState<number | null>(
        null
    );

    const showToastMessage = () => {
        toast.success('All pokemons released !', {
            position: toast.POSITION.TOP_RIGHT,
        });
    };

    useEffect(() => {
        let catched = [];

        if (isLocalStorageAccessible()) {
            let storageObj = JSON.parse(
                localStorage.getItem('pokemonMaster') || '[]'
            );

            for (let i = 0; i < 9; i++) {
                catched.push(
                    storageObj.pokemons[i] ? storageObj.pokemons[i] : ''
                );
            }
            setCatchedPokemon(catched);
        }
    }, [loggedUser?.pokemons]);

    return (
        <Modal setShowModal={setShowModal}>
            <StyledPokemonModal>
                <div className="left-side-modal">
                    {catchedPokemon?.map((pokemon, index) => {
                        return (
                            <ModalPokemonCard
                                pokemon={pokemon}
                                key={index}
                                index={index}
                                setSelectedPokemonId={setSelectedPokemonId}
                            />
                        );
                    })}
                </div>
                <div className="right-side-modal">
                    <ModalInfo
                        catchedPokemon={catchedPokemon}
                        selectedPokemonId={selectedPokemonId}
                    />

                    <img
                        src="/PokeballBig.png"
                        className="big-pokeball"
                        alt="big pokeball"
                    />
                    <div className="button-container">
                        {loggedUser &&
                        loggedUser?.pokemons &&
                        loggedUser?.pokemons.length > 0 ? (
                            <Button
                                text="Release All"
                                icon={true}
                                borderColor="red"
                                buttonColor="#F8F8F8"
                                handleClick={() => {
                                    relaseAllPokemons();
                                    {
                                        showToastMessage();
                                    }
                                    setLogedUser(
                                        JSON.parse(
                                            localStorage.getItem(
                                                'pokemonMaster'
                                            ) || '[]'
                                        )
                                    );
                                }}
                            />
                        ) : null}
                        <div className="exit-button">
                            <Button
                                text="Exit"
                                icon={false}
                                borderColor="#292B29"
                                buttonColor="transparent"
                                handleClick={() => {
                                    setShowModal(false);
                                }}
                            />
                        </div>
                    </div>

                    <ToastContainer />
                </div>
            </StyledPokemonModal>
        </Modal>
    );
};

export default PokemonModal;
