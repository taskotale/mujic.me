import { useState } from "react";
import "../styles/testSide.css"
import Landing from "./Landing";

export default function TestSide () {
    
    const [showSide, setShowSide] = useState('')

    let cubeClass = 'cube ' + showSide

    const changeSide = (side) => {
        setShowSide('show-' + side)
    }

    return (
        <>
        <div className="scene">
            <div className={cubeClass} >
                <div className="cube__face cube__face--front"><Landing/></div>
                <div className="cube__face cube__face--back">back</div>
                <div className="cube__face cube__face--right">right</div>
                <div className="cube__face cube__face--left">left</div>
                <div className="cube__face cube__face--top">top</div>
                <div className="cube__face cube__face--bottom">bottom</div>
            </div>
            </div>
            <div>
                <button name="rotate-cube-side" onClick={e=>changeSide(e.target.value)} value="front"> front </button>
                <button name="rotate-cube-side" onClick={e=>changeSide(e.target.value)} value="right"> right </button>
                <button name="rotate-cube-side" onClick={e=>changeSide(e.target.value)} value="back" > back </button>
                <button name="rotate-cube-side" onClick={e=>changeSide(e.target.value)} value="left" > left </button>
                <button name="rotate-cube-side" onClick={e=>changeSide(e.target.value)} value="top" > top </button>
                <button name="rotate-cube-side" onClick={e=>changeSide(e.target.value)} value="bottom" > bottom  </button>
            </div>
            </>
    )
}