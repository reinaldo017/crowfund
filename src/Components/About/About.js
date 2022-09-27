import './About.scss'
import React from 'react'
import PropTypes from 'prop-types'

const About = ({ children }) => {
  return (
    <section className='about'>
      <h2 className='about__title'>About this project</h2>
      <p className='about__paragraph'>
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
        platform that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture
        and make you more comfortable while at work, helping you stay focused on the task at hand.
      </p>
      <p className='about__paragraph'>
        Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.
      </p>
      <ul className='about__cards'>{children}</ul>
    </section>
  )
}

About.propTypes = {
  children: PropTypes.array
}

export default About
