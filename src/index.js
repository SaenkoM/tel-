import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './components/App/index'
import createStore from './store'

import registerServiceWorker from './registerServiceWorker'

const store = createStore({})

const render = Component =>
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('root')
  )

render(App)

registerServiceWorker()
