import "./style.css";

function Header() {
	return (
		<header>
			<nav className="barra-navegacao">
				<a href="/">
					<img
						src="./img/logo.png"
						id="logo-imagem"
						alt="Logo com imagem de um carrinho com o nome do site e o numero 4"
					/>
				</a>
				<form>
					<label htmlFor="pesquisa">Digite sua pesquisa:</label>
					<input type="text" name="pesquisa" id="pesquisa" placeholder="O que você gostaria de comprar hoje?" />
					<button className="lupa-botao">
						<img src="./img/search.svg" className="lupa" alt="Imagem de uma lupa. Botão de Pesquisa" />
					</button>
				</form>

				<div className="links-navegacao">
					<a href="/carrinho">
						<img src="./img/shopping-cart.svg" alt="Imagem de um carrinho de compras" className="carrinho" />
					</a>

					<div className="bem-vindo-login">
						<p>Bem-vindo :)</p>
						<a href="/login">Login</a>
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Header;
