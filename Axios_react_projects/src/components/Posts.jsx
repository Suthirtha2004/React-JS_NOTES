import { useEffect, useState } from "react"
import { GetDelete, Getmethod } from "../api/PostApi"
import "../App.css"


export const Posts = () =>{

    const [data,setData] = useState([]);

    const getPostMethod = async() =>{
        try{
        const response = await Getmethod();
        console.log(response.data);
        setData(response.data);
        }
        catch(error){
            console.log("Error is caught");
        }
    }
    
     const handleDeletebutton = async(id) =>{
        try{
        const res =await  GetDelete(id);
        console.log(res);
        if(res.status == 200){
            const newUpdatedPost =  data.filter((currentPost)=>currentPost.id != id);
        setData(newUpdatedPost);
        }
     }
        catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        getPostMethod();
    },[]);


   
    return(
        <>
        <section className="posts-section">
            <ol className="posts-grid">
                {
                    data.map((currElement)=>{
                        const {id,title,body} = currElement;
                        return(
                            <li className="post-card" key={id} >
                                <p className="post-title">Title : {title}</p>
                                <p className="post-body">Body : {body}</p>
                                <button className="edit-btn">Edit</button>
                                <button className="delete-btn" onClick={()=>handleDeletebutton(id)}>Delete</button>
                            </li>
                        )
                    })
                }
            </ol>
        </section>
        </>
    )
}