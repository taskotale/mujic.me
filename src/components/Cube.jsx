import { useState } from "react";
import "../styles/cube.css"
import Landing from "./Landing";

export default function TestSide () {
    
    const [showSide, setShowSide] = useState('cube show-')

    const changeSide = (side) => {
        const scene = document.getElementsByClassName('scene')
        scene[0].className = 'scene scale'
        setTimeout(function(){
            scene[0].className = 'scene start-page'
        },1000)
        setShowSide('cube show-' + side)
    }

    return (
        <>
        <div className="scene">
            <div className={showSide} >
                <div className="cube__face cube__face--front"><Landing/></div>
                {/* removed back side for now*/}
                {/* <div className="cube__face cube__face--back">back</div> */}
                <div className="cube__face cube__face--right">Projects</div>
                <div className="cube__face cube__face--left">About Me</div>
                <div className="cube__face cube__face--top">top</div>
                <div className="cube__face cube__face--bottom">bottom <p></p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat rem, ducimus iusto nulla similique suscipit vel placeat voluptate. Omnis quibusdam eveniet sint exercitationem totam quasi laborum, delectus asperiores, aspernatur at ad, deserunt nihil odit illum!</div>
            </div>
            </div>
            <div className="btns">
                <button name="rotate-cube-side" onClick={e=>changeSide(e.target.value)} value="front"> Start </button>
                <button name="rotate-cube-side" onClick={e=>changeSide(e.target.value)} value="right"> Projects </button>
                {/* <button name="rotate-cube-side" onClick={e=>changeSide(e.target.value)} value="back" > back </button> */}
                <button name="rotate-cube-side" onClick={e=>changeSide(e.target.value)} value="left" > About Me </button>
                <button name="rotate-cube-side" onClick={e=>changeSide(e.target.value)} value="top" > top </button>
                <button name="rotate-cube-side" onClick={e=>changeSide(e.target.value)} value="bottom" > bottom  </button>
            </div>
            </>
    )
}