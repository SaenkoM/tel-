export const CHARACTER = {
  UPDATE: 'CHARACTER_UPDATE'
}

export const updateCharacterAction = (data) => ({
  type: CHARACTER.UPDATE,
  payload: data
})
