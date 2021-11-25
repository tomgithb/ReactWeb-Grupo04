import React from "react";
import { useFormik } from 'formik';

import "./style.css"

/*
*  VALIDAÇÃO DE CAMPOS DO FORMULARIO DE CADASTRO DE PRODUTO
*
* Falta verificar corretamente as quantidades que tem que ser maiores de zero e positivas. Verificar se é numeral que está digitado também.
*/

const validate = values => {
  const errors = {};
  if (!values.produto) {
    errors.produto = 'Nome não pode ficar em branco. O campo deve ser preenchido!';
  } else if (values.produto.length > 4) {
    errors.produto = 'Nome muito curto.';
  }

  if (!values.descricao) {
    errors.descricao = 'Descrição não pode ficar em branco. O campo deve ser preenchido!';
  } else if (!values.descricao.length > 5) {
    errors.descricao = 'Sua descrição está muito curta.';
  }

  if (!values.estoque) {
    errors.estoque = 'A quantidade em estoque não pode ficar em branco.';
  }

  if (!values.fabricacao) {
    errors.fabricacao = 'A data não pode ficar em branco ou ser uma data futura.';
  }


  /*   if (!values.garantia) {
      errors.garantia = 'A garantia não pode ficar em branco.';
    } */

  if (!values.preco) {
    errors.preco = 'O preço não pode ficar em branco.';
  }

  return errors;
};


/*
*  FUNÇÃO DO FORMULARIO DE CADASTRO DE PRODUTO
*/
function FormularioProduto({ produto, setProduto, descricao, setDescricao, estoque, setEstoque, fabricacao, setFabricacao, garantia, setGarantia, preco, setPreco, categoria, setCategoria, salvarRegistro }) {

  const formik = useFormik({
    initialValues: {
      produto: '',
      descricao: '',
      estoque: '',
      fabricacao: '',
      garantia: '',
      preco: '',
      //categoria: ' ',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });



  return (
    <form className="CadastroProduto" onSubmit={formik.handleSubmit}>

      <label htmlFor="produto">Nome do produto <spam id="alerta">*</spam></label>
      <input
        type="text"
        id="produto"
        nome="produto"
        onChange={formik.handleChange}
        value={formik.values.produto}
      />
      {formik.errors.produto ? <div class="error">{formik.errors.produto}</div> : null}

      <label htmlFor="descricao">Descrição <spam id="alerta">*</spam></label>
      <input
        type="text"
        id="descricao"
        nome="descricao"
        onChange={formik.handleChange}
        value={formik.values.descricao}
      />
      {formik.errors.descricao ? <div class="error">{formik.errors.descricao}</div> : null}


      <div id="div-meio">
        <div>
          <label htmlFor="estoque">Qtd em estoque <spam id="alerta">*</spam></label>
          <input
            type="number"
            id="estoque"
            nome="estoque"
            onkeypress="return event.charCode >= 48"
            min="1"
            onChange={formik.handleChange}
            value={formik.values.estoque}
          />
          {formik.errors.estoque ? <div class="error">{formik.errors.estoque}</div> : null}



        </div>
        <div>
          <label htmlFor="fabricacao">Data de fabricação <spam id="alerta">*</spam></label>
          <input
            type="date"
            id="fabricacao"
            nome="fabricacao"
            onChange={formik.handleChange}
            value={formik.values.fabricacao}
          />
          {formik.errors.fabricacao ? <div class="error">{formik.errors.fabricacao}</div> : null}

        </div>
      </div>
      <div id="div-meio">
        <div>
          <label htmlFor="garantia">Garantia (meses) <spam id="alerta">*</spam></label>
          <input
            type="number"
            id="garantia"
            nome="garantia"
            onkeypress="return event.charCode >= 48"
            min="0"
            onChange={formik.handleChange}
            value={formik.values.garantia}
          />
          {formik.errors.garantia ? <div class="error">{formik.errors.garantia}</div> : null}

          <label htmlFor="preco">Preço unitário <spam id="alerta">*</spam></label>
          <input
            type="number"
            id="preco"
            nome="preco"
            placeholder="R$ 00.00"
            min="0.01"
            step="0.01"
            onChange={formik.handleChange}
            value={formik.values.preco}
          />
          {formik.errors.preco ? <div class="error">{formik.errors.preco}</div> : null}
        </div>
      </div>
      <label>Categoria <spam id="alerta">*</spam></label>
      <select type="dropdown"
        nome="categoria">
        <option value="teste">Opção teste 1</option>
        <option value="teste">Opção teste 2</option>
      </select>


      <input id="botao" type='submit' nome="enviar" value="CADASTRAR PRODUTO" />


    </form >
  );
}

export default FormularioProduto;
