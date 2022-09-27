import './Mastercraft.scss'
import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as MastercraftLogo } from './logo-mastercraft.svg'
import { ReactComponent as BookmarkIcon } from './icon-bookmark.svg'
import Button from '../Button/Button'

const Mastercraft = ({ setIsModalVisible }) => {
  const handleBack = () => {
    setIsModalVisible(true)
  }

  return (
    <article className='mastercraft'>
      <MastercraftLogo className='mastercraft__logo'/>
      <h2 className='mastercraft__title'>Mastercraft Bamboo Monitor Riser</h2>
      <p className='mastercraft__text'>A beautifully handcrafted monitor stand to reduce neck and eye strain.</p>
      <footer className='mastercraft__buttons'>
        <Button content={'Back this project'} type={'cta'} onClick={handleBack}/>
        <button className='mastercraft__bookmark'><BookmarkIcon/></button>
      </footer>
    </article>
  )
}

Mastercraft.propTypes = {
  setIsModalVisible: PropTypes.func
}

export default Mastercraft
