import styled from "styled-components";

export const BotaoVermelho = styled.button`
  cursor: pointer;

  font-size: var(--tamanho-fonte-buttons);
  color: var(--cor-texto-claro);

  padding: 0.5rem 2rem;
  border-radius: 0.5rem;
  border: none;

  background-color: var(--cor-fundo-vermelho);
  transition: background-color 0.4s;

  &:hover {
    background-color: var(--cor-fundo-vermelho-alternativo);
  }
`;
