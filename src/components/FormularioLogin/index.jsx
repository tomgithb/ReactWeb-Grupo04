import { Link } from 'react-router-dom';

import React from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';

import "./style.css";


function FormularioLogin() {

  const formik = useFormik({
    initialValues: {
      email: '',
      senha: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('E-mail inválido').required(' E-mail obrigatório'),
      senha: Yup.string().min(8, 'Deve conter no mínimo 8 caracteres').required('Senha obrigatória')
    }),


  });

  return (
    <main className="container-login">

      <div className="titulo-login">
        <img src="./img/user.png" className="imagem" alt="Ícone de usuário" />
        <h1>Login</h1>
      </div>

      <form className="formulario-email" onSubmit={formik.handleSubmit}>
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Digite seu email aqui"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}

        <label>Senha:</label>
        <input
          id="senha"
          name="senha"
          type="password"
          placeholder="Digite sua senha"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.senha}

        />
        {formik.touched.senha && formik.errors.senha ? (
          <div>{formik.errors.senha}</div>
        ) : null}

        <button type="submit">Entrar</button>

        <p>Ainda não tem cadastro?</p>
        <Link to={`cadastro-usuario`}><p>Clique para sua conta!</p></Link>

      </form>
    </main>

  );
}

export default FormularioLogin;