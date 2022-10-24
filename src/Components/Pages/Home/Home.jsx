import React from 'react'
import Header from '../../Header/Header'
import Sponsors from '../../Sponsors/Sponsors'
import Knowus from '../../KnowUS/Knowus'

const Home = () => {
  return (
    <div className='home-body'>
      <Header />
      <Sponsors />
      <Knowus />
    </div>
  )
}

export default Home