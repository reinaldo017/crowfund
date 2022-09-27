import './Nav.scss'
import { React, useState } from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as CrowfundLogo } from './logo.svg'
import { ReactComponent as HamburgerLogo } from './icon-hamburger.svg'
import { ReactComponent as CloseIcon } from './icon-close-menu.svg'
import Links from '../Links/Links'

const Nav = ({ sections }) => {
//  State
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  // Helpers
  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu)
  }
  return (
    <>
      <nav className='nav'>
          <CrowfundLogo />
          { showMobileMenu === true
            ? <CloseIcon className='close-icon' onClick={toggleMobileMenu}/>
            : <HamburgerLogo className='hamburger-logo' onClick={toggleMobileMenu}/>
          }
          {showMobileMenu && <Links links={sections} className='mobile-links'/>}
          <Links links={sections} className='desktop-links'/>
      </nav>
      {showMobileMenu && <div className='menu-overlay'></div>}
    </>
  )
}

Nav.propTypes = {
  sections: PropTypes.array
}

export default Nav
