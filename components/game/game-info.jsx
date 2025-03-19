import clsx from "clsx";
import { Profile } from "../profile";
import { CrossIcon } from "./icons/cross-icon";
import { GameSymbol } from "./game-symbol";
import { GAME_SYMBOLS } from "./constans";

import avatarSrc1 from "./images/avatar.png";
import avatarSrc2 from "./images/avatar1.png";
import avatarSrc3 from "./images/avatar2.png";
import avatarSrc4 from "./images/avatar3.png";
import { useEffect, useState } from "react";

const players = [
  {
    id: "1",
    name: "ErKh",
    rating: 1230,
    avatar: avatarSrc1,
    symbol: GAME_SYMBOLS.CROSS,
  },
  {
    id: "2",
    name: "Ksu",
    rating: 1230,
    avatar: avatarSrc2,
    symbol: GAME_SYMBOLS.ZERO,
  },
  {
    id: "3",
    name: "3",
    rating: 1230,
    avatar: avatarSrc3,
    symbol: GAME_SYMBOLS.TRINGLE,
  },
  {
    id: "4",
    name: "4playerpdjfwwpekfpw",
    rating: 1230,
    avatar: avatarSrc4,
    symbol: GAME_SYMBOLS.SQUARE,
  },
];

export function GameInfo({ className, playersCount, currentMove }) {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 py-4  justify-between grid grid-cols-2 gap-3",
      )}
    >
      {players.slice(0, playersCount).map((player, index) => {
        return (
          <PlayerInfo
            key={player.id}
            playerInfo={player}
            isRight={index % 2 === 1}
            isMove={currentMove === player.symbol}
          />
        );
      })}
    </div>
  );
}

function PlayerInfo({ playerInfo, isRight, isMove }) {
  const [seconds, setSeconds] = useState(60);

  const minutesStroke = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secondsStroke = String(Math.floor(seconds % 60)).padStart(2, "0");

  const isDanger = seconds < 10;

  const getColor = () => {
    if (isMove) {
      return isDanger ? "text-orange-500" : "text-slate-900";
    }
    return "text-slate-200";
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (isMove) {
        setSeconds((s) => Math.max(s - 1, 0));
      }
    }, 1000);

    return () => {
      clearInterval(interval);
      setSeconds(60);
    };
  }, [isMove]);

  return (
    <div className="flex gap-3 items-center">
      <div className={clsx("relative", isRight && "order-3")}>
        <Profile
          className="w-44"
          name={playerInfo.name}
          rating={playerInfo.rating}
          avatar={playerInfo.avatar}
        />
        <div className="w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center">
          <GameSymbol symbol={playerInfo.symbol} />
        </div>
      </div>
      <div className={clsx("h-6 w-px bg-slate-200", isRight && "order-2")} />
      <div
        className={clsx(
          "text-slate-900 text-lg font-semibold w-[60px]",
          isRight && "order-1",
          getColor(),
        )}
      >
        {minutesStroke}:{secondsStroke}
      </div>
    </div>
  );
}
