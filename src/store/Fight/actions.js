export const FIGHT = {
  START: 'FIGHT_START',
  UPDATE: 'FIGHT_UPDATE',
  END: 'FIGHT_END'
}

export const startFightAction = (data) => ({
  type: FIGHT.START,
  payload: data
})

export const updateFightAction = (data) => ({
  type: FIGHT.UPDATE,
  payload: data
})

export const endFightAction = () => ({
  type: FIGHT.END
})
