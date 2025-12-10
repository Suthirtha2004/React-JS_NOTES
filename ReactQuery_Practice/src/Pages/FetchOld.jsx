import { useEffect, useState } from "react";
import { getPosts } from "../API/Api";

export const FetchOld = () =>{
    const [posts,setPosts] = useState([]);

    const getPostData = async() =>{
        try{
            const res = await getPosts();
            console.log(res);
            res.status === 200 ? setPosts(res.data) : [];
        }catch(error){
            console.log(error);
            return []
        }
    }

    useEffect(()=>{
        getPostData();
    },[]);
    return(
        <>
        <h1>Hello Ftech Old </h1>
        <ul>
            {posts.map((currEle)=>{
                const {id,title,body} = currEle;
                return(
                    <li key={id}>
                        <p>{title}</p>
                        <p>{body}</p>
                    </li>
                )
            })}
        </ul>
        
        </>
    )
}