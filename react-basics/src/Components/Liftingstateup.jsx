import { useState } from "react";

export const Lifting_State = () =>{
   const [inputVal,setInputVal] = useState("");
    
    return (
        <>
        <InputField inputval ={inputVal} setInputVal ={setInputVal}/>
        <DisplayComponent inputVal ={inputVal} />

        </>
    )
}

const InputField =({inputVal,setInputVal}) =>{

    return(
        <>
        <input
        type ="text"
        placeholder="Enter your Details"
        value={inputVal}
        onChange ={(e)=>setInputVal(e.target.value)}
         />
         </>
    )
}

const DisplayComponent = ({inputVal}) =>{
    return(
        <>
        <p>The current state is : {inputVal}</p></>
    )
}