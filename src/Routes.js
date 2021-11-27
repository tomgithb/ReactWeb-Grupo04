import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useEffect, useContext } from "react";
import {CredenciaisContext} from "./context/credenciais";


import Home from "./pages/Home";
import Login from './pages/Login';
import CadastroProduto from "./pages/CadastroProduto";
import CadastroUsuario from "./pages/CadastroUsuario";
import CadastroCategoria from "./pages/CadastroCategoria";
import MinhaConta from "./pages/MinhaConta";
import Carrinho from "./pages/Carrinho";
import Pesquisa from "./pages/Pesquisa";
import ProdutoCategoria from "./pages/ProdutoCategoria";


function Routes() {
    const { handleSetCredenciais } = useContext(CredenciaisContext);

    useEffect(() => {
        let credenciaisStorage = JSON.parse(localStorage.getItem("credenciais"));
        if (credenciaisStorage !== null && credenciaisStorage !== undefined) {
            handleSetCredenciais(credenciaisStorage);
        }
        console.log("foi")
    }, []);

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/cadastro-produto" component={CadastroProduto} />
                <Route path="/cadastro-usuario" component={CadastroUsuario} />
                <Route path="/cadastro-categoria" component={CadastroCategoria} />
                <Route path="/minha-conta" component={MinhaConta} />
                <Route path="/carrinho" component={Carrinho} />
                <Route path="/pesquisa/:nome" component={Pesquisa} />
                <Route path="/categoria/:id" component={ProdutoCategoria} />
                <Route path="/" component={Home} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;