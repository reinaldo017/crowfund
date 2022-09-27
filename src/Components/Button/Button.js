import './Button.scss'
import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ content, type, disabled, onClick }) => {
  const buttonClass = disabled ? `${type} disabled` : type

  return <button className={buttonClass} disabled={disabled} onClick={onClick}>{content}</button>
}

Button.propTypes = {
  content: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
}

export default Button
