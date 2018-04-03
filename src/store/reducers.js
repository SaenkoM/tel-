import { combineReducers } from 'redux'

import app from './App/reducer'
import data from './Data/reducer'
import map from './Map/reducer'

export default combineReducers({
  app,
  data,
  map
})
