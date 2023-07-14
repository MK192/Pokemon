import styled from 'styled-components';
export const StyledPokemonCard = styled.div`
  .pokemon-card {
    display: flex;
    background-color: white;
    padding-right: 15px;
    flex: 0 0 calc(50% - 20px);
    height: 110px;
    margin: 8px;
    align-items: center;
    //height: 45%;
    border: 1px solid #f2f2f2;
    box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    //min-height: 90px;
    font-size: 16px;

    .pokemon-id {
      margin-left: auto;
      border: 1px solid #fafbfd;
      background-color: #fafbfd;
      width: 20px;
      height: 20px;
      text-align: center;
      border-radius: 50%;
      box-shadow: 0px -2px 2px 0px rgba(0, 0, 0, 0.09);
    }
  }
  img {
    width: 20%;

    object-fit: contain;
    object-position: left;
  }
`;
