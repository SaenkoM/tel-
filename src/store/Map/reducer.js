// import { MAP } from './actions'

const initialState = {
  floor: '1',
  pos: {
    x: 5,
    y: 10
  }
}

export default (state = initialState, { type }) => {
  switch (type) {
    default: {
      return state
    }
  }
}
