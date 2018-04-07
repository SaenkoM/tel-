import { put, takeEvery, select } from 'redux-saga/effects'

import { FIGHT, updateFightAction, startTurnAction } from './Fight/actions'

import Cards from '../components/Cards'
import Fiends from '../components/Fiends'
import randomInRange from '../components/Utils/randomInRange'

const getCharacter = (state) => state.character
const getFight = (state) => state.fight

function * fightStart ({ encounter }) {
  console.log('1', encounter)

  const fiends = encounter.fiends.map((fiend) => Fiends[fiend.type].create(fiend.level))

  yield put(updateFightAction({ fiends }))

  yield put(startTurnAction())
}

function * turnStart ({ turn }) {
  const character = yield select(getCharacter)

  const apGain = randomInRange(character.ap.min, character.ap.max)
  console.log('char', character)

  yield put(updateFightAction({
    ap: apGain,
    cards: [
      {
        type: 'heal',
        canPlay: true,
        isPlayed: false
      },
      {
        type: 'attack',
        canPlay: true,
        isPlayed: false
      },
      {
        type: 'attack',
        canPlay: true,
        isPlayed: false
      }
    ]
  }))
}

function * cardPlayed ({ data }) {
  const { card, target } = data
  console.log(card, target)

  const fight = yield select(getFight)
  const character = yield select(getCharacter)

  if (target === 'self') {
    Cards[fight.cards[card].type].execute(character)
  } else {
    Cards[fight.cards[card].type].execute(fight.fiends[target])
    fight.fiends[target] = { ...fight.fiends[target] } // sad line of code
  }

  fight.cards[card] = {
    ...fight.cards[card],
    isPlayed: true
  }

  yield put(updateFightAction({
    fiends: fight.fiends,
    cards: fight.cards
  }))
}

function * rootSaga () {
  yield takeEvery(FIGHT.START, fightStart)
  yield takeEvery(FIGHT.START_TURN, turnStart)
  yield takeEvery(FIGHT.CARD_PLAYED, cardPlayed)
}

export default rootSaga
