import React from 'react'
import './Projects.css'
import {OurProjectsData} from './OurProjectsdata'
// import {BsArrowRight} from 'react-icons/bs'

function OurProjects() {

 
  return (
    <div className='ourprojects-container'
    >
        <div className='projects-landing'>
            <h1>Our Projects</h1>
            <p>Having a glance at our works gives you a kind of idealogy that makes you know that we are here for you...</p>
        </div>
        <div className="ourprojects">
        {OurProjectsData.map((Project, index)=>{
            return(
                <div 
                className="project-container"
                key={index}>
                    <div className="project-info">
                        <span>{0}{index+1}</span>
                        <span>{Project.projectname}</span>
                        <h1>{Project.projecttype}</h1>
                        <p>{Project.description}</p>
                        <div className="view-project">
                            <a href="">VIEW PROJECT</a>
                            <div></div>
                        </div>
                    </div>
                    <div className="project-image-container">
                        <img src={process.env.PUBLIC_URL + `/ProjectImages/projectimage${index + 1}.png`} alt="" />
                    </div>
                </div>
            )
        })}
        </div>
    </div>
  )
}

export default OurProjects