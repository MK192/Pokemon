import styled from 'styled-components';
export const StyledPokemonSingle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .background-pokemon-image {
    top:9%;
    height: 88vh;
    opacity: 5%;
    position: absolute;
    z-index: 1;
  }
  .pokemon-single-container {
    width: 50rem;

    margin-top: 6rem;
    z-index: 1000;
  }
  .fetch-time{
    margin-top:5rem;
    font-size:1.6rem;
    font-weight:400;
    span{
        color:#969696
    }
  }
`;
