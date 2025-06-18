import { memo, useCallback, useState } from "react"

const Button = memo(({onClick,children}) =>{

    console.log(`Rendering button : ${children}`);
    return (
        <>
        <button onClick={onClick}>{children}</button>
        </>
    )
})


export const Use_call_back = ()=>{
        const [count,setCount] = useState(0);

        const increment = useCallback(() =>{
            console.log("Increment in log")
            setCount((prev)=>(prev+1));
        },[])

        const decrement = useCallback(()=>{
            console.log("Decrement in log");
            setCount((prev)=>(prev-1));
        },[])

    return(
        <>
        <h1>{count}</h1>
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
        </>
    )
}