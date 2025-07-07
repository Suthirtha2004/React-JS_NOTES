import axios from "axios"



//The Axios file - create instance of axios 

const api = axios.create({
    baseURL : "https://jsonplaceholder.typicode.com",
});

//Create a Get method to fetch the api

export const Getmethod = () =>{
        return api.get("/posts")
}

//Create a function to delete a post from the api
export const GetDelete = (id) =>{
    return api.delete(`/posts/${id}`)
}

export const Addpostmethod = (post) =>{
    return api.post('/posts',post)
}