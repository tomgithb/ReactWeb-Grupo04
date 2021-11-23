import React from "react";

import "./Style.css";


function Formulario({ email, setEmail, senha, setSenha }){
    return (
        //onSubmit={(e) => salvarRegistro(e)}
        <form className="Formulario-email" >
            <label>Email</label>
            <input
                type="text"
                nome="Email"
                //value={email.nome}
               // onChange={(e) => setEmail("Email", e.target.value)}
            />
            
            <label>senha:</label>
            <input
                type="text"
                nome="senha"
                //value={senha.nome}
                //onChange={(e) => setSenha("Senha", e.target.value)}
            />
        </form>    
    );
}

export default Formulario;