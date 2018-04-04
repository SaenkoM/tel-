import React from 'react'

import './styles.css'

const Progress = (props) => {
  const { max, cur } = props

  return (
    <div className="progress">
      <div className="progress-inner" style={{ width: `${cur / max * 100}%` }}>
        {`${cur}/${max}`}
      </div>
    </div>
  )
}

export default Progress
