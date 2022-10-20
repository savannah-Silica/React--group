import React from 'react'
import mradi from '../../Assets/mradi.png'
import './Sponsors.css'

const Sponsors = () => {
  return (
    <div className='sponsors'>
        <div className="sponsors-title">
            <h2>Sponsored By</h2>
        </div>
        <div className="sponsor-logo">
            <a href="https://mradi.co/">
                <img src={mradi} alt="mradi" />
            </a>
        </div>
    </div>
  )
}

export default Sponsors