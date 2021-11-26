import { useRef, useState } from "react";
import "./styleSubheader.css";

function Subheader() {
    const dropDownRef = useRef(null);
    const [isActive, setIsActive] = useState(false)
    const onClick = () => setIsActive(!isActive)

    return (
        <div className="subheader">
            <nav className="barra-subheader">
                <div className="menu-drop">
                    <div className="menu-container">
                        <button onClick={onClick} className="menu-button">
                            <img src="../img/icone-menu.svg" alt="menu"></img>
                            <span className="todas-categorias">Todas as categorias
                            </span>

                        </button>
                        <nav ref={dropDownRef} className={`menu ${isActive ? "active" : "inactive"}`}>

                            <ul className="C-dropdown">
                                <li className="c-dropdown__item">abacaxau</li>
                                <li className="c-dropdown__item">jacubitaba</li>
                                <li className="c-dropdown__item">nabana</li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="barra-links-categorias">
                    <a href="#">Categoria1</a>
                    <a href="#">Categoria2</a>
                    <a href="#">Categoria3</a>
                    <a href="#">Categoria4</a>
                    <a href="#">Categoria5</a>
                </div>
            </nav>
        </div>
    );
}

export default Subheader;