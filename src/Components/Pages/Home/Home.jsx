import React from 'react'
import Header from '../../Header/Header'
import Sponsors from '../../Sponsors/Sponsors'
import Knowus from '../../KnowUS/Knowus'
import Members from '../../Members/Members'

const Home = () => {
  return (
    <div className='home-body'>
      <Header />
      <Sponsors />
      <Knowus />
      <Members />
    </div>
  )
}

export default Home