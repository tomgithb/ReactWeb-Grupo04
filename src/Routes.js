import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from './pages/Login';
import CadastroProduto from "./pages/CadastroProduto";
import CadastroUsuario from "./pages/CadastroUsuario";
import CadastroCategoria from "./pages/CadastroCategoria";
import MinhaConta from "./pages/MinhaConta";
import Carrinho from "./pages/Carrinho";

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/cadastro-produto" component={CadastroProduto} />
                <Route path="/cadastro-usuario" component={CadastroUsuario} />
                <Route path="/cadastro-categoria" component={CadastroCategoria} />
                <Route path="/minha-conta" component={MinhaConta} />
                <Route path="/carrinho" component={Carrinho} />
                <Route path="/" component={Home} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;