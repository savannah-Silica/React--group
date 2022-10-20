import React from 'react'
import './Header.css'
import Animation, { AnimationItem } from '../Animation/Animation'
import gif from '../../Assets/animation.gif'

const Header = () => {
  return (
    <div className='head'>
        <div className="text">
            <div className="div">
                <p>A straight way to</p>
            </div>
            <Animation>
                <AnimationItem>
                    <p>Collaborate</p>
                </AnimationItem>
                <AnimationItem>
                    <p>Open-Source</p>
                </AnimationItem>
                <AnimationItem>
                    <p>Building In Public</p>
                </AnimationItem>
                <AnimationItem>
                    <p>Mentorship</p>
                </AnimationItem>
            </Animation>
        </div>
        <div className="head-title">
            <p>Welcome to Savannah Silica, An open-source community bringing fresh perspective
                and tech solutions.
            </p>
        </div>
        <div className="head-button">
            <button className='head-btn'>Join us</button>
        </div>

        <div className="gif">
            <img src={gif} alt="animation" />
        </div>
    </div>
  )
}

export default Header