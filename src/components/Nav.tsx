import { StyledNav } from '../componentStyles/Nav.styled';
import { useUserData } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { capitalizeFirstLetter } from '../utils/functions';

import Modal from './Modal';
type Props = {
    backButtonEnabled: boolean;
    navText: string;
};
const Nav = ({ backButtonEnabled, navText }: Props) => {
    const { logedUser } = useUserData();
    const navigate = useNavigate();

    const [isModalActive, setIsModalActive] = useState(false);
    return (
        <StyledNav>
            {backButtonEnabled && (
                <img
                    src="/arrowLeft.png"
                    alt="white arrow head pointed left"
                    onClick={() => navigate('/')}
                />
            )}

            <div className="left-item">
                <span className="title">{capitalizeFirstLetter(navText)}</span>
            </div>
            {logedUser ? (
                <button
                    type="button"
                    className="catched-number"
                    onClick={() => setIsModalActive(true)}
                >
                    {logedUser.pokemons.length}
                </button>
            ) : null}

            {isModalActive && <Modal setShowModal={setIsModalActive} />}
        </StyledNav>
    );
};

export default Nav;
