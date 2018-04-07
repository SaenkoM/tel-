import { put, takeEvery, select } from 'redux-saga/effects'

import { FIGHT, updateFightAction, startTurnAction } from './Fight/actions'

import Fiends from '../components/Fiends'
import randomInRange from '../components/Utils/randomInRange'

const getCharacter = (state) => state.character

function * fightStart ({ encounter }) {
  console.log('1', encounter)

  const fiends = encounter.fiends.map((fiend) => Fiends[fiend.type].create(fiend.level))

  yield put(updateFightAction({ fiends }))

  yield put(startTurnAction())
}

function * turnStart ({ turn }) {
  const character = yield select(getCharacter)

  console.log('char', character)

  yield put(updateFightAction({
    ap: randomInRange(character.ap.min, character.ap.max),
    cards: [
      {
        type: 'attack'
      },
      {
        type: 'attack'
      },
      {
        type: 'attack'
      }
    ]
  }))
}

function * rootSaga () {
  yield takeEvery(FIGHT.START, fightStart)
  yield takeEvery(FIGHT.START_TURN, turnStart)
}

export default rootSaga
