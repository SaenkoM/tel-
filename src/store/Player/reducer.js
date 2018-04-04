// import { PLAYER } from './actions'

const initial = {
  level: 1,
  exp: 0,
  attack: {
    min: 3,
    max: 5
  },
  hp: {
    cur: null,
    max: 50
  }
}

export default (state = initial, { type }) => {
  switch (type) {
    default: {
      return state
    }
  }
}
