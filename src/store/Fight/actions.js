export const FIGHT = {
  UPDATE: 'FIGHT_UPDATE'
}

export const updateFightAction = (data) => ({
  type: FIGHT.UPDATE,
  payload: data
})
