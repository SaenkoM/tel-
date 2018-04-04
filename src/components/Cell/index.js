import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import TYPES from './types'

import './styles.css'

class Cell extends React.Component {
  static propTypes = {
    type: PropTypes.number.isRequired,
    pos: PropTypes.object.isRequired,
    isCurrentPos: PropTypes.bool.isRequired,
    canMove: PropTypes.bool.isRequired,
    onMove: PropTypes.func.isRequired
  }

  render () {
    const { type, pos, isCurrentPos, canMove, onMove } = this.props

    return (
      <div className={`cell ${TYPES[type]}`}>
        <div
          className={`cell-wrapper${canMove ? ' can-move' : ''}`}
          onClick={canMove ? () => onMove(pos) : () => {}}
        >
          {isCurrentPos ? 'H' : ''}
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
)(Cell)
