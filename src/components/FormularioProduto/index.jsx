import React from "react";
import { useFormik } from 'formik';

import "./style.css"


function FormularioProduto({ produto, setProduto, descricao, setDescricao, estoque, setEstoque, fabricacao, setFabricacao, garantia, setGarantia, preco, setPreco, categoria, setCategoria, salvarRegistro }) {
  return (
    <form className="CadastroProduto" >

      <label>Nome do produto</label>
      <input
        type="text"
        nome="produto"

      />

      <label>Descrição</label>
      <input
        type="text"
        nome="descricao"

      />

      <label>Qtd em estoque</label>
      <input
        type="text"
        nome="estoque"

      />
      <label>Data de fabricação</label>
      <input
        type="text"
        nome="fabricacao"

      />
      <label>Garantia (meses)</label>
      <input
        type="text"
        nome="garantia"

      />

      <label>Preço unitário</label>
      <input
        type="text"
        nome="preco"

      />

      <label>Categoria</label>
      <select type="dropdown"
        nome="categoria">
        <option value="teste">Opção teste</option>
      </select>


      <input id="botao" type='submit' nome="enviar" value="CADASTRAR PRODUTO" />


    </form >
  );
}

export default FormularioProduto;
