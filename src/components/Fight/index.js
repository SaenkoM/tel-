import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './styles.css'

class Fight extends React.Component {
  static propTypes = {
    fight: PropTypes.string.isRequired
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
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  fight: state.fight
})

const mapDispatchToProps = {
  //
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Fight)
