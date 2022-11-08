import React from 'react'
import member from '../../Assets/image.jpg'

const Member = () => {
    const memberInfo = [
        {img: member, name: "Name", project: "App"},
        {img: member, name: "Name", project: "App"},
        {img: member, name: "Name", project: "App"}
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