import { put, takeEvery, select } from 'redux-saga/effects'

import { FIGHT, updateFightAction } from './Fight/actions'

import Fiends from '../components/Fiends'

const getCharacter = (state) => state.character

function * fightStart ({ encounter }) {
  console.log('1', encounter)

  const fiends = encounter.fiends.map((fiend) => Fiends[fiend.type].create(fiend.level))

  const character = yield select(getCharacter)

  console.log('char', character)

  yield put(updateFightAction({
    fiends,
    cards: [
      {
        type: 'attack'
      },
      {
        type: 'attack'
      },
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
}

export default rootSaga
