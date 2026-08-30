// export interface IPostSkel{
//     profilePicture?:string;
//     name?:string;
//     description?:string;                 // user description
//     contents?:string;                  // the main post
//     premium?:boolean;
//     photo?:string;
//     likeCount?:number;
//     updatedAt?:Date;
//     //updatedAt:number
//     commentCount?:number
// }

export default function Skeleton(){
    return <div style={{backgroundColor:"white", border:"1px solid gray", borderRadius:"10px", marginBottom:"10px"}}>
    {/* profile part */}
        <div style={{display:"flex", justifyContent:"space-between", padding:"6px 6px 6px 6px",}}>
            <div style={{display:"flex", }}>
                {/* user pfp and their biodata */}
                <div style={{}}>
                    <div style={{borderRadius:"50%", width:60 ,height:60, backgroundColor:"#F4F2EE"}}></div>
                </div>

                <div>
                    <div> <div style={{width:60,height:10, borderRadius:5, backgroundColor:"#F4F2EE",marginBottom:"3px"}}></div>
                     
                    </div>

                    <div style={{fontSize:15, fontWeight:300, color:"gray"}}> <div style={{width:60, height:10, borderRadius:5, backgroundColor:"#F4F2EE",marginBottom:"3px"}}></div>  </div>
                    <div style={{color:"blue", cursor:"pointer"}}> <div style={{width:60, height:10,borderRadius:5, backgroundColor:"#F4F2EE",marginBottom:"3px"}}></div> </div>
                    <div style={{color:"gray", fontSize:12}}> <div style={{width:60, height:10,borderRadius:5, backgroundColor:"#F4F2EE",marginBottom:"3px"}}></div> </div> 
                    <div style={{color:"gray"}}> <div style={{width:60, height:10,borderRadius:5, backgroundColor:"#F4F2EE",marginBottom:"3px"}}></div> </div>
                </div>  

            </div>


        {/* right corner elements */}
            <div>
                <div style={{width:30, height:10,borderRadius:5, backgroundColor:"#F4F2EE"}}></div>
            </div>
        </div>

        {/* main post elements */}
        <div>
            <div style={{padding:"6px 6px 6px 6px"}}> <div style={{width:500, height:200,borderRadius:5, backgroundColor:"#F4F2EE"}}></div> </div>
            {/* render if passed on */}
            <div>{ <div style={{display:"block", width:"100%", backgroundColor:"#F4F2EE"}}></div> }</div>
        </div>


        {/* div for likecount and all other features */}
        <div>
            <div style={{display:"flex", justifyContent:"space-between", padding:"6px 6px 6px 6px"}}>
                <div>
                    <div style={{width:30, height:10,borderRadius:5, backgroundColor:"#F4F2EE"}}></div> 
                </div>
                <div>
                    <div style={{width:30, height:10,borderRadius:5, backgroundColor:"#F4F2EE"}}></div>
                </div>
            </div>
            <hr></hr>


            {/* like comment repost share */}
            <div style={{display:"flex", justifyContent:"space-evenly",padding:"6px 6px 6px 6px" }}>
                <div style={{display:"flex", justifyContent:"center", textAlign:"center"}}>
                    <div> <div style={{width:30, height:10,borderRadius:5, backgroundColor:"#F4F2EE"}}></div> </div>
                </div>
                <div> <div style={{width:30, height:10,borderRadius:5, backgroundColor:"#F4F2EE"}}></div> </div>
                <div> <div style={{width:30,height:10,borderRadius:5, backgroundColor:"#F4F2EE"}}></div> </div>
                <div> <div style={{width:30,height:10,borderRadius:5, backgroundColor:"#F4F2EE"}}></div> </div>
            </div>
        </div>

    </div>
}