import styled from 'styled-components';
export const StyledPokemonCard = styled.button`

  border: none;
  // next line is for Safari, because he create 2 lines on top and bottom of card
  background-color: transparent;

  .pokemon-card,
  .pokemon-card-selected {
    display: flex;
    background-color: white;
    height: 11.1rem;
    align-items: center;
    border: 1px solid #f2f2f2;
    box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    font-size: 16px;
    padding: 20px;
    

    width: 40rem;
  }

  .pokemon-card-selected {
    background-color: #e6e3fa;
    font-weight: 700;
  }

  .pokemon-id {
    margin-left: auto;
    border: 1px solid #fafbfd;
    background-color: #fafbfd;
   
    padding: 5px 8px;
    text-align: center;
    border-radius: 50%;
    box-shadow: 0px -2px 2px 0px rgba(0, 0, 0, 0.09);
    color: black;
  }
  .pokemon-name {
    margin-left: 15px;
    color: #292b29;
  }
  img {
    width: 70px;
    height: 70px;
    object-fit: contain;
    object-position: center;
  }
  
`;
