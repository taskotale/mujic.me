import { useState } from "react"
import Landing from "./components/Landing.jsx"
import SideNav from "./components/SideNav.jsx"
import TestSide from "./components/testSide.jsx"

function App() {
  const [currentPage, setCurrentPage] = useState('landing-main')

  return (
    <>
      <Landing />
      <TestSide />
      <TestSide1 />
      <TestSide2 />
      <SideNav current={currentPage} setNextPage={setCurrentPage} side='top'/>
      <SideNav current={currentPage} setNextPage={setCurrentPage} side='right'/>
      <SideNav current={currentPage} setNextPage={setCurrentPage} side='bottom'/>
      <SideNav current={currentPage} setNextPage={setCurrentPage} side='left'/>
    </>
  )
}

export default App

function TestSide1 () {
  return (
      <div className="testDiv1 hide">A</div>
  )
}

function TestSide2 () {
  return (
      <div className="testDiv2 hide">A</div>
  )
}