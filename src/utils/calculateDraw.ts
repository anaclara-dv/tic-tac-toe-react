export function calculateDraw(squares: string[]) {
  let i;
  let aux = 0;

  for (i = 0; i < 8; i++) {
    if (squares[i] === "") {
      aux++;
    }
  }

  if (aux === 0)
    return true;
}