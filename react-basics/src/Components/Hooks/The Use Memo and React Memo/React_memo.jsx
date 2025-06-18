import { memo, useState ,useMemo } from "react"
import {Counts} from "./Count";


export const React_memo = () =>{

    const [count,setCount] = useState(0);

    const Mydata = useMemo(()=>{
        return {
        name : "Archer",
        age : 21,
        };
    },[])
    return(
        <>
        <div>
        <h1>{count}</h1>
        <br />
        <button className="bg-blue-600 px-1.5 py-1.5 rounded-b-3xl shadow-2xs" onClick={()=>setCount((count)=>count+1)}>Increment</button>
        </div>
        <div>
            <Counts data={Mydata}/>
        </div>
        </>
    )

}

