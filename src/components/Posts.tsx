import {useState, useEffect} from 'react';
import axios from 'axios'
import Post from "./Post.tsx"
import CreatePost from "./CreatePost.tsx"
import type { IPost } from "./Post"

interface IPosts{
    posts:IPost[]
}


// export default function Posts(props:IPosts){
export default function Posts(){     // no backend trial
 const [posts,setPosts]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(response=>{
           // const posts=response.data.map(data=>({
           const fullPosts=response.data.map(data=>({
                name:data.title,
                description:data.title,
                profilePicture:"https://harkirat.classx.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-img.0lkpx6ydr46nw.png&w=1080&q=75&dpl=dpl_FfZQvnMfXkYA2zktmVcBScygUtCy",
                contents: data.title,
                updatedAt: Date.now() - Math.random()* 1000,
                premium:true,
                photo:"https://harkirat.classx.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-img.0lkpx6ydr46nw.png&w=1080&q=75&dpl=dpl_FfZQvnMfXkYA2zktmVcBScygUtCy",
                likeCount:23
            }));
            setPosts(fullPosts);
        })
    },[])

    return <div>
        <CreatePost profilePicture={"https://harkirat.classx.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-img.0lkpx6ydr46nw.png&w=1080&q=75&dpl=dpl_FfZQvnMfXkYA2zktmVcBScygUtCy"} />


        {/* some hardcoded values for example */}
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


        {/*  rendering all array of posts comming from backend to array of components */}
        {posts.map(post=> <Post
                name={post.name}
                description={post.description}
                profilePicture="https://harkirat.classx.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-img.0lkpx6ydr46nw.png&w=1080&q=75&dpl=dpl_FfZQvnMfXkYA2zktmVcBScygUtCy"
                contents= {post.contents}
                updatedAt= {post.updatedAt}
                premium={true}
                photo="https://harkirat.classx.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-img.0lkpx6ydr46nw.png&w=1080&q=75&dpl=dpl_FfZQvnMfXkYA2zktmVcBScygUtCy"
                likeCount={23} />)}
    </div>
}