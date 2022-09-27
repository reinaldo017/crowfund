import './Card.scss'
import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button/Button'

const Card = ({ info, markAsSelected, openModal }) => {
  const sectionClass = info.left === 0
    ? 'card card--disabled'
    : 'card'

  const handleClick = () => {
    openModal()
    markAsSelected()
  }

  return (
    <section className={sectionClass}>
      <h3 className='card__title'>{info.title}</h3>
      <h3 className='card__pledge'>Pledge ${info.minPledge} or more</h3>
      <p className='card__description'>{info.description}</p>
      <div className='card__left'>
        <h2 className='card__number'>{info.left}</h2><span>left</span>
      </div>
      <Button content={'Select Reward'} type={'cta'} disabled={info.left === 0} onClick={handleClick}/>
    </section>
  )
}

Card.propTypes = {
  info: PropTypes.object,
  markAsSelected: PropTypes.func,
  openModal: PropTypes.func
}

export default Card
