import styled from 'styled-components';


export const ContainerCards = styled.button`
    width: 100%;
    min-height: 17%;
    height: fit-content;
    margin: 1.5rem 0rem;
    padding: 0.25rem 0.5rem;

    display: flex;
    align-items: center;
  
    border: none;
    border-radius: 0.5rem;
    background-color: var(--cor-caixa-texto);
   
    transition: background-color 0.8s;
    cursor: pointer;

      
    &:hover {
        background: var(--cor-fundo-escuro-alternativo);
     /*    background: radial-gradient(circle, rgba(60,66,80,1) 0%, rgba(1,9,29,1) 100%); */
        color: var(--cor-texto-claro); 
    } 

    .texto{
        width: 100%;
        margin-left: 2%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        text-align: left;
    }

    .imagem{
        margin: 0rem 0.5rem;
        width: 2rem;
        height: 2rem;
        transition: filter .4s;
    }

    .imagem:hover{
        -webkit-filter: invert(100%);
        filter: invert(100%);
    }


    @media screen and (max-width: 790px){
        width: 20%;
        height: 4rem;
        margin-right: 1rem;
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        .texto{
            display: none;
        }

        .imagem{
            width: 40%;
        }
   }


   @media screen and (max-width: 350px){
        width: 15%;
        height: 3rem;
        margin: 0.5rem;
   }

        .imagem{
            height: 40%;
        }

`

