import { useEffect } from "react";
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

const winningCombinations = [
  //horizontais
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  // verticais
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  // diagonal
  [0, 4, 8],
  [2, 4, 6],
];

function App() {
  const [gameData, setGameData] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [turn, setTurn] = useState(1);
  const [winningCombo, setWinningCombo] = useState(null);

  const handleClick = (clickedIndex) => {
    console.log(clickedIndex);

    if (gameData[clickedIndex] !== 0) {
      return;
    }
    if(winningCombo){
      return;
    }

    setGameData((prev) => {
      const newGameData = [...prev];
      newGameData[clickedIndex] = turn;
      return newGameData;
    });

    setTurn((prev) => (prev == 1 ? 2 : 1));

    
  };

  useEffect(()=>{
    checkWinner();
    checkGameEnd();
  },[gameData]);

  useEffect(()=>{
    if(winningCombo){
      alert('Jogo teve um vencedor.')
    }
  },[winningCombo])

  const checkGameEnd = () => {
    if(gameData.every((item) => item !==0)){
      alert('jogo acabou, deu velha.');
    }
  }

  const checkWinner = () => {
    console.log('checando ganhador!');
    
    let winner = null;

    for(let values of winningCombinations){

      if(
        gameData[values[0]] === 1 && 
        gameData[values[1]] === 1 && 
        gameData[values[2]] === 1 
        ){
          winner = 'player1'
        }

      if(
        gameData[values[0]] === 2 && 
        gameData[values[1]] === 2 && 
        gameData[values[2]] === 2 
        ){
          winner = 'player2'
        }
        if (winner){
          setWinningCombo(values);
          break;
        }
    }

    console.log({winner});

  };

  return (
    <>
      <div className="board-game">
        {gameData.map((value, index) => (
          <span
            onClick={() => {
              handleClick(index);
            }}
            key={index}
          >
            <abbr title="">{index}</abbr>
            {value == 1 && "❌"}
            {value == 2 && "⭕"}
            {value == 0 && "❓"}
          </span>
        ))}
      </div>
    </>
  );
}

export default App;
