import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import maps from './maps'
import testRandom from '../Utils/testRandom'

import Row from '../Row'
import Cell from '../Cell'

import { updateMapAction } from '../../store/Map/actions'
import { startFightAction } from '../../store/Fight/actions'

import './styles.css'

class Map extends React.Component {
  static propTypes = {
    map: PropTypes.object.isRequired,
    updateMap: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)

    this.currentMap = maps[`floor${props.map.floor}`]
  }

  move = (pos) => {
    const { updateMap, startFight } = this.props

    updateMap({ pos })

    const posFight = this.currentMap.fights[pos.y][pos.x]

    if (posFight && testRandom(posFight.encounterChance)) {
      const encountersChances = posFight.encounters.map((encounter) => encounter.chance)
      const encounter = posFight.encounters[testRandom(encountersChances)]
      startFight(encounter)
    }
  }

  render () {
    const { map } = this.props

    return (
      <div className="map">
        {this.currentMap.map.map((row, i) =>
          <Row key={i}>{row.map((cellType, j) => (
            <Cell
              key={j}
              type={cellType}
              pos={{ x: j, y: i }}
              isCurrentPos={i === map.pos.y && j === map.pos.x}
              canMove={cellType !== 0 && ((i === map.pos.y && j === map.pos.x + 1) ||
                (i === map.pos.y && j === map.pos.x - 1) ||
                (j === map.pos.x && i === map.pos.y + 1) ||
                (j === map.pos.x && i === map.pos.y - 1))}
              onMove={this.move}
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
  updateMap: updateMapAction,
  startFight: startFightAction
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map)
