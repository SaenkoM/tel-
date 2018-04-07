import { put, takeEvery, select } from 'redux-saga/effects'

import { FIGHT, updateFightAction, startTurnAction } from './Fight/actions'
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

  console.log(cards)

  return cards
}

function * fightStart ({ encounter }) {
  const fiends = encounter.fiends.map((fiend) => Fiends[fiend.type].create(fiend.level))

  yield put(updateFightAction({ fiends }))

  yield put(startTurnAction())
}

function * turnStart ({ turn }) {
  const character = yield select(getCharacter)

  const apGain = randomInRange(character.ap.min, character.ap.max)

  const cards = (yield draw()).map((card) => ({
    ...card,
    canPlay: card.cost.ap <= apGain && card.cost.mp <= character.mp.cur,
    isPlayed: false
  }))

  yield put(updateFightAction({
    ap: apGain,
    cards
  }))
}

function * turnEnd ({ turn }) {
  const character = yield select(getCharacter)

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
}

function * rootSaga () {
  yield takeEvery(FIGHT.START, fightStart)
  yield takeEvery(FIGHT.START_TURN, turnStart)
  yield takeEvery(FIGHT.END_TURN, turnEnd)
  yield takeEvery(FIGHT.CARD_PLAYED, cardPlayed)
}

export default rootSaga
