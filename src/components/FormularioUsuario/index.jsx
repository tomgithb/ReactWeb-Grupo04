import React, { useState } from "react";
import axios from "axios";
import { useFormik } from 'formik';


import "./style.css"

// // const handleDados(e) => {
//   // Pegando o CEP
//   const cep = e.target.value;
//   // Consultando a API
//   ApiCep.SearchCep(cep).then((res) => {
//     let rua       = res.data.logradouro;
//     let bairro    = res.data.bairro;
//     let cidade    = res.data.localidade;
//     let estado    = res.data.uf;
//     // Mudando o estado
//     this.setState({
//       rua: rua,
//      bairro: bairro,
//      cidade: cidade,
//      estado: estado
//     })
//   })
// ;

// constructor() 
//   super()

//   this.state = {
//       rua: 'Rua...'
//     , bairro: 'Bairro...'
//     , cidade: 'Cidade...'
//     , estado: 'Estado'
//   }

// const ApiCep = {
//   SearchCep(cep) {
//     return axios.get(`https://viacep.com.br/ws/${cep}/json`);
//   }
// };

const validate = values => {
  const errors = {};
  if (!values.nome) {
    errors.nome = 'Nome não pode ficar em branco. O campo deve ser preenchido!';
  } else if (values.produto.length < 4) {
    errors.nome = 'Nome muito curto.';
  } else if (values.produto.length > 40) {
    errors.nome = 'Nome muito grande.';
  }


  if (!values.sobreNome) {
    errors.sobreNome = 'O sobrenome não pode ficar em branco. O campo deve ser preenchido!';
  }

  if (!values.telefone1) {
    errors.telefone1 = 'O telefone principal não pode ficar em branco. O campo deve ser preenchido!';
  }

  if (!values.cpf) {
    errors.cpf = 'O CPF não pode ficar em branco. O campo deve ser preenchido!';
  }


  var dataAtual = new Date();
  var data = new Date(values.dataNascimento);

  if (!values.dataNascimento) {
    errors.dataNascimento = 'A data não pode ficar em branco ou ser uma data futura.';
  } else if (data > dataAtual) {
    errors.dataNascimento = "Data inválida, data de nascimento não pode estar no futuro!";
  }
  

  if (!values.email) {
    errors.email = 'O endereço de email não pode ficar em branco. O campo deve ser preenchido!';
    ;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Email invalido";
  }



  if (!values.nomeUsuario) {
    errors.nomeUsuario = 'Nome de usuário não pode ficar em branco. O campo deve ser preenchido!';
  } else if (values.nomeUsuario.length < 4) {
    errors.nomeUsuario = 'Nome de usuário muito curto.';
  } else if (values.nomeUsuario.length > 40) {
    errors.nomeUsuario = 'Nome de usuário muito grande.';
  }

  if (!values.senha) {
    errors.senha = 'A senha não pode ficar em branco. O campo deve ser preenchido!';
  } else if (values.senha.length < 8) {
    errors.senha = 'Senha muito curta.';
  } else if (values.senha.length > 40) {
    errors.senha = 'Senha muito grande.';
  }

  if (!values.cep) {
    errors.cep = 'O CEP não pode ficar em branco. O campo deve ser preenchido!';
  } 



  if (!values.rua) {
    errors.rua = 'A rua não pode ficar em branco. O campo deve ser preenchido!';
  }

  if (!values.numero) {
    errors.numero = 'O numero não pode ficar em branco. O campo deve ser preenchido!';
  }

  return errors;
};


function FormularioUsuario({ nome, setNome, sobrenome, setsobrenome,  telefone1, settelefone1, telefone2, cpf, setcpf, dataNascimento, setdataNascimento, email, setemail, nomeUsuario, setnomeUsuario, senha, setsenha, cep, setcep, rua, setrua, bairro, setbairro, numero, setnumero, complemento, setcomplemento, cidade, setcidade, estado, setestado, salvarRegistro }) {


  const formik = useFormik({
    initialValues: {
        nome: '',
        sobreNome: '',
        telefone1: '',
        telefone2: '',
        cpf: '',
        dataNascimento: '',
        email: '',
        nomeUsuario: '',
        senha: '',
        cep: '',
        rua: '',
        bairro: '',
        numero: '',
        complemento: '',
        cidade: '',
        estado: '',
 
    },

    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });


  return (
    <main><h1>Cadastro de Usuário</h1>
      <form className="CadastroUsuario" onSubmit={formik.handleSubmit}>
        <div id="div-meio">
          <div class="esquerda">
                <label htmlFor="nome">Nome <spam id="alerta">*</spam></label>
                <input
                    id="nome"
                    nome="nome"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.nome}
                 />
                {formik.touched.nome && formik.errors.nome ? <div class="error">{formik.errors.nome}</div> : null}

          </div>
          <div class="direita">
                <label htmlFor="sobreNome">Sobre-nome <spam id="alerta">*</spam></label>
                <input
                    id="sobreNome"
                    nome="sobreNome"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.sobreNome}
                />
                {formik.touched.sobreNome && formik.errors.sobreNome ? <div class="error">{formik.errors.sobreNome}</div> : null}
          </div>
        </div>



        <div id="div-meio">
          <div class="esquerda">
            <label htmlFor="telefone1">Telefone principal <spam id="alerta">*</spam></label>
            <input
                id="telefone1"
                nome="telefone1"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.telefone1}
            />
            {formik.touched.telefone1 && formik.errors.telefone1 ? <div class="error">{formik.errors.telefone1}</div> : null}

          </div>
          <div class="direita">
            <label htmlFor="telefone2">Telefone secundário </label>
            <input
                id="telefone2"
                nome="telefone2"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.telefone2}
            />
            {formik.touched.telefone2 && formik.errors.telefone2 ? <div class="error">{formik.errors.telefone2}</div> : null}
            </div>
        </div>

        <label>Genero<spam id="alerta">*</spam></label>
        <div className="form-group-check-inline">
           <div className="form-check form-check-inline">
               <input
                  className="form-check-input"
                  type="radio"
                  name="genero"
                  value=" Masculino"
                  id="inlineRadio1"
               />
               <label className="form-check-label radio-label" htmlFor="inlineRadio1">
                   Masculino
               </label>
            </div>
          <div className="form-check form-check-inline">
              <input
                 className="form-check-input"
                 type="radio"
                 name="genero"
                 value=" Feminino"
                 id="inlineRadio2"
              />
              <label className="form-check-label radio-label" htmlFor="inlineRadio2">
                Feminino
              </label>
         </div>
         <div className="form-check form-check-inline">
             <input
                className="form-check-input"
                type="radio"
                name="genero"
                value=" Prefiro não informar"
                id="inlineRadio3"
             />
              <label className="form-check-label radio-label" htmlFor="inlineRadio3">
              Prefiro não informar
               </label>
          </div>
        </div>

        <div id="div-meio">
          <div class="esquerda">
            <label htmlFor="cpf">CPF <spam id="alerta">*</spam></label>
            <input
              id="cpf"
              nome="cpf"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.cpf}
            />
            {formik.touched.cpf && formik.errors.cpf ? <div class="error">{formik.errors.cpf}</div> : null}

          </div>
          <div class="direita">
            <label htmlFor="dataNascimento">Data de nascimento <spam id="alerta">*</spam></label>
            <input
              id="dataNascimento"
              nome="dataNascimento"
              type="date"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.dataNascimento}
            />
            {formik.touched.dataNascimento && formik.errors.dataNascimento ? <div class="error">{formik.errors.dataNascimento}</div> : null}
          </div>
        </div>


        <label htmlFor="email">e-mail <spam id="alerta">*</spam></label>
        <input
           id="email"
           nome="email"
           type="email"
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
           value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? <div class="error">{formik.errors.email}</div> : null}


        <label htmlFor="nomeUsuario">Nome de usuário <spam id="alerta">*</spam></label>
        <input
           id="nomeUsuario"
           nome="nomeUsuario"
           type="text"
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
           value={formik.values.nomeUsuario}
        />
        {formik.touched.nomeUsuario && formik.errors.nomeUsuario ? <div class="error">{formik.errors.nomeUsuario}</div> : null}

        <label htmlFor="senha">Senha <spam id="alerta">*</spam></label>
        <input
          id="senha"
          nome="senha"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.senha}
        />
        {formik.touched.senha && formik.errors.senha ? <div class="error">{formik.errors.senha}</div> : null}

        <label htmlFor="cep">CEP <spam id="alerta">*</spam></label>
        <input
          id="cep"
          nome="cep"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.cep}
        />
        {formik.touched.cep && formik.errors.cep ? <div class="error">{formik.errors.cep}</div> : null}

        
        <label htmlFor="rua">Rua <spam id="alerta">*</spam></label>
        <input
           id="rua"
           nome="rua"
           type="text"
           readOnly="true"          
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
           value={formik.values.rua}

        />
        {formik.touched.rua && formik.errors.rua ? <div class="error">{formik.errors.rua}</div> : null}

        <label htmlFor="bairro">Bairro <spam id="alerta">*</spam></label>
        <input
           id="bairro"
           nome="bairro"
           type="text"
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
           value={formik.values.bairro}
        />
        {formik.touched.bairro && formik.errors.bairro ? <div class="error">{formik.errors.bairro}</div> : null}

        <div id="div-meio">
          <div class="esquerda">
            <label htmlFor="numero">Número <spam id="alerta">*</spam></label>
            <input
              id="numero"
              nome="numero"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.numero}
            />
            {formik.touched.numero && formik.errors.numero ? <div class="error">{formik.errors.numero}</div> : null}

          </div>
          <div class="direita">
            <label htmlFor="complemento">Complemento </label>
            <input
              id="complemento"
              nome="complemento"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.complemento}
            />
            {formik.touched.complemento && formik.errors.complemento ? <div class="error">{formik.errors.complemento}</div> : null}
          </div>
        </div>

        <div id="div-meio">
          <div class="esquerda">
            <label htmlFor="cidade">Cidade <spam id="alerta">*</spam></label>
            <input
              id="cidade"
              nome="cidade"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.cidade}
            />
            {formik.touched.cidade && formik.errors.cidade ? <div class="error">{formik.errors.cidade}</div> : null}

          </div>
          <div class="direita">
            <label htmlFor="uf">Estado <spam id="alerta">*</spam></label>
            <input
              id="uf"
              nome="uf"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.uf}
              size="20"
            />
            {formik.touched.uf && formik.errors.uf ? <div class="error">{formik.errors.uf}</div> : null}
         </div>
        </div>
         <div className="checkbox">
            <input
               type="checkbox"
               placeholder="  Declaro que li e aceito os Termos de Uso"
               name="DeclaracaoCiente"
               id="customCheck1"
             />
             <label htmlFor="customCheck1">  Declaro que li e aceito os Termos de Uso</label>
          </div>
         <input id="botao" type='submit' nome="enviar" value="CADASTRAR-SE" />
         <div className="linkentrada">
            <label htmlFor="linkentrada"> Ja tem cadastro? Entrar </label>
          </div>
      </form >
    </main>
  );
}
  
export default FormularioUsuario;
