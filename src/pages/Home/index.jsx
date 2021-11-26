import React, {useEffect, useState} from 'react';

import api from '../../service/api';

import CardProduto from "../../components/CardProduto";

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
    );
}

export default Home;