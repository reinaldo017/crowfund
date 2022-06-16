import React from 'react'
import PropTypes from 'prop-types'
import DesktopLinks from '../DektopLinks/DesktopLinks'
import { ReactComponent as CrowfundLogo } from './logo.svg'
import { ReactComponent as HamburgerLogo } from './icon-hamburger.svg'
import './Header.css'

const Header = ({ links, toggleMobileMenu }) => {
  return (
    <header className='header'>
      <nav className='header__nav'>
        <CrowfundLogo onClick={toggleMobileMenu}/>
        <HamburgerLogo className='hamburger-logo' onClick={toggleMobileMenu}/>
        <DesktopLinks links={links}/>

      </nav>
    </header>
  )
}

Header.propTypes = {
  links: PropTypes.array,
  toggleMobileMenu: PropTypes.func
}

export default Header
