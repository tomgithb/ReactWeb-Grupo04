import { useRef, useState, useEffect } from "react";
import "./styleSubheader.css";

import api from "../../service/api";

function Subheader() {
	const dropDownRef = useRef(null);
	const [categorias, setCategorias] = useState([]);
	const [categoriasFiltradas, setCategoriasFiltradas] = useState([]);
	const [isActive, setIsActive] = useState(false);
	const [larguraTela, setLarguraTela] = useState(window.innerWidth);
	const [larguraTelaAnterior, setLarguraTelaAnterior] = useState();
	const onClick = () => setIsActive(!isActive);

	

	useEffect(() => {
		if(larguraTela > larguraTelaAnterior) {
			setCategoriasFiltradas(JSON.parse(JSON.stringify(categorias)));
		}
	}, [larguraTela])

	useEffect(() => {
		window.addEventListener("resize", () => {
			renderizaCategorias();
			setLarguraTelaAnterior(larguraTela);
			setLarguraTela(window.innerWidth);
		}
	);
		
	}, [categoriasFiltradas])

	useEffect(() => {
		api
			.get(`api/v1/categorias`)
			.then((response) => {
				if (response.status === 200) {
					setCategorias(response.data);
					setCategoriasFiltradas(JSON.parse(JSON.stringify(response.data)));
				}
			})
			.catch((error) => {
				alert(error.message);
			});
	}, []);

	// function atualizaNumeroCategorias() {
	// 	setCategoriasFiltradas(JSON.parse(JSON.stringify(categorias)));
	// 	renderizaCategorias();
	// }

	function renderizaCategorias() {
		console.log(categorias.length);
		
		let tamanhoCategoriasFiltradas = categoriasFiltradas.length;

		if (window.innerWidth > 1700) {
			if (categoriasFiltradas.length > 6) {
				categoriasFiltradas.length = 6;
			}
		} else if (window.innerWidth > 1500) {
			if (categoriasFiltradas.length > 5) {
				categoriasFiltradas.length = 5;
			}
		} else if (window.innerWidth > 1200) {
			if (categoriasFiltradas.length > 4) {
				categoriasFiltradas.length = 4;
			}
		} else if (window.innerWidth > 1000) {
			if (categoriasFiltradas.length > 3) {
				categoriasFiltradas.length = 3;
			}
		} else if (window.innerWidth > 800) {
			if (categoriasFiltradas.length > 2) {
				categoriasFiltradas.length = 2;
			}
		}

		setCategoriasFiltradas(categoriasFiltradas);
	}
	console.log("Categorias Filtradas");
	console.log(categoriasFiltradas)
	return (
		<div className="subheader">
			<nav className="barra-subheader">
				<div className="menu-drop">
					<div className="menu-container">
						<button onClick={onClick} className="menu-button">
							<img src="../img/icone-menu.svg" alt="menu"></img>
							<span className="todas-categorias">Todas as categorias</span>
						</button>
						<nav ref={dropDownRef} className={`menu ${isActive ? "active" : "inactive"}`}>
							<ul className="C-dropdown">
								{categorias.length === 0
									? ""
									: categorias.map((categoria) => {
											return (
												<li key={categoria.id} className={"c-dropdown__item cat" + categoria.id}>
													{categoria.nome}
												</li>
											);
									  })}
							</ul>
						</nav>
					</div>
				</div>
				<div className="barra-links-categorias">
					{categoriasFiltradas.length === 0
						? ""
						: categoriasFiltradas.map((categoria) => {
								return (
									<a key={categoria.id} className={"cat" + categoria.id} href="#">
										{categoria.nome}
									</a>
								);
						  })}
				</div>
			</nav>
		</div>
	);
}

export default Subheader;
