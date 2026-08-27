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
    <div style={{backgroundColor:"#f9f2ed"}}>
      <div style={{backgroundColor:"white",}}>
        <Topbar />
      </div>
      <hr></hr>
      <div style={{display:"flex", marginRight:"480px", marginLeft:"480px", marginTop:"20px"}}>
        <div style={{flex:1, border:"1px solid black", minWidth:"250px", marginRight:"24px"}}>
          <LeftSideBar />
        </div>
        <div style={{flex:3,  minHeight:"100vh", minWidth:"500px", marginRight:"24px"}}>
          <Posts />
        </div>
        <div style={{flex:1, border:"1px solid black", minWidth:"250px"}}>
          <RightSideBar />
        </div>  
      </div>
    </div>
  </div>
}

export default App
