import React, { useState, useEffect } from 'react'
import '../Header/Header.css'

export const AnimationItem = ({ children })=>{
    return(
        <div className='animation-item'>
            {children}
        </div>
    );
};

const Animation = ({children}) => {
    const[index, setIndex] = useState(0);
    const setNewIndex = (newIndex) =>{
      if(newIndex < 0){
        newIndex = React.Children.count(children) - 1;
      }else if(newIndex >= React.Children.count(children)){
        newIndex = 0
      }
      setIndex(newIndex);
    };

    useEffect(() =>{
        const interval = setInterval( () =>{
           setNewIndex(index + 1)
        }, 3000)

        return () => {
            if(interval){
                clearInterval(interval)
            }
        }
    });

  return (
    <div className='animation'>
        <div className='inner-animation' style={{transform: `translateY(-${index * 25}%)`}}>
            {children}
        </div>
    </div>
  )
}

export default Animation