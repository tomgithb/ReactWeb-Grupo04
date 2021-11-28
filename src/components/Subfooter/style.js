import styled from 'styled-components';

export const SubRodapé = styled.section`



    padding: 0 5%;
    height: var(--tamanho-subfooter);
    width: 100%;
    background-color: var(--cor-fundo-escuro-alternativo);
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    gap: 1rem;



.pagamentos {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;

    gap: 1rem;
}

.titulo-forma {
    width: 15rem;

    font-family: 'Montserrat', sans-serif;
    font-size: var(--tamanho-fonte-footer);
    text-align: center;
    color: var(--cor-texto-claro);
}

.certificados > img {
    max-width: 20rem;
    width: 100%;
    height: auto;
}

.pagamentos > img {
    max-width: 30rem;
    width: 100%;
    height: auto;
}

/* MEDIA QUERIES */

@media only screen and (max-width: 500px) {
   
        padding: 1rem 5%;
        flex-direction: column;
        justify-content: center;
    
}


`;