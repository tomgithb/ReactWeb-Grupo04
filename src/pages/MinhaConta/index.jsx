import React from "react";

import CardMinhaConta from "../../components/CardMinhaConta";
import "./style.css";

function MinhaConta() {
  const cards = [
    {
      imagem: "./img/user.png",
      titulo: "Cadastro",
      descricao: "Alterar as informações pessoais e de endereço",
    },
    {
      imagem: "./img/compras.png",
      titulo: "Compras",
      descricao: "Visualizar pedidos realizados",
    },
    {
      imagem: "./img/vendas.png",
      titulo: "Vendas",
      descricao: "Visualizar vendas realizadas",
    },
    {
      imagem: "./img/cadastrarProduto.png",
      titulo: "Cadastrar produtos",
      descricao: "Cadastrar novos produtos para venda",
    },
    {
      imagem: "./img/cadastrarCategoria.png",
      titulo: "Cadastrar categorias",
      descricao: "Cadastrar novas categorias",
    },
  ];

  return (
    <main className="container-minha-conta">
      <div className="menu">
        <div className="lateral">
          {cards.length === 0
            ? ""
            : cards.map((card, index) => {
                return <CardMinhaConta key={index} informacoes={card} />;
              })}
        </div>

        <div className="container-principal">
          <h2>Cantinho do Wellington</h2>
        </div>
      </div>
    </main>
  );
}

export default MinhaConta;
