import {Earth, Dot, Ellipsis, X,ThumbsUp, MessageSquareText, Repeat2, Send} from 'lucide-react';
import LPrem from "../assets/LinkedPrem.png";

export interface IPost{
    profilePicture:string;
    name:string;
    description:string;                 // user description
    contents:string;                  // the main post
    premium:boolean;
    photo?:string;
    likeCount?:number;
    updatedAt?:Date;
    //updatedAt:number
    commentCount?:number
}

export default function Post(props:IPost){
    function getDisplayDate(ms:number){
        const secs=Math.floor(ms/1000);
        const mins=Math.floor(secs/60);
        const hours=Math.floor(mins/60);
        const days=Math.floor(hours/24);
        const months=Math.floor(days/30);

        if(months !== 0){
            return `${months} months ago`;
        }

        if(days !== 0){
            return `${days} days ago`
        }

        if(hours !== 0){
            return `${hours} days ago`
        }

        if(mins !== 0){
            return `${mins} days ago`
        }

        return `Recently`;


    }
    return <div style={{backgroundColor:"white", border:"1px solid gray", borderRadius:"10px", marginBottom:"10px"}}>
    {/* profile part */}
        <div style={{display:"flex", justifyContent:"space-between", padding:"6px 6px 6px 6px",}}>
            <div style={{display:"flex", }}>
                {/* user pfp and their biodata */}
                <div>
                    <img src={props.profilePicture} width={60} height={60} style={{borderRadius:"50%"}}/>
                </div>

                <div>
                    <div> <span style={{fontSize:20, fontWeight:500}}>{props.name}</span> {props.premium && <img src={LPrem} width={10} height={10} />} </div>
                    <div style={{fontSize:15, fontWeight:300, color:"gray"}}> {props.description} </div>
                    <div style={{color:"blue", cursor:"pointer"}}>Visit my website</div>
                    <div style={{color:"gray", fontSize:12}}>{props.updatedAt != null ? getDisplayDate(Date.now() - new Date(props.updatedAt).getTime()) : null} </div> 
                    <div style={{color:"gray"}}> <Dot size={20} /> <Earth size={20} /> </div>
                </div>

            </div>


        {/* right corner elements */}
            <div>
                <Ellipsis /> <X />
            </div>
        </div>

        {/* main post elements */}
        <div>
            <div style={{padding:"6px 6px 6px 6px"}}>{props.contents}</div>
            {/* render if passed on */}
            <div>{props.photo && <img src={props.photo} style={{display:"block", width:"100%"}}/> }</div>
        </div>


        {/* div for likecount and all other features */}
        <div>
            <div style={{display:"flex", justifyContent:"space-between", padding:"6px 6px 6px 6px"}}>
                <div>
                    {props.likeCount && props.likeCount}
                    {props.likeCount && "likes"} 
                </div>
                <div>
                    {props.commentCount && props.commentCount}
                    {props.commentCount && "comments"} 
                </div>
            </div>
            <hr></hr>


            {/* like comment repost share */}
            <div style={{display:"flex", justifyContent:"space-evenly",padding:"6px 6px 6px 6px" }}>
                <div style={{display:"flex", justifyContent:"center", textAlign:"center"}}>
                    <div> <ThumbsUp /> Like</div>
                </div>
                <div><MessageSquareText />  Comment </div>
                <div><Repeat2 /> Repost</div>
                <div><Send /> Send</div>
            </div>
        </div>

    </div>
}