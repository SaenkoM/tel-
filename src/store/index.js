import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducers from './reducers'
import rootSaga from './sagas'

const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)

  const result = next(action)

  console.log('next state', JSON.parse(JSON.stringify(store.getState())))
  console.groupEnd()

  return result
}

export default initialState => {
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(logger, sagaMiddleware)
  )

  sagaMiddleware.run(rootSaga)

  if (module.hot) module.hot.accept('./reducers', () => store.replaceReducer(reducers))

  return store
}
