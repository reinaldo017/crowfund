import './Reward.scss'
import React from 'react'
import PropTypes from 'prop-types'
import RewardFooter from '../RewardFooter/RewardFooter'

const Reward = ({ info, isSelected, markAsSelected, reduceStock, setModalContent, updateStats }) => {
  const rewardClass = info.left === 0 ? 'reward reward--disabled' : 'reward'
  const selectedClass = isSelected ? 'reward--selected' : ''
  const leftClass = info.minPledge ? 'reward__left' : 'reward__left--hidden'

  return (
    <article className={`${rewardClass} ${selectedClass}`}>
      <div className='reward__container'>
        <header className='reward__header'>
          <input className='reward__input'
            type='radio' id={info.title}
            name='reward' checked={isSelected}
            disabled={info.left === 0}
            onChange={markAsSelected}
          />
          <label className='reward__label' htmlFor={info.title}>
            <h3 className='reward__title'>{info.title}</h3>
            <h3 className='reward__pledge'>
              {info.minPledge ? `Pledge $${info.minPledge} or more` : null}
            </h3>
          </label>
        </header>
        <p className='reward__description'>{info.description}</p>
        <div className={leftClass}>
          <h2 className='reward__number'>{info.left}</h2><span>left</span>
        </div>
      </div>
      {isSelected
        ? <RewardFooter
            minPledge={info.minPledge}
            isDisabled={info.left === 0}
            setModalContent={setModalContent}
            updateStats={updateStats}
            reduceStock={reduceStock}
          />
        : null
      }
    </article>
  )
}

Reward.propTypes = {
  info: PropTypes.object,
  isSelected: PropTypes.bool,
  markAsSelected: PropTypes.func,
  reduceStock: PropTypes.func,
  setModalContent: PropTypes.func,
  updateStats: PropTypes.object
}

export default Reward
