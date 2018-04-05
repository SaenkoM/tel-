import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Cards from '../../Cards'

import './styles.css'

class Card extends React.Component {
  static propTypes = {
    type: PropTypes.string.isRequired
  }

  constructor (props) {
    super(props)

    this.card = Cards[props.type]

    this.state = {
      //
    }
  }

  render () {
    const { type } = this.props

    return (
      <div className={`card ${type}`}>
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
