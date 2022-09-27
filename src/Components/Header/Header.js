import './Header.scss'
import React from 'react'
import Nav from '../Nav/Nav'

const sections = ['About', 'Discover', 'Get Started']

const Header = () => {
  return (
    <header className='header'>
      <Nav sections={sections}/>
    </header>
  )
}

export default Header
