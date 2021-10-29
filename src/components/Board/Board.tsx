import { Square } from '../Square';
import styles from './Board.module.scss'; 

interface Props {
  squares: any[];
  onClick: (i: number) => void;
}

function Board(props: Props) {
  return (
    <div className={ styles.board }>
      
        <Square value={props.squares[0]} onClick={() => props.onClick(0)}/>
        <Square value={props.squares[1]} onClick={() => props.onClick(1)}/>
        <Square value={props.squares[2]} onClick={() => props.onClick(2)}/>
      
      
        <Square value={props.squares[3]} onClick={() => props.onClick(3)}/>
        <Square value={props.squares[4]} onClick={() => props.onClick(4)}/>
        <Square value={props.squares[5]} onClick={() => props.onClick(5)}/>
     
      
        <Square value={props.squares[6]} onClick={() => props.onClick(6)}/>
        <Square value={props.squares[7]} onClick={() => props.onClick(7)}/>
        <Square value={props.squares[8]} onClick={() => props.onClick(8)}/>
      
    </div>
  );
};

export default Board;
