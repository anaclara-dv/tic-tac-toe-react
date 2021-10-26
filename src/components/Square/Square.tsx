import styles from './Square.module.scss';
interface Props {
  onClick: () => void;
  value: any;
}

function Square(props: Props) {
  return (
    <button className={styles.square} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;