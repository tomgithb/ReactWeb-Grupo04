import { ContainerCards } from "./style";

function CardMinhaConta({informacoes, index, escolha, setEscolha}) {
  return (
    <ContainerCards className={escolha === (index+1) ? 'card-ativo' : ''} onClick={() => {
      setEscolha(index+1);
      }}>
      <img src={informacoes.imagem} className="imagem" alt={informacoes.altImagem} />

      <div className="texto">
        <h3>{informacoes.titulo}</h3>
        <p>{informacoes.descricao}</p>
      </div>
    </ContainerCards>
  );
}

export default CardMinhaConta;
