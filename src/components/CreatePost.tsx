import {useState} from 'react';
import SearchBox from "./SearchBox.tsx"
import {SquarePlay, Image, SquareText, UserSearch} from 'lucide-react'
import axios from "axios";

interface ICreatePost{
    onCreatePost:(contents:string)=>void;
}

export default function CreatePost(props:ICreatePost){
    const [contents,setcontents]=useState<string>("");
    const [phto,setPhto]=useState<string>("");
    // pfp by default

    function handleCreatePost(){
        props.onCreatePost(contents);
        setcontents("");
        setPhto("");
    }

    return <div style={{padding:"6px 6px 6px 6px" ,border:"1px solid gray",backgroundColor:"white", borderRadius:"10px", marginBottom:"10px"}}>
        <div style={{display:"flex", justifyContent:"flex-start", alignItems:"center" }}>
            <div>
                <img src={"https://harkirat.classx.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-img.0lkpx6ydr46nw.png&w=1080&q=75&dpl=dpl_FfZQvnMfXkYA2zktmVcBScygUtCy"} 
                width={35} height={35} style={{borderRadius:"50%"}} />
            </div>


            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center", margin:"7px 7px 7px 7px"}}>
                <div id="createPostContents">
                    <textarea placeholder={"What is on your mind,today!"} value={contents} onChange={(e)=>setcontents(e.target.value)}
                    style={{borderRadius:10, marginRight:"8px", padding:"5px 5px 5px 5px"}} />
                </div>
                <div>
                    <input type='text' placeholder='Photo url' value={phto} onChange={(e)=>setPhto(e.target.value)} 
                    style={{borderRadius:10, padding:"5px 5px 5px 5px"}} />
                </div>
            </div>


            <div>
                <button onClick={handleCreatePost} style={{backgroundColor:"#1f54c9", color:"white",
                     fontWeight:"bold", fontSize:14, width:50, 
                     height:25, borderRadius:"10px" }}>Post</button>
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