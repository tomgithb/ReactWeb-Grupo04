import React, { useState } from "react";
import axios from 'axios';
import "./style.css";


function Carrinho() {

    const [cep, setCep] = useState({ cep: '' });
    const [informacoes, setInformacoes] = useState({
        cep: '',
        logradouro: '',
        complemento: '',
        bairro: '',
        localidade: '',
        uf: '',
        ibge: '',
        gia: ''
    });
    const getInformacoes = (e) => {
        e.preventDefault();
        axios.get('http://viacep.com.br/ws/' + cep + '/json/')
            .then(response => {
                setInformacoes(response.data);
            });
    }
    const handlingCep = (e) => {
        setCep(e.target.value);
    }


    const [contador, setContador] = useState(0)

    function AumentarContador() {
        setContador(contador + 1);
    }
    function DiminuirContador() {
        if (contador > 1) {
            setContador(contador - 1);
        }
    }

    return (
        <main className="Container-carrinho">

            {/* COMEÇA AQUI MEU CARRINHO */}
            <div className="carrinho">
                <p>Meu carrinho</p>
            </div>
            <div className="Produtos">
                <div className="titulo-Itens">
                    <p>Produtos</p>
                    <p>Quantidade</p>
                    <p>Preço</p>
                </div>
                <div className="itens-produtos">
                    <div className="foto-nome">
                        <img src="./img/user.png" className="imagem" alt="Ícone de usuário" />
                        <p>Nome/Descrição</p>
                    </div>

                    <div className="button">
                        <button onClick={() => DiminuirContador()}> <h1>-</h1>  </button>
                        <p>{contador}</p>
                        <button onClick={() => AumentarContador()}> <h1>+</h1>  </button>
                        <button type="submit">Remover</button>
                    </div>
                    <div className="preco-altera">
                        <p>R$ altera</p>
                    </div>
                </div>
            </div>
            {/* COMEÇA AQUI O RESUMO DO PEDIDO */}

            <div className="Resumo-pedido" >

                <div className="titulo-resumo-pedido">
                    <p>Resumo do pedido</p>
                </div>

                <div className="produtos-total">
                    <p>x produtos</p>
                    <p> Total</p>
                </div>

                <div className="frete-valor">
                    <p>Frete</p>
                    <p>Valor frete</p>
                </div>

                <div className="prazo-dias">
                    <p>Prazo</p>
                    <p> x dias úteis</p>
                </div>
                <hr />
                <div className="Total">
                    <p>Total:</p>
                    <p> R$</p>
                </div>

                <div className="button-continuar">
                    <button><h1>Continuar</h1></button>
                </div>
            </div>


            {/* COMEÇA AQUI O CALCULA FRETE PRAZO */}
            <div className="calcula-frete-prazo">

                <div className="titulo-cfp">
                    <p>Calcula frete e prazo</p>
                </div>

                <div className="formulario-cep">
                    <form onSubmit={(e) => { getInformacoes(e) }}>
                        <label for="CEP">
                            <input type="text" onChange={(e) => { handlingCep(e) }} placeholder="Digite o CEP aqui" />
                            <button type="submit">ok!</button>
                        </label>
                        <a href="https://buscacepinter.correios.com.br/app/endereco/index.php?t" target="_blank">Não sei meu cep :( </a>
                    </form>
                    <div className="cpf-encontrado">
                        <p>Endereço encontrado: </p>
                        <p> {informacoes.logradouro}</p>
                        <p> {informacoes.bairro}  {informacoes['localidade']}  {informacoes['uf']}</p>
                    </div>
                </div>
            </div>
        </main>
    );
}



export default Carrinho;