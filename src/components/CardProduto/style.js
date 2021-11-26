import styled from 'styled-components';

export const CardContainer = styled.div`
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    
    width: 17.75rem;
    min-height: 28.25rem;
    height: fit-content;

    padding: 1rem;
    border-radius: .75rem;
    box-shadow: .5rem .5rem 1rem 0 rgba(0, 0, 0, .1);
    
    img {
        width: 100%;
    }

    .card-info {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .card-titulo,
        .card-preco {
            font-size: var(--tamanho-fonte-forms);
            font-weight: 500;
        }

        .card-descricao {
            font-size: calc(var(--tamanho-font-forms) - .25rem);
            text-align: justify;
            color: var(--cor-fundo-escuro);
            word-break: break-all;
        }

        .card-preco {
            color: var(--cor-texto-destacado-alternativo);
        }
    }

    .card-button {
        cursor: pointer;

        font-size: var(--tamanho-fonte-buttons);
        color: var(--cor-texto-claro);
        
        margin-top: 1rem;
        padding: .5rem 2rem;
        border-radius: .5rem;
        border: none;
        
        background-color: var(--cor-fundo-escuro);
        transition: background-color .4s;
        
        &:hover {
            background-color: var(--cor-fundo-escuro-alternativo);
        }
    }
`;