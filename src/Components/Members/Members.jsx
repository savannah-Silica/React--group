import React from 'react'
import './Members.css'
import Newsletter from '../Pages/Contact/Newsletter'
import Courasel from '../Courasel/Courasel'
import Member from './Member'

const Members = () => {
  return (
    <>
    <div className='members'>
        <div className="starts">
            <div className="community start">
                <h1>400+</h1>
                <span>Community <br/> Members</span>
            </div>
            <div className="projects start">
                <h1>1</h1>
                <span>Open Source  <br/>Project</span>
            </div>
            <div className="time zones start">
                <h1>5</h1>
                <span>Time <br/>Zones</span>
            </div>
            <div className="stacks start">
                <h1>11</h1>
                <span>Tech <br/> Stacks</span>
            </div>
        </div>
        <div className="members-spotlight">
            <div className="spotlight-header">
                <h2>Members Spotlight</h2>
                <p>Meet some of our exceptional community members who are going out of their way
                    to create great products
                </p>
            </div>
            <div className="spotlight-images desktop">
                <Member />
            </div>
            <div className="mobile">
                <Courasel />
            </div>
        </div>
    </div>
    <Newsletter />
    </>
  )
}

export default Members