// const Users = [
//     { name : "Archer" , age : 18 } ,
//     { name : "Knight" , age : 20} ,
//     { name : "Moon" , age : 21} ,
//     { name : "Ok" , age : 20 } 
// ];

import { useState } from "react"

//2nd method - useState Hook

export const Derived_State = () =>{
   
   const [user,Setuser] = useState(
        [
   { name : "Archer" , age : 18 } ,
    { name : "Knight" , age : 20} ,
    { name : "Moon" , age : 21} ,
    { name : "Ok" , age : 20 } 
 ]
   )

   //Using Derived State

   const userCount = user.length;
   const avg_count = (user.reduce((acc,curr)=>acc+=curr.age,0))/userCount;


    return(
        <>
        <div>
            <h1>The Users List</h1>
           <ul>
               {user.map((current,index)=> {
                 return (
                        <li key={index}>
                            {current.name} - {current.age};
                        </li>
                 )
                }
            )}
           </ul>
           <p>Total users : {userCount}</p>
           <p>Average Age of Users : {avg_count}</p>
        </div>
        </>
    )
}