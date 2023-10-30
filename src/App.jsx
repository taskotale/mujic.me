import Landing from "./components/Landing.jsx"
import SideNav from "./components/sideNav.jsx"
function App() {

  return (
    <>
       <Landing />
       <SideNav side='right'/>
       <SideNav side='left'/>
       <SideNav side='top'/>
       <SideNav side='bottom'/>
    </>
  )
}

export default App
