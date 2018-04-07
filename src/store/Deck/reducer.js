// import { DECK } from './actions'

const initialState = [
  { type: 'attack', level: 1 },
  { type: 'attack', level: 1 },
  { type: 'attack', level: 1 },
  { type: 'attack', level: 1 },
  { type: 'heal', level: 1 }
]

export default (state = initialState, { type, payload }) => {
  switch (type) {
    default: {
      return state
    }
  }
}
