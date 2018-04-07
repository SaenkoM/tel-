import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Cards from '../../Cards'

import './styles.css'

class Card extends React.Component {
  static propTypes = {
    card: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)

    this.card = Cards[props.card.type]

    this.state = {
      //
    }
  }

  onDragStartHandler = (e) => {
    const { id } = this.props

    e.dataTransfer.setData('card', id)
  }

  render () {
    const { card } = this.props

    return (
      <div className={`card ${card.type}`} draggable onDragStart={this.onDragStartHandler}>
        <div className="icon">
          <img src={`/assets/cards/${this.card.image}`} alt="" />
        </div>
        <div className="effect">
          {this.card.text.map((text, i) => <p key={i}>{text}</p>)}
        </div>
        <div className="cost">
          <div className="ap">
            {this.card.cost.ap}
          </div>
          <div className="mp">
            {this.card.cost.mp}
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
