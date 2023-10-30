import Landing from "./components/Landing.jsx"
import SideNav from "./components/SideNav.jsx"

function App() {

  return (
    <>
       <Landing />
       <SideNav side='top'/>
       <SideNav side='right'/>
       <SideNav side='bottom'/>
       <SideNav side='left'/>
    </>
  )
}

export default App
