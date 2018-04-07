import { CHARACTER } from './actions'

const initial = {
  level: 1,
  exp: 0,
  hp: {
    cur: 50,
    max: 50
  },
  mp: {
    cur: 24,
    max: 24
  },
  ap: {
    min: 20,
    max: 50
  }
}

export default (state = initial, { type, payload }) => {
  switch (type) {
    case CHARACTER.UPDATE: {
      return {
        ...state,
        ...payload
      }
    }
    default: {
      return state
    }
  }
}
