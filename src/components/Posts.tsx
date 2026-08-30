import {useState, useEffect} from 'react';
import axios from 'axios'
import Post from "./Post.tsx"
import CreatePost from "./CreatePost.tsx"
import Skeleton from "./Skeleton.tsx"
import CreatePostSkeleton from './CreatePostSkeleton.tsx';

type Post ={
    id:string;
    contents:string;
    createdAt:string;
    photo:string;
}

const api=axios.create({
    baseURL: "http://localhost:3000",
    headers:{
        "Content-Type":"application/json"
    }
})

export default function Posts(prosp:Post){
const [posts,setPosts]=useState<Post[]>([]);
const [loading, setLoading]=useState(true);
const [contents,setContents]=useState(""); 

    const fetchPosts= async()=>{
        try {
            const res=await api.get<Post[]>('/post');
            setPosts(res.data);
            //const result=JSON.stringify(res.data);
            
        } catch (error) {
            console.error("error fetching posts: ", error);
        }
    }

    const createPost= async()=>{
        try{
            const post=await api.post('/post',{contents});
        }catch(error){
            console.error("error creating post: " ,error);
        }
        finally{
            setLoading(false);
            // setLoadingCP(false);
        }
    }

    useEffect(()=>{
        fetchPosts();
        setLoading(false);
        // setLoadingCP(false);
    },[])

    // if(loading && loadingCP){
    //     return <div>
    //         <CreatePostSkeleton />
    //         <Skeleton />
    //         <Skeleton />
    //         <Skeleton />
    //         <Skeleton />
    //         <Skeleton />
    //     </div>
    //}
    return <div>
        <CreatePost onCreatePost={createPost}/>
        
       
        {posts.length !==0 && posts.map(post=>(
            <Post name={"Mayank"}
            description={"Haldwani, Nainital, Uttarakhand"}
            contents={post.contents}
            premium={true}
            profilePicture={"/Users/shrutiairy/Desktop/Mayank/CloudComputing/Projects/empty/LinkedIn/Linkin/src/assets/Superset.jpg"}
            photo={post.photo}
            />
        ))}

        {/* some hardcoded values for examplesss */}
        <Post name={"Harkirat Singh"} 
        description={"CEO XPay | YC"}
        profilePicture={"https://harkirat.classx.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-img.0lkpx6ydr46nw.png&w=1080&q=75&dpl=dpl_FfZQvnMfXkYA2zktmVcBScygUtCy"} 
        contents={"Nobody expected this, but we are getting into the new bussiness, It's better to start farming."}
        updatedAt={new Date()}
        premium={true}
        photo={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS51pN5MGX5uThEkvhN70kLM6a1CbWllf3IIx4XbN2sMA&s=10"}
        likeCount={234}
        commentCount={66}
         />

        <Post name={"Aniket Gupta"} 
        description={"CEO XPay | YC"}
        profilePicture={"https://harkirat.classx.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-img.0lkpx6ydr46nw.png&w=1080&q=75&dpl=dpl_FfZQvnMfXkYA2zktmVcBScygUtCy"} 
        contents={"Am i really suprised, for this?!"}
        updatedAt={new Date()}
        premium={false}
        photo={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS51pN5MGX5uThEkvhN70kLM6a1CbWllf3IIx4XbN2sMA&s=10"}
        // commentCount={6}
        // likeCount={66}
         />
        

    </div>
}

// // export default function Posts(props:IPosts){
// export default function Posts(){     // no backend trial
//  const [posts,setPosts]=useState([]);
//  const [isLoading,setIsLoading]=useState(true);
//     useEffect(()=>{
//         axios.get("https://jsonplaceholder.typicode.com/todos")
//         .then(response=>{
//            // const posts=response.data.map(data=>({
//            const fullPosts=response.data.map(data=>({
//                 name:data.title,
//                 description:data.title,
//                 profilePicture:"https://harkirat.classx.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-img.0lkpx6ydr46nw.png&w=1080&q=75&dpl=dpl_FfZQvnMfXkYA2zktmVcBScygUtCy",
//                 contents: data.title,
//                 updatedAt: Date.now() - Math.random()* 1000,
//                 premium:true,
//                 photo:"https://harkirat.classx.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-img.0lkpx6ydr46nw.png&w=1080&q=75&dpl=dpl_FfZQvnMfXkYA2zktmVcBScygUtCy",
//                 likeCount:23
//             }));
//             setPosts(fullPosts);
//             setIsLoading(false);
//         })
//     },[])

//     if(isLoading){
//         //return "Loading..."       // same thing
//         return <div>
//             <Skeleton />
//             <Skeleton />
//             <Skeleton />
//             <Skeleton />
//             <Skeleton />
//          </div>
//     }

//     return <div>
//         <CreatePost profilePicture={"https://harkirat.classx.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-img.0lkpx6ydr46nw.png&w=1080&q=75&dpl=dpl_FfZQvnMfXkYA2zktmVcBScygUtCy"} 
//             />

//         {/* {isLoading && "Loading..."} */}
//         {/* {!isLoading && posts.length === 0 && <div>No posts yet</div>} */}
//         {posts.length === 0 && <div>No posts yet</div>}

//         {/*  rendering all array of posts comming from backend to array of components */}
//         { posts.length !== 0 && posts.map(post=> <Post
//                 name={post.name}
//                 description={post.description}
//                 profilePicture="https://harkirat.classx.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-img.0lkpx6ydr46nw.png&w=1080&q=75&dpl=dpl_FfZQvnMfXkYA2zktmVcBScygUtCy"
//                 contents= {post.contents}
//                 updatedAt= {post.updatedAt}
//                 premium={true}
//                 photo="https://harkirat.classx.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-img.0lkpx6ydr46nw.png&w=1080&q=75&dpl=dpl_FfZQvnMfXkYA2zktmVcBScygUtCy"
//                 likeCount={23} />)}

//         {/* some hardcoded values for examplesss */}
//         <Post name={"Harkirat Singh"} 
//         description={"CEO XPay | YC"}
//         profilePicture={"https://harkirat.classx.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-img.0lkpx6ydr46nw.png&w=1080&q=75&dpl=dpl_FfZQvnMfXkYA2zktmVcBScygUtCy"} 
//         contents={"Nobody expected this, but we are getting into the new bussiness, It's better to start farming."}
//         updatedAt={new Date()}
//         premium={true}
//         photo={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6_BTV3OruXV0gVubtlacewCXyqq-JReAzg7CO5gpohEQWQ-GLxV2V7HS5&s=10"}
//         likeCount={234}
//         commentCount={66}
//          />

//         <Post name={"Aniket Gupta"} 
//         description={"CEO XPay | YC"}
//         profilePicture={"https://harkirat.classx.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-img.0lkpx6ydr46nw.png&w=1080&q=75&dpl=dpl_FfZQvnMfXkYA2zktmVcBScygUtCy"} 
//         contents={"this is my first post"}
//         updatedAt={new Date()}
//         premium={false}
//         photo={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6_BTV3OruXV0gVubtlacewCXyqq-JReAzg7CO5gpohEQWQ-GLxV2V7HS5&s=10"}
//         // commentCount={6}
//         // likeCount={66}
//          />

         
//     </div>
// }