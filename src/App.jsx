import { useState } from "react";
import "./styles.scss";

/*
  DESAFIO TÉCNICO - JOGO DA VELHA 
  * descrição
    desenvolva um jogo da velha (tic tac toe) funcional.
    use qualquer técnica de estilização preferida: css modules, sass, styled.

  * tasks
    ? - crie um board de 3x3
    ? - dois jogadores
    ? - ao clicar em um quadrado, preencher com a jogada
    ? - avisar quando o jogo finalizar, caso dê velha avise também
    ? - fazer um risco na sequência vencedora, caso houver
*/

function App() {
  const [gameData, setGameData] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

  const handleClick = (clickedIndex) => {
    console.log('index:',clickedIndex);
  };

  return (
    <>
      <div className="board-game">
        {gameData.map((value, index) => (
          <span 
          onClick={() => { 
            handleClick(index); 
          }}>
            {value}
          </span>
        ))}
      </div>
    </>
  );
}

export default App;
