import './ProgressBar.scss'
import React from 'react'
import PropTypes from 'prop-types'

const ProgressBar = ({ percentage }) => {
  const fillStyles = {
    width: `${percentage}%`
  }
  return (
    <div className='progress-bar'>
        <div className='progress-bar__fill' style={fillStyles}></div>
    </div>
  )
}

ProgressBar.propTypes = {
  percentage: PropTypes.number
}

export default ProgressBar
