import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Enemy from './Enemy'

import { updateFightAction } from '../../store/Fight/actions'

import './styles.css'

class Fight extends React.Component {
  static propTypes = {
    fight: PropTypes.object.isRequired,
    updateFight: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)

    this.state = {
      //
    }
  }

  render () {
    return (
      <div className="fight">
        <div className="enemies">
          <Enemy type="wolf" />
          <Enemy type="wolf" />
          <Enemy type="wolf" />
          <Enemy type="wolf" />
          <Enemy type="wolf" />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  fight: state.fight
})

const mapDispatchToProps = {
  updateFight: updateFightAction
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Fight)
