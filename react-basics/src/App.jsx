import { useState } from 'react'


// <> can be written as <React.fragment></React.fragment>

function App() {

  return ( //[<Create_new_Component key="1" />,<Create_new_Component key="2"/>] -> Array with keys method
    <>
    <Create_new_Component></Create_new_Component>
    <Create_new_Component></Create_new_Component>
    <Create_new_Component></Create_new_Component> 
    </>
   
  )
       
  
}

export default App

 const Create_new_Component = () =>{

  const name = "Archer";
  const Type_genre = function(){
    const val = "Series"
    return val;
  }

  const age = 15;
   
  // let canWatch = "Not Available";
  // if(age>=18){
  //   canWatch = "Watch Now" 
  // }   -- This method is beneficial as it avoids cluttering and easily passes a value and checks condition while taking a single dunakic value

  //The function method - for conditional values
  const watchFactor = () =>{
    if(age>18){
      return "Watch Now";
    }
    else{
      return "Not Available"
    }
  }

  // if(age >= 18){
  //      return (
  //   <div>
  //     <div>
  //       <img src="/moon_knight.jpg" alt=""  width="30%"  height="30%"/>
  //     </div>
  //     <h1>Hi this is my first React Project.My name is {name}</h1>
  //     <p>This way we can create conponents in React a very easy way to create components.Moonknight got a rating of {1+2+3}</p>
  //     <p>Its a  : {Type_genre()}</p>
  //     <button>Not Available</button>
  //   </div>
  // );
  // };   This has an issue because the code is being repeatedly.



  return (
    <div>
      <div>
        <img src="/moon_knight.jpg" alt=""  width="30%"  height="30%"/>
      </div>
      <h1>Hi this is my first React Project.My name is {name}</h1>
      <p>This way we can create conponents in React a very easy way to create components.Moonknight got a rating of {1+2+3}</p>
      <p>Its a  : {Type_genre()}</p>
      <button>{//age >= 18 ? "Watch Now" : "Not Available"  ---> This method is used with ternary operator as it ensures both benefit and resuability
              //canWatch
              watchFactor()
      }
       </button>
    </div>
  );
 };
