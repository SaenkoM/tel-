import { combineReducers } from 'redux'

import app from './App/reducer'
import data from './Data/reducer'
import map from './Map/reducer'
import character from './Character/reducer'
import fight from './Fight/reducer'

export default combineReducers({
  app,
  data,
  map,
  character,
  fight
})
