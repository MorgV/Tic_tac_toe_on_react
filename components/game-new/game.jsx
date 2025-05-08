import { GameLayout } from "./UI/game-layout";
import { BackLink } from "./UI/back-link";
import { GameInfo } from "./UI/game-info";
import { GameTitle } from "./UI/game-title";
import { PLAYERS } from "./constans";
import { PlayerInfo } from "./UI/player-info";
export function Game() {
  return (
    <GameLayout
      backLink={<BackLink />}
      gameTitle={<GameTitle />}
      gameInfo={
        <GameInfo
          isRatingGame={true}
          playersCount={4}
          timeMode={"1 мин на ход"}
        />
      }
      playersList={PLAYERS.map((player, index) => (
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
    />
  );
}
