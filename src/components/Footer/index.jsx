import "./footer.css";

function Footer() {
    return (
        <footer>
            <span className="direitos-de-uso">
                <span>@2021 Todos os direitos reservados |</span> <span>Desenvolvidos por Grupo4</span>
            </span>
            <div className="logo-footer">
                <img src="../img/logo.png" className="logo-footer" alt="Logo com imagem de um carrinho com o nome do site e o numero 4" />
            </div>
        </footer>

    );

}

export default Footer;