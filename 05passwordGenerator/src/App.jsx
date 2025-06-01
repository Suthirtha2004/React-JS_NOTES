import { useCallback, useEffect, useState ,useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [charAllowed , setCharAllowed] = useState(false);
  const [password,setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if(numberAllowed) str+= "0123456789"
        if(charAllowed) str+= "!@#$%^&*(){}[]+=~`"

        for(let i=1;i<=length;i++){
          let char = Math.floor(Math.random() * str.length + 1);
          pass += str.charAt(char);
        }

        setPassword(pass);

  } , [length,numberAllowed,charAllowed,setPassword])

  const CopyToClipboard = useCallback(()=>{
        passwordRef
        window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])


  return (
    <>
       <div className = 'w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
           <h1 className='text-white text-center my-3'>Password Generator</h1>
           <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input 
                  type="text"
                  value = {password}
                  className="outline-none w-full py-1 px-3 bg-amber-50"
                  placeholder="Password"
                  readOnly
                  ref = {passwordRef}
              />
              <button onclick={CopyToClipboard}
                className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
                  Copy
                </button>
           </div>
           <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input 
                  type = "range"
                  min={0}
                  max={100}
                  value={length}
                  className='cursor-pointer'
                  onChange={(e) =>{
                    setLength(e.target.value)
                  }}
                  />
                  <label>Length {length}</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input 
                     type="checkbox"
                     defaultChecked={numberAllowed}
                     id="numberInput"
                     onChange ={() => {
                      setNumberAllowed((prev) => !prev);
                     }}

              />
              <label htmlFor= "numberInput">Numbers </label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input 
                     type="checkbox"
                     defaultChecked={charAllowed}
                     id="charInput"
                     onChange ={() => {
                      setCharAllowed((prev) => !prev); //This is a callback function that can be passed and thus the checkbox alters
                     }}

              />
              <label htmlFor= "charInput">Characters</label>
            </div>
           </div>
       </div>
    </>
  )
}

export default App
