export const FIGHT = {
  START: 'FIGHT_START',
  UPDATE: 'FIGHT_UPDATE',
  END: 'FIGHT_END',

  START_TURN: 'TURN_START',
  END_TURN: 'TURN_END',

  CARD_PLAYED: 'CARD_PLAYED'
}

export const startFightAction = (encounter) => ({
  type: FIGHT.START,
  encounter
})

export const updateFightAction = (data) => ({
  type: FIGHT.UPDATE,
  payload: data
})

export const endFightAction = () => ({
  type: FIGHT.END
})

export const startTurnAction = (turn) => ({
  type: FIGHT.START_TURN,
  turn
})

export const endTurnAction = (data) => ({
  type: FIGHT.END_TURN,
  payload: data
})

export const cardPlayedAction = (data) => ({
  type: FIGHT.CARD_PLAYED,
  data
})
