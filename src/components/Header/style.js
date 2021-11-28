import styled from 'styled-components';

export const BarraPesquisa = styled.form`


	padding: 0 1rem;
	max-width: 46rem;
	width: 100%;
	height: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;

	font-size: var(--tamanho-fonte-forms);


/* Esconder label, mas manter acessibilidade */
label {
	position: absolute;
    height: 1px;
    width: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip-path: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
}

input {
	padding: 0.6rem;
	max-width: 42rem;
	width: 100%;
	border: none;
    border-radius: .25rem;
	outline: 0;
    font-size: var(--tamanho-fonte-forms);
}

.lupa-botao {
	cursor: pointer;
	background-color: transparent;

	color: #ffffff;
	border: none;
}

.lupa {
	width: var(--tamanho-fonte-forms);
	height: var(--tamanho-fonte-forms);
}
.lupa:hover {
	filter: invert(1%) sepia(74%) saturate(4131%) hue-rotate(332deg) brightness(95%) contrast(95%);
}


@media only screen and (max-width: 900px) {
    

		padding: 0;
		max-width: auto;
		order: 3;
	

	input {
		max-width: auto;
        font-size: 1rem;
    }
}    

`;



