import { useState } from "react"


export const State = () =>{
    
    const[count,setCount] = useState(0);

    const HandleButtonClick= () =>{
            setCount(()=> count+1);
            console.log(count);
    }
    return(
        <>
        <h1>{count}</h1>
        <button className="bg-red-400 align-middle flex-col px-2 py-2 border-b-black " onClick={HandleButtonClick}>Click me</button>
        </>
    )
}