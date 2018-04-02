export const DATA = {
  ADD: 'DATA_ADD',

  FETCH: 'DATA_FETCH',
  FETCH_SUCCEEDED: 'DATA_FETCH_SUCCEEDED',
  FETCH_FAILED: 'DATA_FETCH_FAILED',

  SAVE: 'DATA_SAVE',
  SAVE_SUCCEEDED: 'DATA_SAVE_SUCCEEDED',
  SAVE_FAILED: 'DATA_SAVE_FAILED'
}

export function addDataAction (data) {
  return { type: DATA.ADD, payload: data }
}

export function fetchDataAction (data) {
  return { type: DATA.FETCH, payload: data }
}

export function saveDataAction (data) {
  return { type: DATA.SAVE, payload: data }
}
