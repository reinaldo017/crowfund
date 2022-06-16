import { useState, React } from 'react'
import './App.css'
import Header from '../Header/Header'
import MobileMenu from '../MobileMenu/MobileMenu'
import Mastercraft from '../Mastercraft/Mastercraft'
import Stats from '../Stats/Stats'
import About from '../About/About'

const sections = ['About', 'Discover', 'Get Started']

const App = () => {
  //  States
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [backed, setBacked] = useState(89934)
  const [backers, setBackers] = useState(5007)
  const daysLeft = 56

  //  Helpers
  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu)
  }

  const addBacked = (amount) => {
    setBacked(prev => prev + amount)
  }

  const addBackers = () => {
    setBackers(prev => prev++)
  }

  return (
    <main>
      <Header links={sections} toggleMobileMenu={toggleMobileMenu}/>
      {showMobileMenu && <MobileMenu links={sections} toggleMobileMenu={toggleMobileMenu}/>}
      <article className='content'>
        <Mastercraft />
        <Stats backed={backed} backers={backers} daysLeft={daysLeft}/>
        <About addBacked={addBacked} addBackers={addBackers}/>
      </article>
    </main>
  )
}

export default App
