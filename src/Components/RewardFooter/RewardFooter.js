import './RewardFooter.scss'
import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button/Button'

const RewardFooter = ({ minPledge, isDisabled, setModalContent, updateStats, reduceStock }) => {
  const handlePledge = () => {
    const pledgeInput = document.querySelector('.footer__pledge-input')

    if (pledgeInput.value > minPledge) {
      const pledge = Number(pledgeInput.value)
      updateStats.addBacked(pledge)
      updateStats.addBackers()
      reduceStock()
      setModalContent('Completed')
    }
  }

  const handleNoReward = (event) => {
    const pledgeInput = document.querySelector('.footer__pledge-input')
    const pledge = Number(pledgeInput.value)
    updateStats.addBacked(pledge)
    updateStats.addBackers()
    setModalContent('Completed')
  }

  return (
    <footer className='footer'>
      <p>Enter your pledge</p>
      <form className='footer__buttons-container'>
        <input className='footer__pledge-input' type='number' min={minPledge} disabled={isDisabled} required={true}/>
        <Button content='Continue' type='cta' onClick={minPledge ? handlePledge : handleNoReward}/>
      </form>
    </footer>
  )
}

RewardFooter.propTypes = {
  minPledge: PropTypes.number,
  isDisabled: PropTypes.bool,
  setModalContent: PropTypes.func,
  updateStats: PropTypes.object,
  reduceStock: PropTypes.func
}

export default RewardFooter
