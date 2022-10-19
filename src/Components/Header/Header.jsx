import React from 'react'
import './Header.css'
import Animation, { AnimationItem } from '../Animation/Animation'

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
            <p>Welcome to Savannah Silica, An opne-source community bringing frsh perspective
                and tech solutions
            </p>
        </div>
        <div className="head-button">
            <button className='head-btn'>Join us</button>
        </div>
    </div>
  )
}

export default Header