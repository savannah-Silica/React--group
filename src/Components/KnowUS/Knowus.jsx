import React from 'react'
import './Knowus.css'
import knowusLogo from '../../Assets/tech.jpg'

const Knowus = () => {
  return (
    <div className='knowus'>
        <div className="knowus-title">
            <h2>Get to know us by our collaborations</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, animi?</p>
        </div>
        <div className="knowus-image">
            <img src={knowusLogo} alt="logo" />
            <div className="knowus-text">
                <h2>Collaboration</h2>
            </div>
        </div>
    </div>
  )
}

export default Knowus