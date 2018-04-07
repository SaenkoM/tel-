import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Fiends from '../../Fiends'
import Progress from '../../Progress'

import './styles.css'

class Enemy extends React.Component {
  static propTypes = {
    fiend: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)

    this.fiend = Fiends[props.fiend.type]

    this.state = {
      //
    }
  }

  render () {
    const { fiend } = this.props

    return (
      <div className={`fiend ${fiend.type}`}>
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
  //
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Enemy)
