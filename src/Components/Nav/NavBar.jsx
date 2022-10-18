import { useState } from 'react'
import logo from '../../Assets/logo.jpg'
import './NavBar.css'
import {BiMenu} from 'react-icons/bi'
import {BsMoon} from 'react-icons/bs'

const NavBar = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
     <header className="header">
        <div className="logo">
            <img src={logo} alt="logo" />   
        </div>

        <nav className="navigation">
            <div className={isExpanded ? `nav-items expanded` : `nav-items`}>
                <a href="/">About</a>
                <a href="/">Services</a>
                <a href="/">Contact</a>
            </div>
            <div className="nav-buttons">
               <BsMoon className='nav-icons theme-toggle'/>
                <button>Sign In</button>
                <BiMenu className='nav-icons nav-toggle' onClick={ () => setIsExpanded(!isExpanded)}/>
            </div>
        </nav>
    </header>
  )
}

export default NavBar