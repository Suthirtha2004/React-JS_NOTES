import { useEffect, useState } from "react"
import "./space.css"
export const SpaceTech = () =>{

    const[apiData,setapiData] = useState("");
 
    const API  = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=WtiR6AZV3vb48MDiPR3qshStNGtYlAcsGQqeM7Xf"

    useEffect(()=>{
        fetch(API)
        .then((response)=>response.json())
        .then((data)=>setapiData(data))
        .catch((error)=>console.log("Error in fetching"));

    },[])
   
    console.log(apiData);
   

    if(!apiData){
        <h1>Loading....Please wait</h1>
    }
        
            return(
        <>
        <div>
            <h1>THE SPACE HUB</h1>
            {apiData.photos && apiData.photos.slice(0,5).map((item)=>{
               return(
                <ul key={item.id}>
                <li >
                    
                    <img src = {item.img_src} width="20%" height="30%" />
                    <h3>{item.camera.full_name}</h3>

                    </li>
                </ul>
)})}
               
              <h2></h2>
            
        </div>
        </>
    )
};