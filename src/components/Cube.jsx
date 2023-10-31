import { useState } from "react"
import "../styles/cube.css"
import { string } from "prop-types"

export default function Cube ({showSide}) {

    // code necessary to make cube work by itself

    // const [showSide, setShowSide] = useState('cube show-')

    // const changeSide = (side) => {
    //     const scene = document.getElementsByClassName('scene')
    //     scene[0].className = 'scene scale'
    //     setTimeout(function(){
    //         scene[0].className = 'scene'
    //     },1000)
    //     setShowSide('cube show-' + side)
    // }

    return (
        <>
        <div className="scene">
            <div className={showSide} >
                <div className="cube__face cube__face--front">Coming soon</div>
                <div className="cube__face cube__face--back">back</div>
                <div className="cube__face cube__face--right">CV Maker</div>
                <div className="cube__face cube__face--left">Bookshelf</div>
                <div className="cube__face cube__face--top">top</div>
                <div className="cube__face cube__face--bottom">Click</div>
            </div>
            </div>
            {/* <div className="btns">
                <button name="rotate-cube-side" onClick={e=>changeSide(e.target.value)} value="front"> Start </button>
                <button name="rotate-cube-side" onClick={e=>changeSide(e.target.value)} value="right"> Projects </button>
                <button name="rotate-cube-side" onClick={e=>changeSide(e.target.value)} value="back" > back </button>
                <button name="rotate-cube-side" onClick={e=>changeSide(e.target.value)} value="left" > About Me </button>
                <button name="rotate-cube-side" onClick={e=>changeSide(e.target.value)} value="top" > top </button>
                <button name="rotate-cube-side" onClick={e=>changeSide(e.target.value)} value="bottom" > bottom  </button>
            </div> */}
            </>
    )
}

Cube.propTypes = {
    showSide:string
}