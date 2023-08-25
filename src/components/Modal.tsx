import 'react-toastify/dist/ReactToastify.css';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { StyledModal } from '../componentStyles/Modal.styled';
import { isLocalStorageAccessible } from '../utils/functions';
import { PokemonsModal } from '../types/types';
import { useUserData } from '../context/UserContext';
import { relaseAllPokemons } from '../utils/functions';
import { ToastContainer, toast } from 'react-toastify';

import Button from './Button';
import ItemModal from './ItemModal';
import ModalInfo from './ModalInfo';

type Props = {
    children: JSX.Element | JSX.Element[] | React.ReactNode;
    title: string;
    setShowModal: (showModal: boolean) => void;
    domNode?: HTMLElement | Element | DocumentFragment | null;
};

const Modal = ({ setShowModal, domNode = document.body }: Props) => {
    const { logedUser, setLogedUser } = useUserData();

    const [catchedPokemon, setCatchedPokemon] = useState<PokemonsModal[]>([]);
    const [selectedPokemonId, setSelectedPokemonId] = useState<number | null>(
        null
    );
    const ref = useRef<HTMLDivElement>(null);

    const showToastMessage = () => {
        toast.success('All pokemons released !', {
            position: toast.POSITION.TOP_RIGHT,
        });
    };

    const checkOutsideClick = (event: MouseEvent) => {
        if (ref.current === event.target) {
            setShowModal(false);
        }
    };

    useEffect(() => {
        let catched = [];
        document.addEventListener('click', checkOutsideClick);
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

        return () => {
            document.removeEventListener('click', checkOutsideClick);
        };
    }, []);
    //console.log(catchedPokemon);
    return createPortal(
        <StyledModal>
            <div className="overlay" ref={ref}>
                <div className="modal">
                    <div className="left-side-modal">
                        {catchedPokemon?.map((pokemon, index) => {
                            return (
                                <ItemModal
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
                            src="./PokeballBig.png"
                            className="big-pokeball"
                            alt="big pokeball"
                        />
                        <div className="button-container">
                            {logedUser && logedUser?.pokemons.length > 0 ? (
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
                        </div>

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
                </div>
                <ToastContainer />
            </div>
        </StyledModal>,
        domNode ? domNode : document.body
    );
};

export default Modal;
