import { useId, useRef } from "react";
import { Child_Ref } from "./ChildRef";

export const Ref_hook = () =>{
 
     const passwordId = useId();
     const emailId = useId();
     const id = useId();
    
     const username = useRef(null);
     const password = useRef(null);

    const handleSubmit = (event)=>{
            event.preventDefault();
            console.log(username.current.value);
            console.log(password.current.value);
            
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
         <Child_Ref label="username" ref={username} />
         <br/>
        <Child_Ref label="password" ref={password} />
         <br/>
         <button type="submit" className="bg-red-500 px-1.5 py-1.5 rounded-2xl" >Submit</button>
         <br />
         </form>


         <form>
            <label htmlFor={id+"usernameId"}>
                Name
            <input 
            type="text"
            name="username"
            id={id+"usernameId"}/>
            </label>
            <label htmlFor={emailId}> 
            {/* For creating multiple id with a single user id */}
                Name
            <input 
            type="text"
            name="username"
            id={emailId}/>
            </label>
            <label htmlFor={passwordId}>
                Name
            <input 
            type="text"
            name="username"
            id={passwordId}/>
            </label>

         </form>
        </>


    )
}