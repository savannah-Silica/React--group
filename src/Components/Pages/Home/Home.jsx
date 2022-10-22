import React from 'react'
import Header from '../../Header/Header'
import Sponsors from '../../Sponsors/Sponsors'
import Knowus from '../../KnowUS/Knowus'
import About from '../About/About'

const Home = () => {
  return (
    <div className='home-body'>
      <Header />
      <Sponsors />
      <Knowus />
      <About/>
    </div>
  )
}

export default Home