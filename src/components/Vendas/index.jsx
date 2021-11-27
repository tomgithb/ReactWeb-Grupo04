import "./vendas.css";

function Vendas() {
    return (
            <nav className="barra-navegacao">
                <div className="titulo">Vendas</div>
                <div className="informacao">
                <p className="titulo-pedido">Pedidos</p><p className="titulo-data">Data</p><p className="titulo-valor">Valor</p>
            </div>
            <div className="info-container">
                <p className="pedido">puxar número do pedido da api</p><p className="data">puxar data do pedido da api</p><p className="valor">puxar valor do pedido da api</p>
            </div>
            <hr className="linha"></hr>
            <div className="info-container">
                <p className="pedido">puxar número do pedido da api</p><p className="data">puxar data do pedido da api</p><p className="valor">puxar valor do pedido da api</p>
            </div>
            <hr className="linha"></hr>
            <div className="info-container">
                <p className="pedido">puxar número do pedido da api</p><p className="data">puxar data do pedido da api</p><p className="valor">puxar valor do pedido da api</p>
            </div>
            <hr className="linha"></hr>
            <div className="info-container">
                <p className="pedido">puxar número do pedido da api</p><p className="data">puxar data do pedido da api</p><p className="valor">puxar valor do pedido da api</p>
            </div>
            <hr className="linha"></hr>
            </nav>
    );
}

export default Vendas;
