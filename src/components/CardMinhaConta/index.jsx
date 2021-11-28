import { ContainerCards } from "./style";

function CardMinhaConta({informacoes}) {
  return (
    <ContainerCards onClick={() => alert("Ops! Você clicou.")}>
      <img src={informacoes.imagem} className="imagem" alt="Ícone de usuário" />

      <div className="texto">
        <h3>{informacoes.titulo}</h3>
        <p>{informacoes.descricao}</p>
      </div>
    </ContainerCards>
  );
}

export default CardMinhaConta;
