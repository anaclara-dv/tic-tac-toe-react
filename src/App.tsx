import { useState } from 'react';
import styles from './App.module.scss';
import  { Board } from './components/Board';

import { calculateWinner } from './utils/calculateWinner';
import { calculateDraw } from './utils/calculateDraw';

function App() {
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState(Array(9).fill(null));

  function handleClick(i: number) {
    const hasWinner = calculateWinner(history);

    if (hasWinner || history[i]) return;

    history[i] = xIsNext ? 'X' : 'O';

    setHistory(history);
    setStepNumber(prevStep => prevStep + 1);
    setXIsNext((prevState) => !prevState);
  }

  function getStatus() {
    const winner =  stepNumber > 5 && calculateWinner(history);
    const draw = stepNumber === 9 && calculateDraw(history);

    let status;

    if (!!winner) {
      status = 'Winner: ' + winner;
    }
    else if (draw) {
      status = 'Tie';
    }
    else {
      status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

    return status;
  }

  function resetGame() {
    setHistory(Array(9).fill(null));
    setXIsNext(true);
    setStepNumber(0);
  }

  return (
    <div className={styles.game}>
      <Board
        squares={history}
        onClick={(i) => handleClick(i)}
      />

      <button onClick={() => resetGame()}> resetar jogo </button>

      <div className={styles.game_info}>
        <div>{getStatus()}</div>

        <div></div>
      </div>
    </div>
  );
}

export default App;
