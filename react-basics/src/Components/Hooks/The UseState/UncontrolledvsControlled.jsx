import { useState } from "react";


export const Controlled_Form = () =>{
      
    const [name,setName] = useState("");

    const handleName = (e) =>{
        setName(e.target.value);
    }


    const handleSubmit =(event)=>{
        event.preventDefault();
        // const data = document.getElementById("inputName").value; This is through DOM manipulation
        console.log(name);

    };
    return(
        <>
        <section>
            <h1>Controlled Form</h1>
            
            <form onSubmit={handleSubmit}>
                <label>Name
                    <input id="inputName" type="text" name="name" value ={name} onChange={handleName}/>
                </label>
                <br />
                <button className="bg-blue-400" type="submit" >
                    Submit
                </button>
            </form>
        </section>
        </>
    )
}