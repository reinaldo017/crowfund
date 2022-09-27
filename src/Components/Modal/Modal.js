import './Modal.scss'
import React from 'react'
import PropTypes from 'prop-types'

const Modal = ({ children, isModalVisible, closeModal }) => {
  const handleOverlayClick = event => {
    if (event.target === event.currentTarget) closeModal()
  }

  if (isModalVisible) {
    return (
      <div className='overlay' onClick={handleOverlayClick}>
        <div className='modal-container'>
          {children}
        </div>
      </div>
    )
  } else {
    return null
  }
}

Modal.propTypes = {
  isModalVisible: PropTypes.bool,
  closeModal: PropTypes.func,
  children: PropTypes.any
}

export default Modal
