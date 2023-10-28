import Landing from "./components/Landing"
import SideNav from "./components/sideNav"

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
