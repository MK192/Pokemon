import styled from 'styled-components';
export const StyledModal = styled.div`
    .modal {
        padding: 30px;
        max-height: 90%;
        height: 60rem;
        overflow: hidden;
        width: 80%;
        max-width: 90%;
        min-width: 200px;
        font-size: 1.6rem;
        min-height: 150px;
       
        background-color: white;
        border-radius: 10px;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 100;
    }
    .overlay {
        background-color: hsla(0, 0%, 50.2%, 0.7);
        position: fixed;
        z-index: 1000;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
   
`;
