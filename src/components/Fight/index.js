import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Enemy from './Enemy'
import Card from './Card'

import { startFightAction, updateFightAction } from '../../store/Fight/actions'

import './styles.css'

class Fight extends React.Component {
  static propTypes = {
    fight: PropTypes.object.isRequired,
    updateFight: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)

    props.startFight({
      enemies: [
        {
          type: 'wolf',
          stats: {
            health: {
              cur: 9,
              max: 14
            }
          }
        },
        {
          type: 'wolf',
          stats: {
            health: {
              cur: 9,
              max: 14
            }
          }
        },
        {
          type: 'wolf',
          stats: {
            health: {
              cur: 9,
              max: 14
            }
          }
        }
      ]
    })

    this.state = {
      //
    }
  }

  render () {
    const { fight } = this.props

    if (!fight) return null

    return (
      <div className="fight">
        <div className="enemies">
          {fight.enemies.map((enemy, i) => <Enemy key={i} type={enemy.type} />)}
        </div>
        <div className="cards">
          <Card type="attack" />
          <Card type="attack" />
          <Card type="attack" />
          <Card type="attack" />
          <Card type="attack" />
          <Card type="attack" />
          <Card type="attack" />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  fight: state.fight
})

const mapDispatchToProps = {
  startFight: startFightAction,
  updateFight: updateFightAction
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Fight)
