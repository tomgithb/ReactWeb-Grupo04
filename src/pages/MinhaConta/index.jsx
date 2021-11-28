import React from "react";

import { ContainerCards } from "../../components/MenuMinhaConta/cards";
import "./style.css"

function MinhaConta() {
    return (
        <main className="container-minha-conta">
            <div>
                <h1>Inserir a página minha conta aqui</h1>
            </div>

            <div className="corpo">

                <div className="lateral">

                    <ContainerCards onClick={() => alert('Ops! Você clicou.')}>

                        <img src="./img/user.png" className="imagem" alt="Ícone de usuário" />

                        <div className="texto">
                            <h3>Cadastro</h3>
                            <p>Alterar as informações pessoais e de endereço</p>
                        </div>
                    </ContainerCards>



                    <ContainerCards onClick={() => alert('Ops! Você clicou.')}>

                        <img src="./img/compras.png" className="imagem" alt="Ícone de um carrinho" />

                        <div className="texto">
                            <h3>Compras</h3>
                            <p>Visualizar pedidos realizados</p>
                        </div>
                    </ContainerCards>


                    <ContainerCards onClick={() => alert('Ops! Você clicou.')}>

                        <img src="./img/vendas.png" className="imagem" alt="Símbolo de uma mão com uma seta subindo na diagonal" />

                        <div className="texto">
                            <h3>Vendas</h3>
                            <p>Visualizar vendas realizadas</p>
                        </div>
                    </ContainerCards>


                    <ContainerCards onClick={() => alert('Ops! Você clicou.')}>

                        <img src="./img/cadastrarProduto.png" className="imagem" alt="Símbolo de uma mão segurando uma caixa aberta" />

                        <div className="texto">
                            <h3>Cadastrar produtos</h3>
                            <p>Cadastrar novos produtos para venda</p>
                        </div>
                    </ContainerCards>


                    <ContainerCards onClick={() => alert('Ops! Você clicou.')}>

                        <img src="./img/cadastrarCategoria.png" className="imagem" alt="Símbolo de uma lista" />

                        <div className="texto">
                            <h3>Cadastrar categorias</h3>
                            <p>Cadastrar novas categorias</p>
                        </div>
                    </ContainerCards>

                </div>


                <div><h2>Cantinho do Wellington</h2></div>

            </div>
        </main >
    );
}

export default MinhaConta;