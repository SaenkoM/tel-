export const FIGHT = {
  START: 'FIGHT_START',
  UPDATE: 'FIGHT_UPDATE',
  END: 'FIGHT_END',
  START_TURN: 'TURN_START',
  END_TURN: 'TURN_END'
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

export const startTurnAction = (encounter) => ({
  type: FIGHT.START_TURN,
  encounter
})

export const endTurnAction = (data) => ({
  type: FIGHT.END_TURN,
  payload: data
})
