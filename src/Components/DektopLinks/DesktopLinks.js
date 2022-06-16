import React from 'react'
import PropTypes from 'prop-types'
import './DesktopLinks.css'

const DesktopLinks = ({ links }) => {
  const linksArr = links.map(linkName => {
    return (
        <li key={linkName} className='links__li'>
          <a className='links__a'>{linkName}</a>
        </li>
    )
  })

  return (
      <ul className='links'>
        {linksArr}
      </ul>
  )
}

DesktopLinks.propTypes = {
  links: PropTypes.array
}

export default DesktopLinks
