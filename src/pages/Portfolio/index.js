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
        
        about: "This app allows users to search for recipes based on ingredients that have or would like included.  Built of multiple external APIs."
    },
    {
        title:"Day planner" ,
        url: "https://chrisnirschl1.github.io/day-planner/",
        repo:"https://github.com/ChrisNirschl1/day-planner",
        
        about: "A weather dashboard that uses local storage to save search history. Will give daily and weekly weather data for any location searched."
    },
    {
        title:"Brthday" ,
        url: "https://cpysden-coder.github.io/wk4-project-html/",
        repo:"https://github.com/cpysden-code.github/wk4",
       
        about: "This is a simple random password generator built using prompts for specifications. This is the first app that I built!"
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