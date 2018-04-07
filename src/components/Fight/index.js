import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Fiend from './Fiend'
import Card from './Card'

import './styles.css'

class Fight extends React.Component {
  static propTypes = {
    fight: PropTypes.object
  }

  render () {
    const { fight } = this.props

    if (!fight) return null

    return (
      <div className="fight">
        <div className="enemies">
          {fight.fiends.map((fiend, i) => <Fiend key={i} fiend={fiend} />)}
        </div>
        <div className="info">
          <div className="ap">{`AP: ${42}`}</div>
          <div className="end-turn">End turn</div>
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
  //
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Fight)
