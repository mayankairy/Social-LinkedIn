import { useState } from 'react'
import './App.css'
import './index.css'
import Topbar from './components/Topbar.tsx'
import LeftSideBar from './components/LeftSideBar.tsx'
import Posts from './components/Posts.tsx'
import RightSideBar from './components/RightSideBar.tsx'


function App() {
  const [count, setCount] = useState(0)

  return <div>
    <div>
      <Topbar />
    </div>
    <hr></hr>
    <div style={{display:"flex", marginRight:"250px", marginLeft:"250px"}}>
      <div style={{flex:1, border:"1px solid black", minHeight:"100vh", marginRight:"4px"}}>
        <LeftSideBar />
      </div>
      <div style={{flex:3, border:"1px solid black", minHeight:"100vh", marginRight:"4px"}}>
        <Posts />
      </div>
      <div style={{flex:1, border:"1px solid black", minHeight:"100vh"}}>
        <RightSideBar />
      </div>
    </div>
  </div>
}

export default App
