import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classNames from 'classnames'

import Fiends from '../../Fiends'
import Progress from '../../Progress'

import { cardPlayedAction } from '../../../store/Fight/actions'

import './styles.css'

class Enemy extends React.Component {
  static propTypes = {
    fiend: PropTypes.object.isRequired,
    playCard: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)

    this.fiend = Fiends[props.fiend.type]

    this.state = {
      //
    }
  }

  componentWillReceiveProps (a, b) {
    console.log(a, b)
  }

  onDragOverHandler = (e) => {
    e.preventDefault()
  }

  onDropHandler = (e) => {
    const { playCard, id } = this.props

    const card = e.dataTransfer.getData('card')
    playCard({ card, target: id })
  }

  render () {
    const { fiend } = this.props

    console.log('fiend render', fiend)

    const fiendClasses = classNames('fiend', fiend.type, {
      isAttacking: fiend.isAttacking
    })

    return (
      <div className={fiendClasses} onDragOver={this.onDragOverHandler} onDrop={this.onDropHandler}>
        <div className="icon">
          <img src={`/assets/fiends/${this.fiend.image}`} alt="" />
        </div>
        <div className="stats">
          <div className="name">
            {this.fiend.name}
          </div>
          <div className="health">
            <Progress cur={fiend.hp.cur} max={fiend.hp.max} />
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
  playCard: cardPlayedAction
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Enemy)
