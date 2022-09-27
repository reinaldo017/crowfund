import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as CheckIcon } from './icon-check.svg'
import Button from '../Button/Button'
import './Completed.scss'

const Completed = ({ setIsModalVisible, setModalContent }) => {
  const handleClick = () => {
    setIsModalVisible(false)
    setModalContent('Back This Project')
  }
  return (
    <section className='completed'>
        <CheckIcon />
        <h2 className='completed__title'>Thanks for your support!</h2>
        <p className='completed__paragraph'>
            Your pledge brings us one step closer to sharing Mastercraft
            Bamboo Monitor Riser worldwide. You will get an email once our
            campaing is completed.
        </p>
        <Button content='Got it!' type='cta' onClick={handleClick}/>
    </section>
  )
}

Completed.propTypes = {
  setIsModalVisible: PropTypes.func,
  setModalContent: PropTypes.func
}

export default Completed
