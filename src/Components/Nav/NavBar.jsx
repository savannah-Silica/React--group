import { useState } from 'react'
import logo from '../../Assets/logo.png'
import './NavBar.css'
import { BiMenu } from 'react-icons/bi'
import { BsMoon } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [active, setActive] = useState('#');
  const [sticky, setSticky] = useState('');

  //update sticky state
  window.addEventListener('scroll', ()=>{
    if(window.pageYOffset > 80){
         setSticky("sticky");
    }else setSticky("");
  })

  return (
     <header className={`header ${sticky === "sticky" ? `sticky` : ""}`}>
        <div className="logo">
            <img src={logo} alt="logo" />   
        </div>

        <nav className={`nav-links ${isExpanded ? `nav-toggled` : ""}`}>
            <a className={`nav-link ${active === '#' ? `active` : ''}`} href="/"
            onClick={()=>setActive("#")}>Home</a>
            <a className={`nav-link ${active === '1' ? `active` : ''}`} href="/"
            onClick={()=>setActive("1")}>About Us</a>
            <a className={`nav-link ${active === '2' ? `active` : ""}`} href="/"
            onClick={()=>setActive('2')}>Services</a>
            <a className={`nav-link ${active === '3' ? `active` : ""}`} href="/"
            onClick={()=>setActive('3')}><Link to="/ContactUs">Contact Us</Link></a>
        </nav>

        <div className="nav-buttons">
            <BsMoon className='nav-icons theme-toggle'/>
            <button className='btn'>Sign In</button>
            <BiMenu className='nav-icons nav-toggle' onClick={ () => setIsExpanded(!isExpanded)}/>
        </div>
    </header>
  )
}

export default NavBar