import "dotenv/config";
import express from "express";
import cors from "cors";
import { z } from "zod";
import { prisma } from "./db.ts";

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));
app.use(express.json());

const PostSchema = z.object({
  content: z.string(),
});

app.get('/post', async(req , res)=>{
    try{
        const posts=await prisma.post.findMany({
            orderBy:{createdAt:'desc'}
        })

        res.json(posts);
    }catch(error){
        console.error(error);
        return res.status(400).json({message:"endpoint error!"})
    }
})

app.post('/post', async(req, res)=>{
    try{
        const data=PostSchema.parse(req.body);
        if(!data){
            return res.status(400).json({message:"invalid schema"});
        }

        const content=data.content;

        const newpost=await prisma.post.create({
            data:{
                content:content
            }
        })

        res.status(200).json({
            message:"post created",
            newpost
        })
    }catch(error){
        console.error(error);
        return res.status(400).json({message:"endpoint error"})
    }
})

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
  });