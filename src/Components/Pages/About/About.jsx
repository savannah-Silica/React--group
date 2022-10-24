import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import about from '../../../Assets/about.svg'
import './About.css'
import Essentials from './sections/essentials'

const About = () => {
	return (
		<>
			<div className='about-intro'>
				<div className="about-text">
					<h1>We Are <span>SAVANNAH SILICA</span></h1>
					<p>When you join us, you'll have the oppurtunity to learn new skills in a variety of formats.
						You'll also meet local developers virtually or in-person with similar interest in technology.
						The community prides itself on being an inclusive environment where everyone and anyone interested
						in tech-from beginner developers to experienced professionals are wecome to join
					</p>
					<div className="about-button">
						<button>Build in Public <BsArrowRight /></button>
					</div>
				</div>
				<div className="about-img">
					<img src={about} alt="" />
				</div>
			</div>

			<section id="essentials">
				<Essentials />
			</section>
		</>
	)
}

export default About