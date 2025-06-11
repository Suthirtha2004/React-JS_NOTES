import { useState } from "react"

export const Contact = ()=>{

    const [user,setUser] = useState({
        fullName : "",
        email : "",
        msg : "",
    })


    const handleChange = (e) =>{
        const {name,value} = e.target;
        setUser((prev)=>({...prev,[name]:value}));
    }
    const handleSubmit =(event)=>{
        event.preventDefault();
        console.log(user);
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
                    value={user.fullName}
                    onChange={handleChange}/></label>
                <br />
                <label>
                    Email
                    <input 
                    type ="text"
                    name ="email"
                    value ={user.email}
                    onChange={handleChange}
                    />
                    </label>
                    <br />
                <label>
                    Message
                    <input 
                    type ="text"
                    name ="msg"
                    value ={user.msg}
                    onChange={handleChange}
                    />
                    </label>
                <button className="click-button">Submit</button>
                </form>
            </section>
            <span>
                <h1>This is {user.fullName}</h1>
            </span>
            </>
    )
}