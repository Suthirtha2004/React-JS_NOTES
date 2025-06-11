import { useState } from 'react'
import '../The UseState/Chall.css'

export const RegistrationRight = () =>{

   const [user,setUser] = useState({
    firstName: "",
    lastName: "",
    passWord: "",
    phNumber:"",
   }
)

    const handleChange= (e) =>{
            const {name,value} = e.target;
            setUser((prev)=>({...prev,[name]:value}));

            
    }

    const handleSubmit =(event)=>{
            event.preventDefault();
            console.log(user)
    }
    return(
        <>
       
            <h1>Registration Form</h1>
        <form className='counter-container' onSubmit={handleSubmit}>
            <label htmlFor='firstName'>
                First Name
                <input type="text" 
                name="firstName"
                value ={user.firstName}
                onChange={handleChange}
                />
            </label>
            <label htmlFor='lastName'>
                Last Name
                <input type="text" 
                name="lastName"
                value ={user.lastName}
                onChange={handleChange}
                />
                
            </label>
            <label htmlFor='passWord'>
                Password
                <input type="password" 
                name="passWord"
                value={user.passWord}
                onChange={handleChange}
                />
            </label>
             <label htmlFor='phNumber'>
                 Phone number
                <input type="text" 
                name="phNumber"
                value ={user.phNumber}
                onChange={handleChange}
                />
            </label>
        <button className='click-button'>Submit</button>
        </form>
       
    
        </>
    )
}