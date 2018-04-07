// import { DECK } from './actions'

const initialState = [
  { type: 'attack' },
  { type: 'attack' },
  { type: 'attack' },
  { type: 'attack' },
  { type: 'attack' },
  { type: 'heal' }
]

export default (state = initialState, { type, payload }) => {
  switch (type) {
    default: {
      return state
    }
  }
}
