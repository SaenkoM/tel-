import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classNames from 'classnames'

import './styles.css'

class Card extends React.Component {
  static propTypes = {
    card: PropTypes.object.isRequired
  }

  onDragStartHandler = (e) => {
    const { id } = this.props

    e.dataTransfer.setData('card', id)
  }

  render () {
    const { card } = this.props

    const cardClasses = classNames('card', card.type, {
      'cant-play': !card.canPlay,
      isPlayed: card.isPlayed
    })

    return (
      <div className={cardClasses} draggable onDragStart={this.onDragStartHandler}>
        <div className="icon">
          <img src={`/assets/cards/${card.image}`} alt="" />
        </div>
        <div className="effect">
          {card.text.map((text, i) => <p key={i}>{text}</p>)}
        </div>
        <div className="cost">
          <div className="ap">
            {card.cost.ap}
          </div>
          <div className="mp">
            {card.cost.mp}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  //
})

const mapDispatchToProps = {
  //
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card)
