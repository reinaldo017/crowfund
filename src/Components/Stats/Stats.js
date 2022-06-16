import React from 'react'
import PropTypes from 'prop-types'
import './Stats.css'

const Stats = ({ backed, backers, daysLeft }) => {
  const formatter = new Intl.NumberFormat('en-US')
  return (
    <article className='stats'>
        <section className='stats__section'>
          <h2>${formatter.format(backed)}</h2>
          <p>of $100,000 backed</p>
          <hr/>
        </section>
        <section className='stats__section'>
          <h2>{formatter.format(backers)}</h2>
          <p>total backers</p>
          <hr/>
        </section>
        <section className='stats__section'>
          <h2>{daysLeft}</h2>
          <p>days left</p>
          <hr/>
        </section>
        <section className='stats__section'>
          <div className='stats__progress-bar'>
              <div className='stats__progress-bar-fill'></div>
          </div>
        </section>
    </article>
  )
}

Stats.propTypes = {
  backed: PropTypes.number,
  backers: PropTypes.number,
  daysLeft: PropTypes.number
}

export default Stats
