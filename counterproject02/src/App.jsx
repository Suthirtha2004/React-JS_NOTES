import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 //In the useState hook first parameter we can give any kind of value we have //Setcounter is a method or function which will help to update the values of counter
  let [counter,setCounter] = useState(5) // First parameter is a varriable paramter and next is the reference to the function

  //let counter = 5 ;
  
  const increaseVal= () =>{
    console.log("value added",Math.random())
    //counter+=1;
    setCounter(counter + 1) // The function is called and the updated value is passed.Also this helps to sync the state and ui changes and thus update the places where counter is used
    
  }
   
  const  decreaseVal = () => {
    setCounter(counter-1);
  }
  return (
    <>
     <h1>The Second Project</h1>
     <h2>Counter value : {counter}</h2>
     <button
     onClick={increaseVal}>Increase {counter}</button>
     <br />
     <button onClick={decreaseVal}>Decrease {counter}</button>
     <p>footer : {counter}</p>
    </>
  )
}

export default App
