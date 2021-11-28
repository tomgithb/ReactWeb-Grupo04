import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

import CardMinhaConta from "../../components/CardMinhaConta";
import FormularioUsuario from "../../components/FormularioUsuario";
import Vendas from "../../components/Vendas";
import Compras from "../../components/Compras";
import "./style.css";

import { CredenciaisContext } from '../../context/credenciais';

function MinhaConta() {
  const [escolha, setEscolha] = useState(1);
  const { credenciais, credenciaisCarregadas } = useContext(CredenciaisContext);
  const history = useHistory();

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

  useEffect(() =>{ 
    if(escolha === 4) {
      history.push('/cadastro-produto');
    }
    else if (escolha === 5) {
      history.push('/cadastro-categoria');
    }
  }, [escolha]);

  useEffect(() => {
    console.log(credenciaisCarregadas);
    if (credenciaisCarregadas) {
      if (credenciais.login === null && credenciais.senha === null) {
        history.push("/login");
      }
    }
  }, [credenciaisCarregadas]);
  

  return (
    <main className="container-minha-conta">
      <div className="menu">
        <div className="lateral">
          {cards.length === 0
            ? ""
            : cards.map((card, index) => {
                return <CardMinhaConta key={index} informacoes={card} setEscolha={setEscolha} index={index} escolha={escolha} />;
              })}
        </div>

        <div className="container-principal">
          {
            escolha === 1
            ? <FormularioUsuario />
            : (
                escolha === 2
              )
              ? <Compras />
              : (
                escolha === 3
              )
              ? <Vendas />
                : ""
          }
        </div>
      </div>
    </main>
  );
}

export default MinhaConta;
