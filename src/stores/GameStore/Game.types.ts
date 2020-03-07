export enum Scenes {
  MENU = 'MENU',
  GAME = 'GAME',
}

export enum PlayerType {
  HUMAN = 'HUMAN',
  COMPUTER = 'COMPUTER',
}

export type Player = {
  number: number
  type: keyof typeof PlayerType
}
