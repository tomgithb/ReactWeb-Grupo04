import "./style.css";
import { useState, useEffect, useContext } from "react";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";

import { CredenciaisContext } from "../../context/credenciais";

import api from "../../service/api";

function FormularioCategoria() {
  const [nome, setNome] = useState();
  const [descricao, setDescricao] = useState();
  const { credenciais, credenciaisCarregadas } = useContext(CredenciaisContext);
  const history = useHistory();

  function cadastrarCategoria(e) {
    e.preventDefault();

    const categoria = {
      nome: nome,
      descricao: descricao,
    };

    api
      .post(`api/v1/categorias`, categoria, {
        headers: {
          "Content-Type": `application/json`,
        },
        auth: {
          username: credenciais.login,
          password: credenciais.senha,
        },
      })
      .then((response) => {
        if (response.status === 201) {
          alert("Categoria cadastrada com sucesso");
          limpaEstados();
        }
      })
      .catch((error) => {
        if (error?.response?.data.titulo === "Recurso já existe no sistema") {
          alert("Categoria já consta no sistema!");
        } else {
          alert("Ocorreu um erro ao cadastrar a categoria");
        }
      });
  }

  function limpaEstados() {
    setNome("");
    setDescricao("");
  }

  function handleSetNome(e) {
    setNome(e.target.value);
  }

  function handleSetDescricao(e) {
    setDescricao(e.target.value);
  }

  useEffect(() => {
    console.log(credenciaisCarregadas);
    if (credenciaisCarregadas) {
      if (credenciais.login === null && credenciais.senha === null) {
        history.push("/login");
      }
    }
  }, [credenciaisCarregadas]);

  const formik = useFormik({
    initialValues: {
      nome: "",
      descricao: "",
    },

    validationSchema: Yup.object({
      nome: Yup.string().required("Nome da categoria não pode ficar em branco. O campo deve ser preenchido!"),
      descricao: Yup.string()
        .max(300, "Descrição deve conter no máximo 300 caracteres")
        .required("Descrição não pode ficar em branco. O campo deve ser preenchido!"),
    }),
  });

  return (
    <main className="container-categoria">
      <h1 className="text-cadastro-categoria">Cadastro de categoria</h1>
      <form
        className="formulario-categoria"
        onSubmit={(e) => {
          formik.handleSubmit(e);
          cadastrarCategoria(e);
        }}
      >
        <label htmlFor="nome">Nome da categoria</label>
        <input
          className="categoria-nome"
          type="text"
          name="nome"
          id="nome"
          placeholder="Digite categoria"
          onChange={(e) => {
            handleSetNome(e);
            formik.handleChange(e);
          }}
          onBlur={formik.handleBlur}
          value={nome}
        />
        {formik.touched.nome && formik.errors.nome ? <div className="error">{formik.errors.nome}</div> : null}

        <label htmlFor="descricao">Descrição</label>
        <textarea
          className="categoria-descricao"
          type="text"
          id="descricao"
          name="descricao"
          placeholder="Descreva categoria"
          onChange={(e) => {
            handleSetDescricao(e);
            formik.handleChange(e);
          }}
          onBlur={formik.handleBlur}
          value={descricao}
        />
        {formik.touched.descricao && formik.errors.descricao ? (
          <div className="error">{formik.errors.descricao}</div>
        ) : null}

        <input className="button-cadastrar" type="submit" value="Cadastrar categoria" />
      </form>
    </main>
  );
}

export default FormularioCategoria;
