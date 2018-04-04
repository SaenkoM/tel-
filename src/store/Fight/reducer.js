import { FIGHT } from './actions'

const initial = {
  //
}

export default (state = initial, { type, payload }) => {
  switch (type) {
    case FIGHT.UPDATE: {
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
