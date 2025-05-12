import { GameLayout } from "./UI/game-layout";
import { BackLink } from "./UI/back-link";
import { GameInfo } from "./UI/game-info";
import { GameTitle } from "./UI/game-title";
import { PLAYERS } from "./constans";
import { PlayerInfo } from "./UI/player-info";
import { GameMoveInfo } from "./game-move-info";
import { useGameState } from "./model/use-game-state";
import { GameCell } from "./game-cell";
import { GameOverModal } from "./UI/game-over-modal";
const PLAYERS_COUNT = 2;

export function Game() {
  const {
    cells,
    currentMove,
    nextMove,
    handleGameCellClick,
    winnerSequence,
    winnerSymbol,
  } = useGameState(PLAYERS_COUNT);

  const winnerPlayer = PLAYERS.find((player) => player.symbol === winnerSymbol);

  return (
    <>
      <GameLayout
        backLink={<BackLink />}
        gameTitle={<GameTitle />}
        gameInfo={
          <GameInfo
            isRatingGame={true}
            playersCount={PLAYERS_COUNT}
            timeMode={"1 мин на ход"}
          />
        }
        playersList={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => (
          <PlayerInfo
            key={player.id}
            avatar={player.avatar}
            name={player.name}
            rating={player.rating}
            symbol={player.symbol}
            seconds={60}
            isRight={index % 2 === 1}
          />
        ))}
        gameMoveInfo={
          <GameMoveInfo currentMove={currentMove} nextMove={nextMove} />
        }
        gameCells={cells.map((cell, index) => (
          <GameCell
            onClick={() => handleGameCellClick(index)}
            key={index}
            isWinner={winnerSequence?.includes(index)}
            disabled={!!winnerSymbol}
            symbol={cell}
          />
        ))}
      />
      <GameOverModal
        players={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => (
          <PlayerInfo
            key={player.id}
            avatar={player.avatar}
            name={player.name}
            rating={player.rating}
            symbol={player.symbol}
            seconds={60}
            isRight={index % 2 === 1}
          />
        ))}
        winnerName={winnerPlayer?.name}
        winnerSymbol={winnerSymbol}
      />
    </>
  );
}
