import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import maps from './maps'
import Row from '../Row'
import Cell from '../Cell'

import './styles.css'

class Map extends React.Component {
  static propTypes = {
    map: PropTypes.string.isRequired
  }

  constructor (props) {
    super(props)

    this.state = {
      curX: maps[props.map].config.startPosX,
      curY: maps[props.map].config.startPosY
    }
  }

  render () {
    console.log(this.state)
    const { curX, curY } = this.state
    const map = maps[this.props.map].map

    return (
      <div className="map">
        {map.map((row, i) =>
          <Row key={i}>{row.map((cellType, j) => (
            <Cell
              key={j}
              type={cellType}
              isCurrentPos={i === curY && j === curX}
            />))
          }</Row>)}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  map: state.map
})

const mapDispatchToProps = {
  //
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map)
