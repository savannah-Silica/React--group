import React from 'react'
import './Contact.css'
import Newsletter from './Newsletter'
import {
  BsWhatsapp,
  BsTwitter,
  BsFacebook,
  BsInstagram,
  BsSlack
} from 'react-icons/bs'


const Contact = () => {
  return (
    <div className='main'>
      <div className='contact'>
        <div className="reach-out">
          <h2>Reach out to us</h2>
          <div className="contact-icons">
            <div className="contact-icon">
              <div className="icon-item">
                <BsWhatsapp />
              </div>
              <div className="icon-text">
                <p>Chat with us</p>
                <p className="channel-path">0711 111 111</p>
              </div>
            </div>
            <div className="contact-icon">
              <div className="icon-item">
                <BsTwitter />
              </div>
              <div className="icon-text">
                <p>Tweet to us</p>
                <p className="channel-path">@savannahtechies</p>
              </div>
            </div>
            <div className="contact-icon">
              <div className="icon-item">
                <BsSlack />
              </div>
              <div className="icon-text">
                <p>Follow our channel</p>
                <p className="channel-path">Savannah Silica</p>
              </div>
            </div>
            <div className="contact-icon">
              <div className="icon-item">
                <BsInstagram />
              </div>
              <div className="icon-text">
                <p>Follow us</p>
                <p className="channel-path">@savannah_silica</p>
              </div>
            </div>
            <div className="contact-icon">
              <div className="icon-item">
                <BsFacebook />
              </div>
              <div className="icon-text">
                <p>Friend us</p>
                <p className="channel-path">Savnnah Silica</p>
              </div>
            </div>
          </div>
        </div>
        <div className="form">
          <form action="#">
            <label htmlFor="">Your Name
            <input type="text" placeholder='Enter your name'/></label>
            <label htmlFor="">Your Email
            <input type="text" placeholder='Enter your Email'/></label>
            <label htmlFor="">Your Message
            <textarea name="" id="" cols="30" rows="10" placeholder='Hello'></textarea>
            </label>
            <input type="submit" value="Submit"/>
          </form>
        </div>
      </div>
      <Newsletter />
    </div>
  )
}

export default Contact