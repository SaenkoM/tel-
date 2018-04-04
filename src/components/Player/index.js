import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './styles.css'

class Player extends React.Component {
  static propTypes = {
    stats: PropTypes.object.isRequired
  }

  render () {
    return (
      <div className="player">
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  stats: state.player
})

const mapDispatchToProps = {
  //
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player)
