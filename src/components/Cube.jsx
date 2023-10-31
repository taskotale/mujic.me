import { useState } from "react";
import "../styles/cube.css"
import Landing from "./Landing";

export default function TestSide () {
    
    const [showSide, setShowSide] = useState('cube show-')

    const changeSide = (side) => {
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
                <div className="cube__face cube__face--bottom">bottom</div>
            </div>
            </div>
            <div>
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