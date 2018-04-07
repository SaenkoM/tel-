import { delay } from 'redux-saga'
import { put, takeEvery, select } from 'redux-saga/effects'

import { FIGHT, updateFightAction, endFightAction, startTurnAction } from './Fight/actions'
import { updateCharacterAction } from './Character/actions'

import Cards from '../components/Cards'
import Fiends from '../components/Fiends'
import randomInRange from '../components/Utils/randomInRange'

const getCharacter = (state) => state.character
const getFight = (state) => state.fight
const getDeck = (state) => state.deck

function * draw () {
  const deck = yield select(getDeck)

  const cards = []

  for (let i = 0; i < 3; i++) {
    const card = deck[randomInRange(0, deck.length - 1)]
    cards.push(Cards[card.type].create(card.level))
  }

  return cards
}

function * checkFightEnd () {
  const fight = yield select(getFight)

  if (!fight.fiends.find((fiend) => fiend.hp.cur)) {
    yield put(endFightAction())
  }
}

function * fightStart ({ encounter }) {
  const fiends = encounter.fiends.map((fiend) => Fiends[fiend.type].create(fiend.level))

  yield put(updateFightAction({ fiends }))

  yield put(startTurnAction())
}

function * turnStart ({ turn }) {
  const fight = yield select(getFight)
  const character = yield select(getCharacter)

  const nextAp = (fight.ap || 0) + randomInRange(character.ap.min, character.ap.max)

  const cards = (yield draw()).map((card) => ({
    ...card,
    canPlay: card.cost.ap <= nextAp && card.cost.mp <= character.mp.cur,
    isPlayed: false
  }))

  yield put(updateFightAction({
    ap: nextAp,
    cards
  }))
}

function * turnEnd ({ turn }) {
  const fight = yield select(getFight)
  const character = yield select(getCharacter)

  for (let i = 0; i < fight.fiends.length; i++) {
    if (!fight.fiends[i].hp.cur) continue

    fight.fiends[i] = {
      ...fight.fiends[i],
      isAttacking: true
    }

    yield put(updateFightAction({
      fiends: fight.fiends
    }))

    yield delay(200)

    Fiends[fight.fiends[i].type].attack(character)

    yield put(updateCharacterAction({
      ...character
    }))

    fight.fiends[i] = {
      ...fight.fiends[i],
      isAttacking: false
    }

    yield put(updateFightAction({
      fiends: fight.fiends
    }))
  }

  yield delay(400)

  yield put(startTurnAction())
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

  const nextAp = fight.ap - fight.cards[card].cost.ap

  fight.cards[card] = {
    ...fight.cards[card],
    isPlayed: true
  }

  fight.cards = fight.cards.map((card) => ({
    ...card,
    canPlay: card.cost.ap <= nextAp && card.cost.mp <= character.mp.cur
  }))

  yield put(updateCharacterAction({
    ...character,
    mp: {
      ...character.mp,
      cur: character.mp.cur - fight.cards[card].cost.mp
    }
  }))

  yield put(updateFightAction({
    ap: nextAp,
    fiends: fight.fiends,
    cards: fight.cards
  }))

  yield checkFightEnd()
}

function * rootSaga () {
  yield takeEvery(FIGHT.START, fightStart)
  yield takeEvery(FIGHT.START_TURN, turnStart)
  yield takeEvery(FIGHT.END_TURN, turnEnd)
  yield takeEvery(FIGHT.CARD_PLAYED, cardPlayed)
}

export default rootSaga
