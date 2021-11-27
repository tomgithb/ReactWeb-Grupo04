import React, { useState, useEffect, useContext } from "react";
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { CredenciaisContext } from '../../context/credenciais';


import api from "../../service/api";

import "./style.css"


/*
*  FUNÇÃO DO FORMULARIO DE CADASTRO DE PRODUTO
*/
function FormularioProduto() {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [estoque, setEstoque] = useState(0);
  const [fabricacao, setFabricacao] = useState('');
  const [garantia, setGarantia] = useState(0);
  const [preco, setPreco] = useState(0.00);
  const [categoria, setCategoria] = useState(0);
  const [categorias, setCategorias] = useState([]);
  const [fotoProduto, setFotoProduto] = useState('');
  const [fotoProdutoFileName, setFotoProdutoFileName] = useState('');
  const { credenciais } = useContext(CredenciaisContext);
  const history = useHistory();


  function cadastrarProduto() {
    let formData = new FormData();
    formData.append('file', fotoProduto);

    const produto = {
      nome: nome,
      descricao: descricao,
      qtdEstoque: +estoque,
      dataFabricacao: fabricacao,
      tempoGarantia: +garantia,
      precoUnitario: +preco,
      categoria: {
        id: +categoria
      }
    }
    console.log(produto);
    formData.append('produto', JSON.stringify(produto));
    console.log(formData);
    api
      .post(`api/v1/produtos`, formData, {
        headers: {
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`
        },
        auth: {
          username: credenciais.login,
          password: credenciais.senha
        },
        data: '[form]'
      })
      .then((response) => {
        if (response.status === 201) {
          alert("Produto Cadastrado com sucesso");
          limpaEstados();
        }
      })
      .catch((error) => {
        if(error?.response?.data.titulo === 'Recurso já existe no sistema'){
          alert("Usuário já possui outro produto com o mesmo nome!");
        }
      });
  }

  function limpaEstados() {
    setNome('');
    setDescricao('');
    setGarantia('');
    setEstoque('');
    setPreco('');
    setFabricacao('');
    setCategoria(0);
    setFotoProduto('');
    setFotoProdutoFileName('');
  }

  function handleSetNome(e) {
    setNome(e.target.value);
  }

  function handleSetDescricao(e) {
    setDescricao(e.target.value);
  }

  function handleSetEstoque(e) {
    setEstoque(e.target.value);
  }

  function handleSetFabricacao(e) {
    console.log(e.target.value)
    setFabricacao(e.target.value);
  }

  function handleSetGarantia(e) {
    setGarantia(e.target.value);
  }

  function handleSetPreco(e) {
    setPreco(e.target.value);
  }

  function handleSetCategoria(e) {
    setCategoria(e.target.value);
  }

  function handleSetFotoProduto(e) {
    setFotoProduto(e.target.files[0]);
    setFotoProdutoFileName(e.target.value);
  }

  useEffect(() => {
    if(credenciais.login == null && credenciais.senha == null) {
      history.push('/login');
    }
  }, [credenciais]);

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
      categoria: 0,
      "foto-produto": ''
    },

    validationSchema: Yup.object({
      produto: Yup.string().min(4, 'Nome deve conter no mínimo 4 caracteres').max(40, 'Nome deve conter no máximo 40 caracteres').required('Nome não pode ficar em branco. O campo deve ser preenchido!'),
      descricao: Yup.string().min(5, 'Descrição deve conter no mínimo 5 caracteres').max(75, 'Descrição deve conter no máximo 75 caracteres').required('Descrição não pode ficar em branco. O campo deve ser preenchido!'),
      estoque: Yup.number().min(1, 'Estoque não pode ter valor negativo').required('Estoque não pode ficar em branco. O campo deve ser preenchido!'),
      garantia: Yup.number().min(0, 'Garantia não pode ter valor negativo').required('Garantia não pode ficar em branco. O campo deve ser preenchido!'),
      fabricacao: Yup.date().max(new Date(), 'Data de fabricação não pode estar no futuro!').required('Data de fabricação não pode ficar em branco. O campo deve ser preenchido!'),
      categoria: Yup.number().min(1, 'Categoria não poder ficar em branco').required('Categoria não poder ficar em branco'),
      preco: Yup.number().min(0.01, 'Preço não pode ter valor negativo ou zero.').max(99999.99, 'Preço não pode ser tão alto').required('Preço não pode ficar em branco. O campo deve ser preenchido!'),
      "foto-produto": Yup.mixed().required('Foto do produto é obrigatória')
    })
  });


  return (
    <main className="container-cadastro-produto">

      <h1>Cadastro de produto</h1>

      <form className="cadastro-produto" onSubmit={(e) => {
        formik.handleSubmit(e)
        cadastrarProduto();
        }}
      >

        <label htmlFor="produto">
          Nome do produto
          <span id="alerta">*</span>
        </label>

        <input
          id="produto"
          name="produto"
          type="text"
          onChange={(e) => {
            handleSetNome(e);
            formik.handleChange(e);
          }}
          onBlur={formik.handleBlur}
          value={nome}
        />
        {formik.touched.produto && formik.errors.produto ? <div className="error">{formik.errors.produto}</div> : null}

        <label htmlFor="descricao">
          Descrição
          <span id="alerta">*</span>
        </label>

        <input
          id="descricao"
          name="descricao"
          type="text"
          onChange={(e) => {
            handleSetDescricao(e);
            formik.handleChange(e);
          }}
          onBlur={formik.handleBlur}
          value={descricao}
        />
        {formik.touched.descricao && formik.errors.descricao ? <div className="error">{formik.errors.descricao}</div> : null}


        <div id="div-meio">
          <div className="esquerda">
            <label htmlFor="estoque">
              Qtd em estoque
              <span id="alerta">*</span>
            </label>
            <input
              id="estoque"
              name="estoque"
              type="number"
              min="1"
              onChange={(e) => {
                handleSetEstoque(e);
                formik.handleChange(e);
              }}
              onBlur={formik.handleBlur}
              value={estoque}
            />
            {formik.touched.estoque && formik.errors.estoque ? <div className="error">{formik.errors.estoque}</div> : null}
          </div>

          <div className="direita">
            <label htmlFor="fabricacao">Data de fabricação <span id="alerta">*</span></label>
            <input
              id="fabricacao"
              name="fabricacao"
              type="date"
              onChange={(e) => {
                console.log(e.target.value)
                handleSetFabricacao(e);
                formik.handleChange(e);
              }}
              onBlur={formik.handleBlur}
              value={fabricacao}
            />
            {formik.touched.fabricacao && formik.errors.fabricacao ? <div className="error">{formik.errors.fabricacao}</div> : null}

          </div>
        </div>
        <div id="div-meio">
          <div className="esquerda">
            <label htmlFor="garantia">Garantia (meses) <span id="alerta">*</span></label>
            <input
              id="garantia"
              name="garantia"
              type="number"
              min="0"
              onChange={(e) => {
                handleSetGarantia(e);
                formik.handleChange(e);
              }}
              onBlur={formik.handleBlur}
              value={garantia}
            />
            {formik.touched.garantia && formik.errors.garantia ? <div className="error">{formik.errors.garantia}</div> : null}
          </div>
          <div className="direita">
            <label htmlFor="preco">Preço unitário <span id="alerta">*</span></label>
            <input
              id="preco"
              name="preco"
              type="number"
              placeholder="R$ 0.00"
              min="0.01"
              step="0.01"
              onChange={(e) => {
                handleSetPreco(e);
                formik.handleChange(e);
              }}
              onBlur={formik.handleBlur}
              value={preco}
            />
            {formik.touched.preco && formik.errors.preco ? <div className="error">{formik.errors.preco}</div> : null}
          </div>
        </div>

        <label htmlFor="categoria">
          Categoria
          <span id="alerta">*</span>
        </label>
        <select
          id="categoria"
          name="categoria"
          type="dropdown"
          onChange={(e) => {
            console.log(e.target.value)
            handleSetCategoria(e);
            formik.handleChange(e);
          }}
          onBlur={formik.handleBlur}
          value={categoria}
        >
          <option value='0'></option>
          {categorias.length === 0
            ? ""
            : categorias
              .map((categoria) => {
                return (
                  <option key={categoria.id} value={categoria.id}>{categoria.nome}</option>
                );
              })}
        </select>
        {formik.touched.categoria && formik.errors.categoria ? <div className="error">{formik.errors.categoria}</div> : null}

        <label htmlFor="foto-produto">
          Foto do Produto
          <span id="alerta">*</span>
        </label>
        <input
          type="file"
          name="foto-produto"
          id="foto-produto"
          onChange={(e) => {
            handleSetFotoProduto(e);
            formik.handleChange(e);
          }}
          onBlur={formik.handleBlur}
          value={fotoProdutoFileName}
        />
        {formik.touched["foto-produto"] && formik.errors["foto-produto"] ? <div className="error">{formik.errors["foto-produto"]}</div> : null}


        <input id="botao" type='submit' name="enviar" value="Cadastrar Produto" disabled={!(formik.isValid && formik.dirty)}/>

      </form>
    </main>
  );
}

export default FormularioProduto;
