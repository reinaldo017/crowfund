import './BackThisProject.scss'
import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as CloseIcon } from './icon-close-modal.svg'

const BackThisProject = ({ children, closeModal }) => {
  return (
    <section className='back'>
      <header className='back__header'>
        <h2 className='back__title'>Back This Project</h2>
        <CloseIcon className='back__close-icon' onClick={closeModal}/>
      </header>
      <p className='back__paragraph'>
        Want to support us in bringing Mastercraft
        Bamboo Monitor Riser out in the world?
      </p>
      <div className='back__cards-container'>
        {children}
      </div>
    </section>
  )
}

BackThisProject.propTypes = {
  children: PropTypes.any,
  closeModal: PropTypes.func
}

export default BackThisProject
