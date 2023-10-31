import "../styles/cube.css"
import { string } from "prop-types"
import { func } from "prop-types"

export default function Cube ({showSide, setModal}) {

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

    
    const links = {
        'front': 'https://google.com',
        'back': '1',
        'right': 'CV Maker',
        'left': 'Bookshelf app',
        'top': '4',
        'bottom': '5',
    }

    const touchBump = () => {
        let side = showSide.split('-')
        setModal(links[side[1]])
    }

    return (
        <>
        <div className="scene" onClick={()=>touchBump()}>
            <div className={showSide}>
                <div className="cube__face cube__face--front"><span className="cube-text-wrapper">Front</span></div>
                <div className="cube__face cube__face--back"><span className="cube-text-wrapper">Back</span></div>
                <div className="cube__face cube__face--right"><span className="cube-text-wrapper">Right</span></div>
                <div className="cube__face cube__face--left"><span className="cube-text-wrapper">Left</span></div>
                <div className="cube__face cube__face--top"><span className="cube-text-wrapper">Top</span></div>
                <div className="cube__face cube__face--bottom"><span className="cube-text-wrapper">Click →</span></div>
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
    showSide:string,
    setModal:func
}