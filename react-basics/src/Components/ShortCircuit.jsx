import { useState } from "react"



export const Short_circuit= () =>{
        const [isLog,setIsLog] = useState(true);
        const [user,setUser] = useState("");
   
        const handleToggle= () =>(setIsLog((prev)=>(!prev)))
       

    return (
        <>
        <section className="m-32 p-1.5">
            <h1 className="bg-amber-100 font-bold">Welcome to Short Circuit Eval</h1>

            {isLog && <p> You are Logged in </p> }

             {user ? `Hello ${user}` : "Please Log in"}

                <button onClick={handleToggle} className="bg-amber-400">Toggle Log In</button><br/>
                <button onClick={()=>setUser("Archer")} className="bg-amber-300">Set User</button><br/>
                <button onClick={()=>setUser("")} className="bg-amber-500">Remove user</button>

            
        </section>
        </>
    )
}