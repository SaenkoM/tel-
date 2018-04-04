import React from 'react'
import Map from '../Map'
import Fight from '../Fight'

import '../../styles/index.css'

class App extends React.Component {
  render () {
    return (
      <div className="app">
        <Map />
        <Fight />
      </div>
    )
  }
}

export default App
