import axios from "axios"

const api = axios.create({
    baseURL : "https://jsonplaceholder.typicode.com"
});

export const getPosts =()=>{
    return api.get("/posts");
}

export const FetchPosts = async(pageNumber)=>{
    try{
    const res = await api.get(`/posts?_start=${pageNumber}&_limit=3`);
    return res.status === 200 ? res.data : [];  // ✅ CORRECT
    }
    catch(error){
        console.log(error);
    }
}

//Fetch individual post

export const FetchIndPost = async(id)=>{
    try{
        const res=await api.get(`/posts/${id}`);
        return res.status === 200 ? res.data : [];
    }catch(error){
        console.log(error);
    }
}

export const deletePost = async(id) =>{
    return api.delete(`/posts/${id}`);
}

export const updatePost = async(id) =>{
    return api.patch(`/posts/${id}`,{title : "I have updated the data"});
}