import React from 'react'
import Slider, { SliderItem } from '../Slider/Slider'
import car1 from '../../Assets/image.jpg'

const Courasel = () => {
  return (
    <Slider>
        <SliderItem>
            <div className="spotlights-images">
                <div className="images-item">
                    <img src={car1} alt="" />
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
                    <img src={car1} alt="" />
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
                    <img src={car1} alt="" />
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