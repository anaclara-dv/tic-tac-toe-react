interface Props {
  onClick: () => void;
  value: any;
}

export function Square(props: Props) {
  return (
    <button
      className="square"
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}