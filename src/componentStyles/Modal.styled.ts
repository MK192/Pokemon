import styled from 'styled-components';
export const StyledModal = styled.div`
    .modal {
        padding: 30px;
        max-height: 90%;
        height: 60rem;
        overflow: auto;
        width: 80%;
        max-width: 90%;
        min-width: 200px;
        font-size: 1.6rem;
        min-height: 150px;
        display:flex;
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
    .title-and-close {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
        button {
            border-radius: 50%;
            height: 30px;
            width: 30px;
            border: 2px solid rgba(65, 65, 65, 0.15);
            color: #989898;
            background-color: white;
            cursor: pointer;
        }
    }

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
        width: 40rem;
        height:auto;
        position:absolute;
        top:22%;
        left:27%;
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
        button{
            height: 4.8rem;
            width:8rem;
            display: flex;
           justify-content: center; 
        }
      
       }
    
   
   
`;
