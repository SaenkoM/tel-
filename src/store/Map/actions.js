export const MAP = {
  UPDATE: 'MAP_UPDATE'
}

export const updateMapAction = (data) => ({
  type: MAP.UPDATE,
  payload: data
})
