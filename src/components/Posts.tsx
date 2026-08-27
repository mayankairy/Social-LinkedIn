import Post from "./Post.tsx"
import type { IPost } from "./Post"

interface IPosts{
    posts:IPost[]
}


export default function Posts(props:IPosts){
    return <div>
        <Post name={"Harkirat Singh"} 
        description={"CEO XPay | YC"}
        profilePicture={"https://harkirat.classx.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-img.0lkpx6ydr46nw.png&w=1080&q=75&dpl=dpl_FfZQvnMfXkYA2zktmVcBScygUtCy"} 
        contents={"Nobody expected this, but we are getting into the new bussiness, It's better to start farming."}
        updatedAt={new Date()}
        premium={true}
        photo={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6_BTV3OruXV0gVubtlacewCXyqq-JReAzg7CO5gpohEQWQ-GLxV2V7HS5&s=10"}
        likeCount={234}
        commentCount={66}
         />

        <Post name={"Aniket Gupta"} 
        description={"CEO XPay | YC"}
        profilePicture={"https://harkirat.classx.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-img.0lkpx6ydr46nw.png&w=1080&q=75&dpl=dpl_FfZQvnMfXkYA2zktmVcBScygUtCy"} 
        contents={"this is my first post"}
        updatedAt={new Date()}
        premium={false}
        photo={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6_BTV3OruXV0gVubtlacewCXyqq-JReAzg7CO5gpohEQWQ-GLxV2V7HS5&s=10"}
        // commentCount={6}
        // likeCount={66}
         />
    </div>
}