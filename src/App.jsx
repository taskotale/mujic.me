import { useEffect, useState, useRef } from "react"
import Landing from "./components/Landing.jsx"
import SideNav from "./components/SideNav.jsx"
import Cube from "./components/Cube.jsx"

function App() {
  //const [nextPage, setNextPage] = useState('landing-main')
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const ref4 = useRef(null)
  
  return (
    <>
      <div ref={ref1}>
        <Landing />
      </div>
      <div className="side-btns">
        <SideNav
           side='top'
           goTo={ref1}
        />
        <SideNav
           side='right'
           goTo={ref2}
        />
        <SideNav
           side='bottom'
           goTo={ref3}
        />
        <SideNav
           side='left'
           goTo={ref4}
        />
      </div>
      <div ref={ref2} id="1" className='test' >2</div>
      <div ref={ref3} id="2" className='test' >3</div>
      <div ref={ref4} id="3" className='test' >4</div>
    </>
  )
}

export default App

