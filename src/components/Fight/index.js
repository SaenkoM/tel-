import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Fiend from './Fiend'
import Card from './Card'

import './styles.css'

class Fight extends React.Component {
  static propTypes = {
    fight: PropTypes.object,
    character: PropTypes.object
  }

  render () {
    const { fight } = this.props

    if (!fight) return null

    return (
      <div className="fight">
        <div className="enemies">
          {fight.fiends.map((fiend, i) => <Fiend key={i} fiend={fiend} id={i} />)}
        </div>
        <div className="info">
          <div className="ap">{`AP: ${fight.ap}`}</div>
          <div className="end-turn">End turn</div>
        </div>
        <div className="cards">
          {fight.cards.map((card, i) => <Card key={i} card={card} id={i} />)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  fight: state.fight,
  character: state.character
})

const mapDispatchToProps = {
  //
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Fight)
