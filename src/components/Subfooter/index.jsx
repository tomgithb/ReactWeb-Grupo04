import { SubRodape } from "./style";

function Subfooter() {
  return (
    <SubRodape className="subfooter">
      <div className="certificados">
        <img src="../img/certificados.png" alt="certificados"></img>
      </div>

      <div className="pagamentos">
        <div className="titulo-forma">
          <p>Formas de Pagamento</p>
        </div>
        <img
          src="../img/cartoes.png"
          alt="cartões e bandeiras que são aceitos para pagamento, entre eles Mastercard, Visa"
        ></img>
      </div>
    </SubRodape>
  );
}

export default Subfooter;
