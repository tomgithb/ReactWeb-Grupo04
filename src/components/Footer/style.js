import styled from 'styled-components';

export const Rodapé = styled.footer`

    padding: 0 5%;
    height: var(--tamanho-footer);
    width: 100%;
    background-color: #01091D;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    gap: 1rem;


.direitos-de-uso {  
    font-family: 'Montserrat', sans-serif;
    font-size: var(--tamanho-fonte-footer);
    color: #fff;
}

.logo-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
}
.logo-footer > img {
    height: 3rem;
}


/*MEDIA QUERIES*/

@media only screen and (max-width: 500px) {
    
        padding: 1rem 5%;
        flex-direction: column;
        justify-content: center;
    

        .direitos-de-uso {
        text-align: center;
    }
}


`;