import React, { useEffect, useState } from "react";

import api from "../../service/api";

import Subheader from "../../components/Subheader";
import CardProduto from "../../components/CardProduto";
import Subfooter from "../../components/Subfooter";
import Footer from "../../components/Footer";

import "./style.css";
import { useParams } from "react-router-dom";

function ProdutoCategoria() {
  const { id } = useParams();
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    api
      .get(`api/v1/categorias/${id}/produtos`)
      .then((response) => {
        if (response.status === 200) {
          setProdutos(response.data);
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);

  return (
    <>
      <Subheader />
      <main className="produto-categoria-container">
        <h1>{"Categoria: " + (produtos[0]?.categoria?.nome || "Nenhum Produto Encontrado :(")}</h1>
        <section className="produto-categoria-container-cards">
          {produtos.length === 0
            ? ""
            : produtos.map((produto) => {
                return <CardProduto key={produto.id} produto={produto} />;
              })}
        </section>
      </main>
      <Subfooter />
      <Footer />
    </>
  );
}

export default ProdutoCategoria;
