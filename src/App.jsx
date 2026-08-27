import { useState } from 'react'
import './App.css'
import './index.css'
import Topbar from './components/Topbar.tsx'
import LeftSideBar from './components/LeftSideBar.tsx'
import Posts from './components/Posts.tsx'
import RightSideBar from './components/RightSideBar.tsx'


function App() {
  const [count, setCount] = useState(0);

  return <div>
    <div style={{backgroundColor:"#fbe8db58"}}>
      <div style={{backgroundColor:"white",}}>
        <Topbar />
      </div>
      <hr></hr>

      <div style={{display:"flex",margin:"15px 280px 10px 280px",}}>
        <div style={{flex:1, flexBasis:"400px", marginRight:"24px"}}>
          <LeftSideBar />
        </div>
        <div style={{flex:3,  minHeight:"100vh", flexBasis:"1000px", marginRight:"24px"}}>
          <Posts />
        </div>
        <div style={{flex:1, flexBasis:"400px",}}>
          <RightSideBar />
        </div>
      </div>
    </div>
  </div>
}

export default App
