import './Stats.scss'
import React from 'react'
import PropTypes from 'prop-types'
import ProgressBar from '../ProgressBar/ProgressBar'

const Stats = ({ backed, backers, daysLeft }) => {
  const formatter = new Intl.NumberFormat('en-US')
  const formatedBacked = formatter.format(backed)
  const formatedBackers = formatter.format(backers)

  const percentage = (backed / 100000) * 100

  return (
    <article className='stats'>
      <div className='stats__container'>
        <section className='stats__section'>
          <h2 className='stats__number'>${formatedBacked}</h2>
          <p>of $100,000 backed</p>
        </section>
          <hr/>
        <section className='stats__section'>
          <h2 className='stats__number'>{formatedBackers}</h2>
          <p>total backers</p>
        </section>
          <hr/>
        <section className='stats__section'>
          <h2 className='stats__number'>{daysLeft}</h2>
          <p>days left</p>
        </section>
      </div>
      <ProgressBar percentage={percentage}/>
    </article>
  )
}

Stats.propTypes = {
  backed: PropTypes.number,
  backers: PropTypes.number,
  daysLeft: PropTypes.number
}

export default Stats
