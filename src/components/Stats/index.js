import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { cardPlayedAction } from '../../store/Fight/actions'

import Progress from '../Progress'

import './styles.css'

class Stats extends React.Component {
  static propTypes = {
    hp: PropTypes.object.isRequired,
    mp: PropTypes.object.isRequired,
    playCard: PropTypes.func.isRequired
  }

  onDragOverHandler = (e) => {
    e.preventDefault()
  }

  onDropHandler = (e) => {
    const { playCard } = this.props

    const card = e.dataTransfer.getData('card')
    playCard({ card, target: 'self' })
  }

  render () {
    const { hp, mp } = this.props

    return (
      <div className="character-stats" onDragOver={this.onDragOverHandler} onDrop={this.onDropHandler}>
        <div className="hp">
          <Progress cur={hp.cur} max={hp.max} />
        </div>
        <div className="mp">
          <Progress cur={mp.cur} max={mp.max} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  hp: state.character.hp,
  mp: state.character.mp
})

const mapDispatchToProps = {
  playCard: cardPlayedAction
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stats)
