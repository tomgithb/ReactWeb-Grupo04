import React, { useState, useEffect } from "react";
import { useFormik } from 'formik';
import api from "../../service/api";


import "./style.css"


/* function cadastrarProduto() {
  api
    .post(`api/v1/produtos`, {
      auth: {
        username: 'wellington',
        password: 'batatafrita'
      },
      //O que vai ser passado na request, tipo dados e headers
    })
    .then((response) => {
      if (response.status === 201) {
        //O que vai acontecer se der tudo certo
      }
    })
    .catch((error) => {
      // O que vai se der tudo errado
    });
} */

/*
*  VALIDAÇÃO DE CAMPOS DO FORMULARIO DE CADASTRO DE PRODUTO
*
* Enviar dados para API
*/

const validate = values => {
  const errors = {};
  if (!values.produto) {
    errors.produto = 'Nome não pode ficar em branco. O campo deve ser preenchido!';
  } else if (values.produto.length < 4) {
    errors.produto = 'Nome muito curto.';
  } else if (values.produto.length > 40) {
    errors.produto = 'Nome muito grande.';
  }


  if (!values.descricao) {
    errors.descricao = 'Descrição não pode ficar em branco. O campo deve ser preenchido!';
  } else if (values.descricao.length < 5) {
    errors.descricao = 'Sua descrição está muito curta.';
  } else if (values.descricao.length > 75) {
    errors.descricao = 'Sua descrição está muito grande.';
  }


  if (!values.estoque) {
    errors.estoque = 'Valor mínimo permitido é de 1 produto no estoque.';
  } else if (values.estoque < 0) {
    errors.estoque = "O estoque não pode ter valor negativo";
  }

  if (values.garantia < 0) {
    errors.garantia = "A garantia não pode ter valor negativo";
  }


  var dataAtual = new Date();
  var data = new Date(values.fabricacao);

  /*   console.log(dataAtual);
    console.log(data);
   */
  if (!values.fabricacao) {
    errors.fabricacao = 'A data não pode ficar em branco ou ser uma data futura.';

  } else if (data > dataAtual) {
    errors.fabricacao = "Data inválida, Fabricação não pode estar no futuro!";

  }
  if (!values.preco) {
    errors.preco = 'O preço não pode ficar em branco.';
  } else if (values.preco < 0) {
    errors.preco = "O preço não pode ter valor negativo.";
  } else if (values.preco > 99999.99) {
    errors.preco = "O preço não pode ser tão alto.";
  }

  return errors;
};




/*
*  FUNÇÃO DO FORMULARIO DE CADASTRO DE PRODUTO
*/
function FormularioProduto({ produto, setProduto, descricao, setDescricao, estoque, setEstoque, fabricacao, setFabricacao, garantia, setGarantia, preco, setPreco, categoria, setCategoria, salvarRegistro }) {


  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    api
      .get(`api/v1/categorias`)
      .then((response) => {
        if (response.status === 200) {
          setCategorias(response.data);
        }
      })
      .catch((error) => {
        alert(error.message);
      });

  }, []);


  const formik = useFormik({
    initialValues: {
      produto: '',
      descricao: '',
      estoque: '',
      fabricacao: '',
      garantia: '',
      preco: '',
    },

    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });


  return (
    <main><h1>Cadastro de produto</h1>
      <form className="CadastroProduto" onSubmit={formik.handleSubmit}>
        <label htmlFor="produto">Nome do produto <spam id="alerta">*</spam></label>
        <input
          id="produto"
          nome="produto"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.produto}
        />
        {formik.touched.produto && formik.errors.produto ? <div class="error">{formik.errors.produto}</div> : null}

        <label htmlFor="descricao">Descrição <spam id="alerta">*</spam></label>
        <input
          id="descricao"
          nome="descricao"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.descricao}
        />
        {formik.touched.descricao && formik.errors.descricao ? <div class="error">{formik.errors.descricao}</div> : null}


        <div id="div-meio">
          <div class="esquerda">
            <label htmlFor="estoque">Qtd em estoque <spam id="alerta">*</spam></label>
            <input
              id="estoque"
              nome="estoque"
              type="number"
              onkeypress="return event.charCode >= 48"
              min="1"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.estoque}
            />
            {formik.touched.estoque && formik.errors.estoque ? <div class="error">{formik.errors.estoque}</div> : null}



          </div>
          <div class="direita">
            <label htmlFor="fabricacao">Data de fabricação <spam id="alerta">*</spam></label>
            <input
              id="fabricacao"
              nome="fabricacao"
              type="date"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fabricacao}
            />
            {formik.touched.fabricacao && formik.errors.fabricacao ? <div class="error">{formik.errors.fabricacao}</div> : null}

          </div>
        </div>
        <div id="div-meio">
          <div class="esquerda">
            <label htmlFor="garantia">Garantia (meses) <spam id="alerta">*</spam></label>
            <input
              id="garantia"
              nome="garantia"
              type="number"
              onkeypress="return event.charCode >= 48"
              min="0"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.garantia}
            />
            {formik.touched.garantia && formik.errors.garantia ? <div class="error">{formik.errors.garantia}</div> : null}
          </div>
          <div class="direita">
            <label htmlFor="preco">Preço unitário <spam id="alerta">*</spam></label>
            <input
              id="preco"
              nome="preco"
              type="number"
              placeholder="R$ 00.00"
              min="0.01"
              step="0.01"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.preco}
            />
            {formik.touched.preco && formik.errors.preco ? <div class="error">{formik.errors.preco}</div> : null}
          </div>
        </div>



        <label>Categoria <spam id="alerta">*</spam></label>
        <select
          nome="categoria"
          type="dropdown"
        >
          <option name="test">  </option>
          {categorias.length === 0
            ? ""
            : categorias
              .map((categoria) => {
                return (
                  <option value={categoria.id}>{categoria.nome}</option>
                );
              })}

        </select>


        <input id="botao" type='submit' nome="enviar" value="CADASTRAR PRODUTO" />


      </form ></main>
  );
}

export default FormularioProduto;
