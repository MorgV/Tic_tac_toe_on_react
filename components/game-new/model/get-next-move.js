import { MOVE_ORDER } from "../../game/constans";

export const getNextMove = (currentMove, playersCount, playersTimeOver) => {
  const slicedMoveOrder = MOVE_ORDER.slice(0, playersCount).filter(
    (symbol) => !playersTimeOver.includes(symbol),
  );

  const nextCurrentMove = slicedMoveOrder.indexOf(currentMove) + 1;
  return slicedMoveOrder[nextCurrentMove] ?? slicedMoveOrder[0];
};
