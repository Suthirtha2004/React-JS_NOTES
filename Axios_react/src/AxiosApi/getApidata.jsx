import axios from "axios"

axios.create({
    baseURL : "https://v2.jokeapi.dev/"
})

export const GetAxiosData = () =>{
  return
    instance.get("joke/Any")
  
}