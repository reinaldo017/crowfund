import React from 'react'
// import PropTypes from 'prop-types'
import { ReactComponent as MastercraftLogo } from './logo-mastercraft.svg'
import { ReactComponent as BookmarkIcon } from './icon-bookmark.svg'
import './Mastercraft.css'

const Mastercraft = () => {
  return (
    <article className='mastercraft'>
        <MastercraftLogo className='mastercraft__logo'/>
        <h3 className='mastercraft__title'>Mastercraft Bamboo Monitor Riser</h3>
        <p className='mastercraft__text'>A beautifully handcrafted monitor stand to reduce neck and eye strain.</p>
        <footer className='mastercraft__buttons'>
            <button className='mastercraft__call-to-action'>Back this project</button>
            <button className='mastercraft__bookmark'><BookmarkIcon/></button>
        </footer>
    </article>
  )
}

export default Mastercraft
