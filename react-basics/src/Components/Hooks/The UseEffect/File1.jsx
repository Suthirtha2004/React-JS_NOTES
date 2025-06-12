import { useEffect, useState } from "react"
import "./index.css"

export const Example1 =()=>{
    const[count,setCount] = useState(0);
    const[name,setName]=useState("");
    const [timer,setTimer] =useState(0);

    useEffect(()=>{
        const inter = setInterval(()=>{
            setTimer((prev)=>(prev+1));
        },1000)

        return ()=> clearInterval(inter);
    })

    useEffect(()=>{
        console.log(name);
       
    },[name]);
    
    useEffect(()=>{
        document.title = `count : ${count}`;
    },[count])

    useEffect(()=>{

        console.log(`count is : ${count}`);

    },[count])

    return(
        <>
        <section className="counter-container">
            <h1>Counter : {count}</h1>
            <button 
            onClick = {()=>setCount(count+1)}
            className="bg-green-400 px-1.5 py-1.5 rounded-3xl shadow-2xs">
                Increment
            </button>
            <br/>
            <label>
                Name
                <input type="text"
                name="name"
                value={name}
                onChange={(e)=>setName(e.target.value)} />
            </label>

            <h2>Live Count = {timer}</h2>
           
        </section>
         < Date_values/>
        </>
    )
}

const Date_values = () =>{
 
    const[date,setDate]=useState("");
    

    useEffect(()=>{
        setInterval(()=>{
             const newdate = new Date();
        setDate(newdate.toLocaleTimeString());
        },1000)
       
    },[])
    return(
        <h1 className="font-serif size-1.5">Date: {date}</h1>
    )
}