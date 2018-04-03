import React from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './styles.css'

class Row extends React.Component {
  static propTypes = {
    //
  }

  render () {
    const { children } = this.props

    return (
      <div className="row">
        {children}
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
)(Row)
