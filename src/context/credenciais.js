import React, { useState } from "react";

export const estadoCredenciais = {
    login: null,
    senha: null
}

export const CredenciaisContext = React.createContext(null);

function ContextoCredenciais(props) {
    const [credenciais, setCredenciais] = useState(estadoCredenciais);
    
    function handleSetLogin(e) {
        setCredenciais({
            ...credenciais, 
            login: e.target.value
        });
    }

    function handleSetSenha(e) {
        setCredenciais({
            ...credenciais, 
            senha: e.target.value
        });
    }

    function handleSetCredenciais(credenciaisTemp) {
        setCredenciais({
            login: credenciaisTemp.login,
            senha: credenciaisTemp.senha
        });
    }

    return(
        <CredenciaisContext.Provider value={{credenciais, handleSetLogin, handleSetSenha, handleSetCredenciais}}>
            {props.children}
        </CredenciaisContext.Provider>
    )
}

export default ContextoCredenciais;