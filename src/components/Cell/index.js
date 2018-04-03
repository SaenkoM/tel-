import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import TYPES from './types'

import './styles.css'

class Cell extends React.Component {
  static propTypes = {
    type: PropTypes.number.isRequired,
    isCurrentPos: PropTypes.bool.isRequired
  }

  render () {
    const { type, isCurrentPos } = this.props

    return (
      <div className={`cell ${TYPES[type]}`}>
        {isCurrentPos ? 'H' : ''}
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
