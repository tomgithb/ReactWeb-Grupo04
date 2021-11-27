import React, {useEffect, useState} from 'react';

import api from '../../service/api';

import Subheader from '../../components/Subheader';
import CardProduto from "../../components/CardProduto";
import Subfooter from '../../components/Subfooter';
import Footer from '../../components/Footer';

import './style.css';

function Home() {
    const [produtos, setProdutos] = useState([]);
    
    useEffect(() => {
      api
        .get(`api/v1/produtos`)
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
        <main className="home">
        {
        produtos.length === 0
            ? ""
            : produtos
                .map((produto) => {
                  return (
                    <CardProduto key={produto.id} produto={produto} />
                  );
                })}
        </main>
        <Subfooter />
        <Footer />
        </>
    );
}

export default Home;