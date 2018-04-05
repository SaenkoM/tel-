import { FIGHT } from './actions'

export default (state = null, { type, payload }) => {
  switch (type) {
    case FIGHT.START: {
      return {
        ...payload
      }
    }
    case FIGHT.UPDATE: {
      return {
        ...state,
        ...payload
      }
    }
    case FIGHT.END: {
      return null
    }
    default: {
      return state
    }
  }
}
