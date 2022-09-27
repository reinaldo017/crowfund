import './App.scss'
import { useState, React } from 'react'
import Header from '../Header/Header'
import Mastercraft from '../Mastercraft/Mastercraft'
import Stats from '../Stats/Stats'
import About from '../About/About'
import Card from '../Card/Card'
import Reward from '../Reward/Reward'
import Modal from '../Modal/Modal'
import Completed from '../Completed/Completed'
import BackThisProject from '../BackThisProject/BackThisProject'

const products =
[
  {
    title: 'Bamboo Stand',
    minPledge: 25,
    description: 'You get an ergonomic stand made of natural bamboo. You\'ve helped us launch our promotional campaing, and you\'ll be added to a special Backer member list.',
    left: 101
  },
  {
    title: 'Black edition stand',
    minPledge: 75,
    description: 'You get a Black Special Edition computer stand and a personal thank you. You\'ll be added to our Backer member list. Shipping is included.',
    left: 64
  },
  {
    title: 'Mahogany Special Edition',
    minPledge: 200,
    description: 'You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You\'ll be added to our Backer member list. Shipping included.',
    left: 0
  }
]

const noReward = {
  title: 'Pledge with no reward',
  description: 'Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updated via email.'
}

const App = () => {
  //  --States--
  //  Rewards
  const [rewards, setRewards] = useState(products)
  const [selectedReward, setSelectedReward] = useState('')
  //  Stats
  const [backed, setBacked] = useState(89934)
  const [backers, setBackers] = useState(5007)
  const daysLeft = 56
  //  Modal
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [modalContent, setModalContent] = useState('Back This Project')

  //  --Helpers--
  const updateStats = {
    addBacked: (amount) => {
      setBacked(backed + amount)
    },

    addBackers: () => {
      setBackers(prev => prev + 1)
    }
  }

  const closeModal = () => {
    setIsModalVisible(false)
  }

  const openModal = () => {
    setIsModalVisible(true)
  }

  const markAsSelected = rewardName => {
    setSelectedReward(rewardName)
  }

  const reduceStock = (rewardTitle) => {
    const rewardToUpdate = rewards.find(reward => reward.title === rewardTitle)
    const updatedReward = { ...rewardToUpdate, left: rewardToUpdate.left - 1 }

    setRewards(prevRewards =>
      prevRewards.map(prevReward => prevReward.title === updatedReward.title ? updatedReward : prevReward)
    )
  }

  const radioCards = rewards.map(reward =>
    <Reward
      key={reward.title}
      info={reward}
      isSelected={selectedReward === reward.title}
      markAsSelected={() => markAsSelected(reward.title)}
      reduceStock={() => reduceStock(reward.title)}
      setModalContent={setModalContent}
      updateStats={updateStats}
    />
  )

  const modalContentJsx = () => {
    if (modalContent === 'Back This Project') {
      return (
        <BackThisProject closeModal={closeModal}>
          <Reward
            info={noReward}
            isSelected={selectedReward === noReward.title}
            markAsSelected={() => markAsSelected(noReward.title)}
            setModalContent={setModalContent}
            updateStats={updateStats}
          />
          {radioCards}
        </BackThisProject>
      )
    } else {
      return <Completed setIsModalVisible={setIsModalVisible} setModalContent={setModalContent}/>
    }
  }

  return (
    <>
      <Header/>
      <main className='main'>
        <Mastercraft setIsModalVisible={setIsModalVisible}/>
        <Stats backed={backed} backers={backers} daysLeft={daysLeft}/>
        <About>
          {rewards.map(reward =>
            <Card
              key={reward.title}
              info={reward}
              openModal={openModal}
              markAsSelected={() => markAsSelected(reward.title)}
            />
          )}
        </About>
      </main>
      <Modal isModalVisible={isModalVisible} closeModal={closeModal}>
        {modalContentJsx()}
      </Modal>
    </>
  )
}

export default App
