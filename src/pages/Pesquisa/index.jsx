import React, { useEffect, useState } from "react";

import api from "../../service/api";

import Subheader from "../../components/Subheader";
import CardProduto from "../../components/CardProduto";
import Subfooter from "../../components/Subfooter";
import Footer from "../../components/Footer";

import "./style.css";
import { useParams } from "react-router-dom";

function Pesquisa() {
  const { nome } = useParams();
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    api
      .get(`api/v1/produtos/${nome}`)
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
      <main className="pesquisa-container">
        <h1>Pesquisa: {nome}</h1>
        <section className="pesquisa-container-cards">
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

export default Pesquisa;
