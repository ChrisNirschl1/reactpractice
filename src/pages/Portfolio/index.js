import React, { useState } from 'react';
import ProjectCard from '../../components/Project';


const projects = [
    {
        title:"Mental Health Tracker" ,
        url: "https://mental-health-tracker-dbt.herokuapp.com/",
        repo:"https://github.com/Alextheshire/mental-health-tracker",
       
        about: "This is a project developed with 3 other members of my cohort to track mental health.  It is a proof of concept for a website that connects patients and providers and allows sharing of mental health resources.  Patients can fill out daily DBT diary cards and view their progress over time, and providers have access to patient data."
    },
    {
        title:"soundByte" ,
        url: "https://soundbyte100.herokuapp.com/",
        repo:"https://github.com/ChrisNirschl1/proj3-frontend",
        
        about: "A social media app built around connecting people through music, and local meetp spots that they can meet with friends to discuss that music"
    },
    {
        title:"Day planner" ,
        url: "https://chrisnirschl1.github.io/day-planner/",
        repo:"https://github.com/ChrisNirschl1/day-planner",
        
        about: "Keep track of your day with this online planner with color coding according to how near your task needs to be finished."
    },
    {
        title:"Brthday" ,
        url: "https://cpysden-coder.github.io/wk4-project-html/",
        repo:"https://github.com/cpysden-code.github/wk4",
       
        about: "This is a simple social media site my group built that acts as an initial landing page on your browser to learn new things and have some fun when first logging in."
    }
]
function Projects() {
    return (
        <div>
        {projects.map((item,index)=>(
                <ProjectCard projectUrl={item.url} title={item.title} link={item.link} about={item.about} repo={item.repo} key={index} />
        ))}
        <div style={{height:"200px"}}></div>
        </div>
    )

}


export default Projects;