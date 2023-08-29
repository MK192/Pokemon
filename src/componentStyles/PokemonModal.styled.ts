import styled from 'styled-components';
export const StyledPokemonModal = styled.div`

display:flex;


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

    .right-side-modal{
        overflow: hidden;
       align-self:start;
        width: 50%;
        height: 50rem;
        display:flex;
        flex-direction:column;
        align-items:center;
        position:relative;

        .big-pokeball{      
        width: 45rem;
        height:auto;
        position:absolute;
        top:19%;
        left:22%;
        z-index:1;
       
       
        }
       .button-container{
        display:flex;
        flex-direction:column;
        z-index:1000;
         margin-top:auto ;
            button{
             margin-bottom:35%;
            
            }
       }
        
    }

    
    .exit-button{
      margin-top:auto ;
      z-index:1000;
      margin-bottom:4rem;
        button{
            height: 4.8rem;
            width:8rem;
            display: flex;
           justify-content: center; 
        }
      
       }
    
   
   
`;
