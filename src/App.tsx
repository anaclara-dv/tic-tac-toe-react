import { useState } from 'react';
import styles from './App.module.scss';
import  { Board } from './components/Board';

import { calculateWinner } from './utils/calculateWinner';
import { calculateDraw } from './utils/calculateDraw';

function App() {
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState(Array(9).fill(null));
  const [score, setScore] = useState({x: 0, o: 0});
  const [status, setStatus] = useState('Vez do jogador: ' + (xIsNext ? 'X' : 'O'));

  function handleClick(i: number) {
    const hasWinner = calculateWinner(history);

    if (hasWinner || history[i]) return;

    history[i] = xIsNext ? 'X' : 'O';

    setHistory(history);
    setStepNumber(prevStep => prevStep + 1);
    setXIsNext((prevState) => !prevState);

    getStatus() 
  }

  function getStatus() {
    const winner =  stepNumber > 5 && calculateWinner(history);
    const draw = stepNumber === 9 && calculateDraw(history);

    let status;

    if (!!winner) {
      status = 'Winner: ' + winner;
      if(winner === 'O') {
        setScore(prevScore => ({x: prevScore.x, o: prevScore.o+1}))
      }
      else {
        setScore(prevScore => ({x: prevScore.x+1, o: prevScore.o}))
      }
    }
    else if (draw) {
      status = 'Tie';
    }
    else {
      status = 'Vez do jogador: ' + (xIsNext ? 'X' : 'O');
    }

    setStatus(status);
  }

  function resetGame() {
    setHistory(Array(9).fill(null));
    setXIsNext(true);
    setStepNumber(0);
  }

  function resetScore() {
    setScore({x: 0, o: 0});
  }

  return (
    <div className={styles.game}>
      <h1>Tic Tac Toe</h1>

      <span>{status}</span>

      <div className={styles.score}>X: {score.x} O: {score.o}</div>

      <Board
        squares={history}
        onClick={(i) => handleClick(i)}
      />

      <div className={styles.game_info}>

        <button className={styles.buttonreset} onClick={() => resetGame()}> resetar jogo </button>

        <button className={styles.buttonscore} onClick={() => resetScore()}> resetar placar </button>

      </div>
    </div>
  );
}

export default App;
