import styled from 'styled-components';
export const StyledPokemonModal = styled.div`
    display: flex;

    .left-side-modal {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;

        padding: 10px;
        width: 50%;

        .catched-img {
            width: 100%;
            height: 80px;
        }
    }

    .right-side-modal {
        overflow: hidden;
        align-self: start;
        width: 50%;
        height: 50rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;

        .big-pokeball {
            width: 45rem;
            height: auto;
            position: absolute;
            top: 19%;
            left: 22%;
            z-index: 1;
        }
        .button-container {
            display: flex;
            flex-direction: column;
            gap: 10rem;
            z-index: 1000;
            margin-top: auto;
        }
    }

    .exit-button {
        //margin-top:auto ;
        z-index: 1000;
        margin-bottom: 20%;
        align-self: center;

        button {
            height: 4.8rem;
            width: 90%;
            display: flex;
            justify-content: center;
        }
    }

    // responsive

    @media (max-width: 650px) {
        flex-direction: column;
        .left-side-modal {
            gap: 15px;
            justify-content: center;
            padding: 10px;
            width: 100%;

            .catched-img {
                width: 100%;
                height: 80px;
            }
        }

        .right-side-modal {
            height: 30%;
            width: 100%;
            .button-container {
                margin-top: 20px;
                flex-direction: row;

                gap: 25%;
                button {
                    height: 4.8rem;
                    width: 24rem;
                }
                .exit-button {
                    button {
                        width: 8rem;
                    }
                }
            }
        }
        .big-pokeball {
            display: none;
        }
    }

    @media (max-width: 550px) {
        .right-side-modal {
            .button-container {
                margin-top: 10px;
                flex-direction: column;
                gap: 10px;
                button {
                    width: 100%;
                }
            }
        }
    }
`;
