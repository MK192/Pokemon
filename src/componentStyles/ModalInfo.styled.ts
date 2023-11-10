import styled from 'styled-components';
export const StyledModalInfo = styled.div`
    justify-content: flex-start;
    align-self: center;
    background: #f8f8f8;
    padding: 2.5rem 4rem;
    width: 100%;
    margin-top: 1.5rem;
    margin-bottom: 10rem;
    text-align: center;
    height: 14rem;
    border-radius: 15px;

    .message-container-1 {
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 3rem;
        .catched-time {
            display: flex;
            gap: 4rem;
            justify-content: center;
        }
        strong {
            display: block;
            font-size: 2rem;
            padding: 0;
        }
    }

    .message-container-2 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 3rem;
    }
    .message-container-3 {
        .empty-pokestorage {
            line-height: 16.41px;

            margin: auto;
            margin-top: 20px;
        }
    }

    //responsive

    @media (max-width: 915px) {
        .message-container-1 {
            .catched-time {
                flex-direction: column;

                gap: 1rem;
            }
        }
    }
    @media (max-width: 650px) {
        height: 2rem;
        background: transparent;
        margin-top: 0px;
        padding-top: 5px;
        margin-bottom: 10px;
        .message-container-1 {
            align-self: start;
            .catched-time {
                display: none;
            }
            strong {
                margin-right: auto;
                border-bottom: 2px solid gray;
            }
        }

        .message-container-2 {
            display: none;
        }
        .message-container-3 {
            display: none;
        }
    }
`;
