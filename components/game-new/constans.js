export const GAME_SYMBOLS = {
  ZERO: "zero",
  CROSS: "cross",
  TRINGLE: "tringle",
  SQUARE: "square",
};
export const MOVE_ORDER = [
  GAME_SYMBOLS.CROSS,
  GAME_SYMBOLS.ZERO,
  GAME_SYMBOLS.TRINGLE,
  GAME_SYMBOLS.SQUARE,
];

import avatarSrc1 from "./UI/images/avatar.png";
import avatarSrc2 from "./UI/images/avatar1.png";
import avatarSrc3 from "./UI/images/avatar2.png";
import avatarSrc4 from "./UI/images/avatar3.png";

export const PLAYERS = [
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
