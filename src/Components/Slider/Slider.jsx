import React, { useEffect } from 'react'
import './Slider.css'
import { useState } from 'react'


export const SliderItem = ( {children, width} ) =>{
    return (
        <div className="sliderItem" style={ {width: width}}>
            {children}
        </div>
    )
}

const Slider = ( {children} ) => {
    //setting up state for the translate
    const [activeIndex, setActiveIndex] = useState(0)
    
    const updateActiveIndex = (newIndex) =>{
        if(newIndex < 0){
            newIndex = React.Children.count(children) -1
        }else if (newIndex >= React.Children.count(children)){
            newIndex = 0;
        };
        setActiveIndex(newIndex)

    };

    const [paused, setPaused] = useState(true)

    useEffect(() =>{
        const interval = setInterval( () =>{
           if(paused){
            updateActiveIndex(activeIndex + 1)
           }
        }, 3000)

        return () => {
            if(interval){
                clearInterval(interval)
            }
        }
    })

  return (
    <div className='slider' onMouseEnter={()=>setPaused(!paused)}
    onMouseLeave={()=>setPaused(!paused)}>
        <div className="innerDiv" style={ {transform : `translate(-${activeIndex * 100}%)`}}>
            {React.Children.map(children, (child, index) => {
               return React.cloneElement(child, {width: "100%"})
            })}
        </div>
    </div>
  )
}

export default Slider