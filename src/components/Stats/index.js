import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Progress from '../Progress'

import './styles.css'

class Stats extends React.Component {
  static propTypes = {
    hp: PropTypes.object.isRequired,
    mp: PropTypes.object.isRequired
  }

  render () {
    const { hp, mp } = this.props

    return (
      <div className="character-stats">
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
  //
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stats)
