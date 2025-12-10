import { useQuery } from "@tanstack/react-query"
import { FetchIndPost } from "../API/Api"
import { NavLink, useParams } from "react-router-dom"

 export const FetchInd=()=>{
    const {id} = useParams();

    const {data} = useQuery({
        queryKey : ["post"],
        queryFn : () => FetchIndPost(id),  // ✅ CORRECT - Pass a function
    })

    console.log(data);
    return(
        <>
        <h1>Details Of Cards {id}</h1>
        <li>{id}</li>
        {data && <li>{data.title}</li>}
        {data && <li>{data.body}</li>}
        <NavLink to = "/rq">
        <button>Go Back</button></NavLink>
        </>
    )
 }