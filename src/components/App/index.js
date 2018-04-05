import React from 'react'
import Map from '../Map'
import Fight from '../Fight'
import Stats from '../Stats'

import '../../styles/index.css'

class App extends React.Component {
  render () {
    return (
      <div className="app">
        <Map />
        <Fight />
        <Stats />
      </div>
    )
  }
}

export default App
