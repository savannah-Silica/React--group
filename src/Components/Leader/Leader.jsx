import React from 'react'
import { BsTwitter } from 'react-icons/bs'
import { useState } from 'react';
import amos from '../../Assets/leaders/amos.jpeg'
import barry from '../../Assets/leaders/barry.jpeg'
import collins from '../../Assets/leaders/collins.jpeg'
import grace from '../../Assets/leaders/grace.jpeg'
import kulo from '../../Assets/leaders/kulo.jpeg'
import newton from '../../Assets/leaders/newton.jpeg'
import seffu from '../../Assets/leaders/seffu.jpeg'
import colloh from '../../Assets/person2.jpg'
import selemon from '../../Assets/image.jpg'

const Leader = () => {
    const leaders = [
        {id: 1, image: amos, name: "Amos Kyalo", post: "Founder", stack: "Frontend developer (React)", social: "@_amos_kyalo"},
        {id: 2, image: barry, name: "Imran Barrisa", post: "Communication/Levele-up", stack: "Backend Developer (Python-Django)", social: "@BLmran_Dev"},
        {id: 3, image: collins, name: "Collins Omariba", post: "Quality-Assurance", stack: "Backend Developer (Python-Django)", social: "@OmaribaCollins"},
        {id: 4, image: grace, name: "Grayce Muthui", post: "Mentorship/Level-up/PM", stack: "Frontend Developer (React)", social: "@Grayce_Muthui"},
        {id: 5, image: kulo, name: "Brian Kulo", post: "Communication", stack: "Developer", social: "@Chief_Kulo"},
        {id: 6, image: newton, name: "Newton Mathenge", post: "Level-up/Mentorship", stack: "Full-stack Developer (Node.js)", social: "@mathenge_newton"},
        {id: 7, image: seffu, name: "Seffu Kamau", post: "Level-up/PHP Guru", stack: "Full-stack Developer (laravel)", social: "@Therealpunduh"},
        {id: 8, image: colloh, name: "Collins Mbathi", post: "Mentorship/Complaint resolution", stack: "Full-stack Developer (Node.js)", social: "@collinsperez6"},
        {id: 9, image: selemon, name: "Selmon Brahanu", post: "Complaints resolution", stack: "Full-stack Developer (React/Vue)", social: "selemondev"}
    ];

    const[active, setActive] = useState(0);

    const setActiveFunct = (id) =>{
        setActive(id);
    }

  return (
    leaders.map( (leader) =>
        <div className='leader' key={leader.id} onMouseEnter={() =>setActiveFunct(leader.id)} 
        onMouseLeave={()=>setActive(0)}>
            <img src={leader.image} alt="" />
            <div className={active === leader.id ? `leader-info` : `leader-info-no-display`}>
                <div className="leader-info-inner">
                    <p className="leader-name">{leader.name}</p>
                    <p className="leader-post">{leader.post}</p>
                    <p className="leader-stack">{leader.stack}</p>
                    <p className="leader-social"><BsTwitter />{leader.social}</p>
                </div>
            </div>
        </div>
    )
  )
}
export default Leader