import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import about from '../../../Assets/about.svg'
import './About.css'
import Essentials from './sections/essentials'
import Leaders from '../../Leader/Leaders'

const About = () => {
	return (
		<>
			<section className='about-intro'>
				<div className="about-text">
					<h1>We Are <span>SAVANNAH SILICA</span></h1>
					<p>When you join us, you'll have the oppurtunity to learn new skills in a variety of formats.
						You'll also meet local developers virtually or in-person with similar interest in technology.
						The community prides itself on being an inclusive environment where everyone and anyone interested
						in tech-from beginner developers to experienced professionals are welcomed to join.
					</p>
					<div className="about-button">
						<button>Build in Public <BsArrowRight /></button>
					</div>
				</div>
				<div className="about-img">
					<img src={about} alt="" />
				</div>
			</section>

			<section id="essentials">
				<Essentials />   
			</section>

			<section className='leaders-section'>
				<p className='leaders-title'>Leadership</p>
				<div className="leaders-dt">
					<Leaders />
				</div>
			</section>
		</>
	)
}

export default About