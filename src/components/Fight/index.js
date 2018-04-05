import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Fiend from './Fiend'
import Card from './Card'

import { startFightAction, updateFightAction } from '../../store/Fight/actions'

import './styles.css'

class Fight extends React.Component {
  static propTypes = {
    fight: PropTypes.object.isRequired,
    startFight: PropTypes.func.isRequired,
    updateFight: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)

    props.startFight({
      fiends: [
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
      ],
      cards: [
        {
          type: 'attack'
        },
        {
          type: 'attack'
        },
        {
          type: 'attack'
        },
        {
          type: 'attack'
        },
        {
          type: 'attack'
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
          {fight.fiends.map((fiend, i) => <Fiend key={i} type={fiend.type} />)}
        </div>
        <div className="cards">
          {fight.cards.map((card, i) => <Card key={i} type={card.type} />)}
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
