import './styles.scss';

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
  return (
    <>
      <h3>Desafio</h3>
      <h1>jogo da velha</h1>
      <div className='board-game'></div>
    </>
  );
}

export default App;
