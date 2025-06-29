import React, { useState } from 'react';
import './Toggle.css';
import { FaUserSecret } from "react-icons/fa";

const ToggleSwitch = () => {
    const[isOn,setIsOn] = useState(false);
  
    const changeToggle = () =>{ //value is now set to false
        setIsOn((value) => 
           { return !value }
        );
    };
  return (
    <>
    <h1>Toggle Switch <FaUserSecret /></h1>
    <div className="switch-container">
      <div 
        className={`toggle-switch ${isOn? 'on' : 'off'}`} 
        onClick ={changeToggle}
      >
        <div className="toggle-thumb">
            {isOn ? "ON" : "OFF"}
    
        </div>
      </div>
    </div>
    </>
  );
};

export default ToggleSwitch;
