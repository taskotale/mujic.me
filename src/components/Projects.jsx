import { object } from "prop-types"

import '../styles/projects.css'
import Cube from "./Cube"
import { useState } from "react"

export default function Projects ({pointer}) {
    const [showSide, setShowSide] = useState('cube show-bottom')

    //changes sides from side menu
    const changeSide = (side) => {
        const scene = document.getElementsByClassName('scene')
        scene[0].className = 'scene scale'
        setTimeout(function(){
            scene[0].className = 'scene'
        },1000)
        setShowSide('cube show-' + side)
    }


    return (
        <div 
            className="projects-container"
            ref={pointer}
        >
            <div className="cube-wrapper">
                <Cube showSide={showSide}/>
            </div>
            
            <div className="project-nav">
                Projects
                <button onClick={e=>changeSide(e.target.value)} value='left'>Bookshelf</button>
                <button onClick={e=>changeSide(e.target.value)} value='right'>CV maker</button>
                <button onClick={e=>changeSide(e.target.value)} value='front'>Coming soon...</button>
                <button onClick={e=>changeSide(e.target.value)} value='top'>coming soon...</button>
                {/* <button onClick={e=>changeSide(e.target.value)} value='bottom'>coming soon...</button> */}
                <button onClick={e=>changeSide(e.target.value)} value='back'>coming soon...</button>
            </div>
        </div>
    )
}

Projects.propTypes = {
    pointer: object
}