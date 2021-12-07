import React from 'react'
import "./style.css"
import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <div className="navbar">
            <div className="navlinks">
           <NavLink to="/">Christian Nirschl</NavLink>
            </div>
            <div className="navlinks">
                <NavLink to="/">About me</NavLink>
                <NavLink to="/portfolio">Portfolio</NavLink>
                <NavLink to="/contactme">Contact Me</NavLink>
                <NavLink to="/resume">Resume</NavLink>
            </div>
        </div>
    )
}
