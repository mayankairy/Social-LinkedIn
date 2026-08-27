import SearchBox from "./SearchBox.tsx"
import {SquarePlay, Image, SquareText} from 'lucide-react'

interface ICreatePost{
    profilePicture:string;
}

export default function CreatePost(props:ICreatePost){
    return <div style={{padding:"6px 6px 6px 6px" ,border:"1px solid gray",backgroundColor:"white", borderRadius:"10px", marginBottom:"10px"}}>
        <div style={{display:"flex", justifyContent:"flex-start", alignItems:"center" }}>
            <div>
                <img src={props.profilePicture} width={35} height={35} style={{borderRadius:"50%"}} />
            </div>
            <div>
                <SearchBox placeHolderText={"Start a post"} />
            </div>
            <div>
                <button style={{backgroundColor:"#1f54c9", color:"white", fontWeight:"bold", fontSize:14, width:50, height:25, borderRadius:"10px", }}>Post</button>
            </div>
        </div>

        <div style={{display:"flex", justifyContent:"space-evenly", }}>
            <div style={{display:"flex", justifyContent:"space-evenly", alignItems:"center"}}>
                <SquarePlay color={"#218d21"} /> <span >Video</span>
            </div>

            <div style={{display:"flex", justifyContent:"space-evenly", alignItems:"center"}}>
                <Image color={"#396ee1"} /> Photo
            </div>

            <div style={{display:"flex", justifyContent:"space-evenly", alignItems:"center"}}>
                <SquareText color={"#c22030"} /> Article
            </div>
        </div>
    </div>
}