import React from 'react'
import Slider, { SliderItem } from '../Slider/Slider'
import member from '../../Assets/person.jpeg'
import member2 from '../../Assets/person2.jpg'
import member3 from '../../Assets/person3.jpeg'

const Courasel = () => {
  return (
    <Slider>
        <SliderItem>
            <div className="spotlights-images">
                <div className="images-item">
                    <img src={member2} alt="" />
                </div>
                <div className="spotlights-text">
                    <h2 className="names">Name</h2>
                    <p className="projects">Project</p>
                </div>
            </div>
        </SliderItem>
        <SliderItem>
            <div className="spotlights-images">
                <div className="images-item">
                    <img src={member} alt="" />
                </div>
                <div className="spotlights-text">
                    <h2 className="names">Name</h2>
                    <p className="projects">Project</p>
                </div>
            </div>
        </SliderItem>
        <SliderItem>
            <div className="spotlights-images">
                <div className="images-item">
                    <img src={member3} alt="" />
                </div>
                <div className="spotlights-text">
                    <h2 className="names">Name</h2>
                    <p className="projects">Project</p>
                </div>
            </div>
        </SliderItem>
    </Slider>
  )
}

export default Courasel