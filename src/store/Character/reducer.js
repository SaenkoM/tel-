// import { CHARACTER } from './actions'

const initial = {
  level: 1,
  exp: 0,
  attack: {
    min: 3,
    max: 5
  },
  hp: {
    cur: 50,
    max: 50
  },
  mp: {
    cur: 24,
    max: 24
  }
}

export default (state = initial, { type }) => {
  switch (type) {
    default: {
      return state
    }
  }
}
