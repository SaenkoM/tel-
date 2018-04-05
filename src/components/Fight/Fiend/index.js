import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Fiends from '../../Fiends'
import Progress from '../../Progress'

import './styles.css'

class Enemy extends React.Component {
  static propTypes = {
    type: PropTypes.string.isRequired
  }

  constructor (props) {
    super(props)

    this.fiend = Fiends[props.type]

    this.state = {
      //
    }
  }

  render () {
    const { type } = this.props

    return (
      <div className={`fiend ${type}`}>
        <div className="icon">
          <img src={`/assets/fiends/${this.fiend.image}`} alt="" />
        </div>
        <div className="stats">
          <div className="name">
            {this.fiend.name}
          </div>
          <div className="health">
            <Progress cur={9} max={14} />
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
)(Enemy)
