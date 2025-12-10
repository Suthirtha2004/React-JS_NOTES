//Tanstack Query

import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { deletePost, FetchPosts, updatePost } from "../API/Api"
import { NavLink } from "react-router-dom"
import { useState } from "react"

export const FetchRQ = () =>{

    const [pageNumber,setPageNumber]= useState(0);

    const {data,isPending,isError,error} = useQuery({
        queryKey : ['posts',pageNumber], //Works like useState
        queryFn : ()=>FetchPosts(pageNumber), //works like useEffect
        placeholderData : keepPreviousData,
        // gcTime :1000 This is the cache time
        //staleTime : 1000,
        // staleTime : 0,
        //Polling concept like Groww - helps to get instant data
        // refetchInterval : 1000,
        // refetchIntervalInBackground:true,
    })
    //Using Query Client
    const queryClient = useQueryClient()

    //Delete Post using useMutation
    const deleteMutation = useMutation({
        mutationFn : (id)=>deletePost(id),
        onSuccess : (data,id)=>{
            queryClient.setQueryData(["posts",pageNumber],(currEle)=>{
                return currEle?.filter((post)=>post.id !== id)
            })
        }
    })

    const upadateMutation = useMutation({
        mutationFn : (id)=>updatePost(id),
        onSuccess : (apiData,id)=>{
            queryClient.setQueryData(["posts",pageNumber],(currEle)=>{
                return currEle?.map((post)=>{
                    return post.id == id ? {...post,title : apiData.data.title}
                    : post
            });
            });
        }
    })

    if(isPending) <p>Loading...</p>
    if(isError) <p> Something is wrong</p>
    return(
        <>
        <h1>Hello Fetch RQ</h1>
        <ul>
        {data?.map((element)=>{
            const {id,title,body} = element;
            return(
            <li key={id}>
                <NavLink to= {`/rq/${id}`}>
                <p>{id}</p>
                <p>{title}</p>
                <p>{body}</p>
                
                </NavLink>
                <button onClick={()=>deleteMutation.mutate(id)}>Delete</button>
                <button onClick={()=>upadateMutation.mutate(id)}>Update</button>
            </li>
            )
        })}
        </ul>
        <div>
            <button disabled = {pageNumber === 0 ? true : false } onClick={()=>setPageNumber((prev)=>prev-3)}>Previous</button>
            <p>{pageNumber/3+1}</p>
            <button onClick={()=>setPageNumber((prev)=>prev+3)}>Next</button>
        </div>
        </>
    )
}