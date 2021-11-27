import "./style.css";
import React, { useState, useEffect, useContext } from "react";
import { CredenciaisContext } from "../../context/credenciais";

function Header() {
  const { credenciais } = useContext(CredenciaisContext);
  const [busca, setBusca] = useState("");
  const [statusLogin, setStatusLogin] = useState(false);

  useEffect(() => {
    if (credenciais.login !== null && credenciais.senha !== null) {
      setStatusLogin(true);
    } else {
      setStatusLogin(false);
    }
  }, [credenciais]);

  function handleSetBusca(e) {
    setBusca(e.target.value);
  }

  function realizaBusca(e) {
	e.preventDefault();
	document.location.href = `/pesquisa/${busca}`;
  }

  return (
    <header>
      <nav className="barra-navegacao">
        <a href="/">
          <img
            src="../img/logo.png"
            id="logo-imagem"
            alt="Logo com imagem de um carrinho com o nome do site e o numero 4"
          />
        </a>
        <form onSubmit={(e) => {
			realizaBusca(e);
		}}>
          <label htmlFor="pesquisa">Digite sua pesquisa:</label>
          <input
            type="text"
            name="pesquisa"
            id="pesquisa"
            placeholder="O que você gostaria de comprar hoje?"
            value={busca}
            onChange={(e) => {
              handleSetBusca(e);
            }}
          />
          <button className="lupa-botao">
            <img src="../img/search.svg" className="lupa" alt="Imagem de uma lupa. Botão de Pesquisa" />
          </button>
        </form>

        <div className="links-navegacao">
          <a href="/carrinho">
            <img src="../img/shopping-cart.svg" alt="Imagem de um carrinho de compras" className="carrinho" />
          </a>

          <div className="bem-vindo-login">
            <p>Bem-vindo :)</p>
            {statusLogin ? (
              <a href="/minha-conta" className="minha-conta">
                Minha conta
              </a>
            ) : (
              <a href="/login">Login</a>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
