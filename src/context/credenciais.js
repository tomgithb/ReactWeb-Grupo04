import React, { useState } from "react";

export const estadoCredenciais = {
    login: null,
    senha: null,
}

export const statusCarregamento = false;

export const CredenciaisContext = React.createContext(null);

function ContextoCredenciais(props) {
    const [credenciais, setCredenciais] = useState(estadoCredenciais);
    const [credenciaisCarregadas, setCredenciaisCarregadas] = useState(statusCarregamento);
    
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

    function handleSetCredenciaisCarregadas() {
        setCredenciaisCarregadas(true);
    }

    return(
        <CredenciaisContext.Provider value={{credenciais, handleSetLogin, handleSetSenha, handleSetCredenciais, credenciaisCarregadas, handleSetCredenciaisCarregadas}}>
            {props.children}
        </CredenciaisContext.Provider>
    )
}

export default ContextoCredenciais;