import { useState } from 'react'
import logo from '../../Assets/logo.png'
import './NavBar.css'
import { BiMenu } from 'react-icons/bi'
import { BsMoon } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
	const [isExpanded, setIsExpanded] = useState(false);
	const [sticky, setSticky] = useState('');

	//update sticky state
	window.addEventListener('scroll', () => {
		if (window.pageYOffset > 80) {
			setSticky("sticky");
		} else setSticky("");
	})

	return (
		<header className={`header ${sticky === "sticky" ? `sticky` : ""}`}>
			<div className="logo">
				<img src={logo} alt="logo" />
			</div>

			<nav className={`nav-links ${isExpanded ? `nav-toggled` : ""}`}>
				<NavLink onClick={() => setIsExpanded(!isExpanded)} 
					className="nav-link" to="/home">Home</NavLink>
				<NavLink onClick={() => setIsExpanded(!isExpanded)} 
					className="nav-link" to="/about">About Us</NavLink>
				<NavLink onClick={() => setIsExpanded(!isExpanded)} 
					className="nav-link" to="/services">Services</NavLink>
				<NavLink onClick={() => setIsExpanded(!isExpanded)} 
					className="nav-link" to="/contacts">Contact Us</NavLink>
			</nav>

			<div className="nav-buttons">
				<BsMoon className='nav-icons theme-toggle' />
				<button className='btn'>Sign In</button>
				<BiMenu className='nav-icons nav-toggle' onClick={() => setIsExpanded(!isExpanded)} />
			</div>
		</header>
	)
}

export default NavBar