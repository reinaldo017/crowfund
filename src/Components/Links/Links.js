import React from 'react'
import PropTypes from 'prop-types'
import './Links.scss'

const Links = ({ links, className }) => {
  const linksArr = links.map(linkName => {
    return (
        <li key={linkName} className={`${className}__li`}>
          <a className={`${className}__a`} href='#'>{linkName}</a>
        </li>
    )
  })

  return (
      <ul className={className}>
        {linksArr}
      </ul>
  )
}

Links.propTypes = {
  links: PropTypes.array,
  className: PropTypes.string
}

export default Links
