import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import throttle from 'lodash/throttle'

import reducers from './reducers'
import rootSaga from './sagas'

import { loadState, saveState } from '../components/localStorage'

const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)

  const result = next(action)

  console.log('next state', JSON.parse(JSON.stringify(store.getState())))
  console.groupEnd()

  return result
}

export default () => {
  const sagaMiddleware = createSagaMiddleware()

  const persistedState = loadState()

  const store = createStore(
    reducers,
    persistedState,
    applyMiddleware(logger, sagaMiddleware)
  )

  store.subscribe(throttle(() => {
    saveState(store.getState())
  }), 1000)

  sagaMiddleware.run(rootSaga)

  if (module.hot) module.hot.accept('./reducers', () => store.replaceReducer(reducers))

  return store
}
