import React from 'react'
import member from '../../Assets/person.jpeg'
import member2 from '../../Assets/person2.jpg'
import member3 from '../../Assets/person3.jpeg'

const Member = () => {
    const memberInfo = [
        {img: member2, name: "Name", project: "App"},
        {img: member, name: "Name", project: "App"},
        {img: member3, name: "Name", project: "App"}
    ]
  return (
    memberInfo.map((member, i) =>
        <div className="image-item" key={i}>
            <div className="image">
                <img src={member.img} alt="" />
            </div>
            <div className="spotlight-text">
                <h2 className="name">{member.name}</h2>
                <p className="project">{member.project}</p>
            </div>
        </div>
    )
  )
}

export default Member