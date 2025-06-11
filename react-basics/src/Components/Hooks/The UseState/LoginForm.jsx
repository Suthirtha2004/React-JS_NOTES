import { useState } from "react"

export const LoginForm = ()=>{

    const[fullName,setName] = useState("");
    const[password,setPassword] = useState("");

    const handleSubmit =(event)=>{
        event.preventDefault();
        const formdata = {
            fullName,
            password,
        }
        console.log(formdata);
    }
    

    return(
            <>
            <section >
                <h1>Login Form</h1>
            <form className="counter-container" onSubmit={handleSubmit}>
                <label>
                    Name
                    <input 
                    type="text"
                    name="fullName" 
                    value={fullName}
                    onChange={(e)=>setName(e.target.value)}/></label>
                <br />
                <label>
                    Password
                    <input 
                    type ="password"
                    name ="password"
                    value ={password}
                    required autoComplete="off"
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                    </label>
                <button className="click-button">Submit</button>
                </form>
            </section>
            <span>
                <h1>This is {fullName}</h1>
            </span>
            </>
    )
}