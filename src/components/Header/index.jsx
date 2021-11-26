import "./style.css";

function Header() {
    return (
        <header>
            <nav className="barra-navegacao">
                <img src="./img/logo.png" id="logo-imagem"></img>
                <form>
                    <label for="pesquisa">Digite sua pesquisa:</label>
                    <input type="text" placeholder="O que você gostaria de comprar hoje?" />
                    <button className="lupa-botao"><img src="./img/search.svg" className="lupa"></img></button>
                </form>

                <div className="links-navegacao">
                    <a href=""><img src="./img/shopping-cart.svg" alt="imagem de um carrinho de compras" className="carrinho"></img>
                    </a>
                    <div className="bem-vindo-login">
                        <p>Bem-vindo :)</p>
                        <a href="#">Login</a>
                    </div>

                </div>



            </nav>


        </header >

    );


    // SUBHEADER

}

export default Header;
