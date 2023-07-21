import styled from 'styled-components';
export const StyledPokemonCard = styled.div`
  .pokemon-card,
  .pokemon-card-selected {
    display: flex;

    background-color: white;
    height: 110px;
    align-items: center;
    border: 1px solid #f2f2f2;
    box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    font-size: 16px;
    padding: 20px;
    margin: 5px;

    width: 400px;
  }

  .pokemon-card-selected {
    background-color: #e6e3fa;
    font-weight: 700;
  }
  .pokemon-id {
    margin-left: auto;
    border: 1px solid #fafbfd;
    background-color: #fafbfd;
    width: 20px;
    height: 20px;
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

    object-fit: contain;
    object-position: left;
  }
`;
