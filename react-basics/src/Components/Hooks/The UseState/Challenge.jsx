import { useState } from 'react';
import './Chall.css';

const Counter = () => {

    const[count,setCount] = useState(0);
    const[step,setStep] = useState(0);
    const handleIncrement = () =>{
        setCount(count+step);
    }

    const handleDecrement =() =>{
        setCount(count-step);
    }

    const handleReset = () =>{
        setCount(0);
    }
    
   


  return (
    <div className="counter-container">
      <div className="buttons">
        <button className='click-button' onClick={handleIncrement} disabled={count >= 100}>Increment</button>
        <button className='click-button' onClick={handleDecrement} disabled ={count <= 0}>Decrement</button>
        <button className='click-button' onClick={handleReset}>Reset</button>
      </div>

      <div className="fields">
        <div className="field-group">
          <label htmlFor="step">Step Value:</label>
          <input type="number" id="step" placeholder="Enter step value" value={step} onChange={(e)=>setStep(Number(e.target.value))}/>
        </div>
        <div className="field-group">
          <label>Current Count:</label>
          <div className="count-display">{count}</div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
