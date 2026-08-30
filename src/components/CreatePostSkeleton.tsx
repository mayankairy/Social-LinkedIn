
export default function CreatePostSkeleton(){
return <div style={{padding:"6px 6px 6px 6px" ,border:"1px solid gray",backgroundColor:"#F4F2EE", borderRadius:"10px", marginBottom:"10px"}}>
    <div style={{display:"flex", justifyContent:"flex-start", alignItems:"center" }}>
        <div>
            <div style={{borderRadius:"50%", width:35, height:35, backgroundColor:"#F4F2EE"}}> </div>
        </div>
        <div id="createPostContents">
            <div style={{height:35, width:1000, borderBottom:3, backgroundColor:"#F4F2EE"}}></div>
            <div style={{height:35, width:1000, borderBottom:3, backgroundColor:"#F4F2EE"}}></div>
            <div style={{height:35, width:1000, borderBottom:3, backgroundColor:"#F4F2EE"}}></div>
            <div style={{height:35, width:1000, borderBottom:3, backgroundColor:"#F4F2EE"}}></div>
        </div>
        <div>
            <button style={{backgroundColor:"#F4F2EE", width:50, height:25, borderRadius:"10px", }}></button>
        </div>
    </div>

    <div style={{display:"flex", justifyContent:"space-evenly", }}>
        <div style={{display:"flex", justifyContent:"space-evenly", alignItems:"center"}}>
            <div style={{backgroundColor:"#F4F2EE"}}></div> <div style={{backgroundColor:"#F4F2EE"}}></div>
        </div>

        <div style={{display:"flex", justifyContent:"space-evenly", alignItems:"center"}}>
            <div style={{backgroundColor:"#F4F2EE"}}></div> <div style={{backgroundColor:"#F4F2EE"}}></div>
        </div>

        <div style={{display:"flex", justifyContent:"space-evenly", alignItems:"center"}}>
            <div style={{backgroundColor:"#F4F2EE"}}></div> <div style={{backgroundColor:"#F4F2EE"}}></div>
        </div>
    </div>
</div>
}