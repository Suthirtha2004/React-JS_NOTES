import { useState } from 'react'
import '../The UseState/Chall.css'

export const Reg_For = () =>{

    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [phNumber,setPhNumber] = useState("");
    const [passWord,setPassword] = useState("");

    const handleChange= (e) =>{
            const {name,value} = e.target;
            switch(name){
                case "firstName":
                    setFirstName(value);
                    break;
                
                case "lastName":
                    setLastName(value);
                    break;
                
                case "phNumber" :
                    setPhNumber(value);
                    break;
                
                case "passWord" :
                    setPassword(value);
            }
    }

    const handleSubmit =(event)=>{
            event.preventDefault();
            const formData = {
                firstName,
                lastName,
                passWord,
                phNumber,
            };
            console.log(formData)
    }
    return(
        <>
       
            <h1>Registration Form</h1>
        <form className='counter-container' onSubmit={handleSubmit}>
            <label htmlFor='firstName'>
                First Name
                <input type="text" 
                name="firstName"
                value ={firstName}
                onChange={handleChange}
                />
            </label>
            <label htmlFor='lastName'>
                Last Name
                <input type="text" 
                name="lastName"
                value ={lastName}
                onChange={handleChange}
                />
                
            </label>
            <label htmlFor='passWord'>
                Password
                <input type="password" 
                name="passWord"
                value={passWord}
                onChange={handleChange}
                />
            </label>
             <label htmlFor='phNumber'>
                 Phone number
                <input type="text" 
                name="phNumber"
                value ={phNumber}
                onChange={handleChange}
                />
            </label>
        <button className='click-button'>Submit</button>
        </form>
       
    
        </>
    )
}