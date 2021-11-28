import React, { useContext } from "react";
import { CredenciaisContext } from "../../context/credenciais";

import api from "../../service/api";

import { CardContainer } from "./style";

function CardProduto({ produto }) {
  const { credenciais } = useContext(CredenciaisContext);

  async function handleComprar() {
    if (
      (credenciais.login === null && credenciais.senha === null) ||
      (credenciais.login === undefined && credenciais.senha === undefined)
    ) {
      alert("Realize login antes de comprar itens");
      return;
    } else {
      let carrinho = await getCarrinho();
      if (carrinho.length === 0) {
        console.log("Criar");
        criaPedido();
      } else {
        buscaProdutoCarrinho(carrinho);
      }
    }
  }

  function buscaProdutoCarrinho(carrinho) {
    let constaVendedor = false;
    carrinho.forEach((pedido) => {
      if (pedido.vendedor.id === produto.vendedor.id) {
        constaVendedor = true;
        let atualizado = null;
        pedido.listaItemPedido.forEach((itemPedido) => {
          if (itemPedido.produto.id === produto.id) {
            if (itemPedido.produto.qtdEstoque > itemPedido.quantidade) {
              itemPedido.quantidade++;
              atualizaCarrinho(pedido);
              atualizado = true;
            } else {
              alert("Estoque insuficiente");
              atualizado = false;
            }
          }
        });

        if (atualizado) {
          return true;
        } else if (atualizado === null || atualizado === undefined) {
          let itemPedido = {
            quantidade: 1,
            produto: {
              id: produto.id,
            },
          };
          pedido.listaItemPedido.push(itemPedido);
          atualizaCarrinho(pedido);
        } else {
          return false;
        }
      }
    });
    if (!constaVendedor) {
      criaPedido();
    }
  }

  function criaPedido() {
    let pedido = {
      fretePedido: 0,
      vendedor: {
        id: produto.vendedor.id,
      },
      listaItemPedido: [
        {
          quantidade: 1,
          produto: {
            id: produto.id,
          },
        },
      ],
    };
    api
      .post(`api/v1/pedidos`, pedido, {
        headers: {
          "Content-Type": "application/json",
        },
        auth: {
          username: credenciais.login,
          password: credenciais.senha,
        },
      })
      .then(() => {
        alert("Pedido criado com sucesso!");
      })
      .catch((error) => {
        alert(error.response.data.listaErros[0]);
      });
  }

  function atualizaCarrinho(pedido) {
    api
      .put(`api/v1/pedidos/${pedido.id}`, pedido, {
        headers: {
          "Content-Type": "application/json",
        },
        auth: {
          username: credenciais.login,
          password: credenciais.senha,
        },
      })
      .then(() => {
        alert("Pedido atualizado com sucesso!");
      })
      .catch((error) => {
        alert(error.response.data.listaErros[0]);
      });
  }

  async function getCarrinho() {
    try {
      const response = await api.get(`api/v1/usuarios/carrinho`, {
        auth: {
          username: credenciais.login,
          password: credenciais.senha,
        },
      });
      return response.data;
    } catch (error) {
      return [];
    }
  }

  return (
    <CardContainer id={"prod" + produto.id}>
      <img src={produto.urlFoto} alt="Seila" />
      <div className="card-info">
        <span className="card-titulo">{produto.nome}</span>
        <span className="card-descricao">{produto.descricao}</span>
        <span className="card-preco">R$ {produto.precoUnitario}</span>
      </div>
      <button
        className="card-button"
        onClick={() => {
          handleComprar();
        }}
      >
        Comprar
      </button>
    </CardContainer>
  );
}

export default CardProduto;
