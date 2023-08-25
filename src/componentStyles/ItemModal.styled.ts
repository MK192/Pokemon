import styled from 'styled-components';
interface BackgroundColor {
    pokemonName: string;
  }
export const StyledItemModal = styled.div<BackgroundColor>`
    border: 1px solid #f2f2f2;
    box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.0025);
    border-radius: 8px;
    width: 30%;
    height: 30%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background:${({pokemonName }) => pokemonName?'#FFFFF':'#F8F8f8'};
  
    gap:10px;
    position:relative;

    .remove-pokemon-button{
      background: none;
      border: none;
    }
    .remove-pokemon-image{
        position: absolute;
        top:-15px;
        right:-10px;
        height:32px;
        width: 30px; 
       cursor: pointer;
    }

    .free-slot-img{
      width: 50%;
      opacity:12%;
    }
    p{
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    text-align:center;
    width: 90%;
   
  }
`;
