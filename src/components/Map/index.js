import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import maps from './maps'
import Row from '../Row'
import Cell from '../Cell'

import './styles.css'

class Map extends React.Component {
  static propTypes = {
    map: PropTypes.object.isRequired
  }

  render () {
    const { map } = this.props
    const currentMap = maps[`floor${map.floor}`].map

    return (
      <div className="map">
        {currentMap.map((row, i) =>
          <Row key={i}>{row.map((cellType, j) => (
            <Cell
              key={j}
              type={cellType}
              isCurrentPos={i === map.pos.y && j === map.pos.x}
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
