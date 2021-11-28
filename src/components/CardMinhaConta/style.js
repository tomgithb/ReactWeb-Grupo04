import styled from "styled-components";

export const ContainerCards = styled.button`
  width: 100%;
  min-height: 4rem;
  min-width: 15.625rem;
  height: fit-content;
  padding: 0.5rem 0.75rem;

  display: flex;
  align-items: center;

  border: none;
  border-radius: 0.5rem;
  background-color: var(--cor-caixa-texto);

  transition: background-color 0.8s;
  cursor: pointer;

  &.card-ativo {
    background: var(--cor-fundo-escuro-alternativo);
    color: var(--cor-texto-claro);

    .imagem {
      -webkit-filter: invert(100%);
      filter: invert(100%);
    }
  }

  &:hover {
    background: var(--cor-fundo-escuro-alternativo);
    color: var(--cor-texto-claro);
  }

  .texto {
    width: 100%;
    margin-left: 2%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  }

  .imagem {
    margin: 0rem 0.5rem;
    width: 2rem;
    height: 2rem;
    transition: filter 0.4s;
  }

  .imagem:hover {
    -webkit-filter: invert(100%);
    filter: invert(100%);
  }

  @media screen and (max-width: 790px) {
    width: 4rem;
    height: 4rem;
    margin-right: 1rem;
    display: flex;
    flex-direction: row;
    min-width: auto;
    justify-content: space-around;

    .texto {
      display: none;
    }

    .imagem {
      width: 40%;
      height: 40%;
    }
  }
`;
