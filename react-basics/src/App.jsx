import { useState } from 'react'
import Events from "../src/Components/EventHandling"
import { Event_props } from './Components/EventProps'
import { EventPropagate } from './Components/EventPropagation'
import { State } from './Components/Hooks/State'
import { Derived_State } from './Components/Array'
import { Lifting_State } from './Components/Liftingstateup'

import ToggleSwitch from './Projects/ToggleSwitch'

import { Short_circuit } from './Components/ShortCircuit'
import Counter from './Components/Hooks/The UseState/Challenge'

import { Controlled_Form } from './Components/Hooks/The UseState/UncontrolledvsControlled'

import { Reg_For } from './Components/Hooks/The UseState/RegistrationForm'

import { RegistrationRight } from './Components/Hooks/The UseState/RegistrationRight'

import { LoginForm } from './Components/Hooks/The UseState/LoginForm'

import { Contact } from './Components/Hooks/The UseState/ContactForm'

import { Example1 } from './Components/Hooks/The UseEffect/File1'

import { SpaceTech } from './Projects/SpaceTech'

import { Ref_hook } from './Components/Hooks/The Use Effect/Reff'

import { Home } from './Components/Hooks/Context API/home'

import { Datacontext, DataProvider } from './Components/Hooks/Context API/contextindex'
import { Parent_Component } from './Components/PropsDrilling'
import { DarkLightTheme, ThemeProvider } from './Components/Hooks/Context API/darklight'
import { Reduce_comp } from './Components/Hooks/The Use Reducer/Reducercomp'
import { React_memo } from './Components/Hooks/The Use Memo and React Memo/React_memo'
import { Use_call_back } from './Components/Hooks/The Use Memo and React Memo/Use_CallBack'
// import {Gadgets}  from '../src/Components/Technical'

// import Create_new_Component from './Components/NewComponents' //Normal Expot and Import
//import Header,{ Create_new_Component, Footer} from './Components/NewComponents'

// <> can be written as <React.fragment></React.fragment>

function App() {

  return ( //[<Create_new_Component key="1" />,<Create_new_Component key="2"/>] -> Array with keys method
    <>
    {/* <Events />
    <Event_props />
    <EventPropagate /> */}
    {/* <Gadgets /> */}
    {/* <Header />
    <Create_new_Component></Create_new_Component>
    <Create_new_Component></Create_new_Component>
    <Create_new_Component></Create_new_Component> 
    <Footer></Footer> */}

    {/* < State/>
    <Silbling_component />
    <Derived_State />*/}
    {/* <Lifting_State />  */}

    {/* <ToggleSwitch /> */}
    
    {/* <Short_circuit /> */}

    {/* <Counter />

    < Controlled_Form />
     */}
     {/* < Reg_For /> */}
     
     {/* < RegistrationRight /> */}

     {/* <LoginForm /> */}

     {/* < Contact/> */}

     {/* < Example1/> */}

    {/* <SpaceTech /> */}

    {/* < Ref_hook /> */}


    {/* <DataProvider>
      <Home />
    </DataProvider> */}

    {/* < Parent_Component /> */}

    {/* <ThemeProvider>
      <DarkLightTheme />
    </ThemeProvider> */}

    {/* <Reduce_comp /> */}

    {/* <React_memo /> */}

    <Use_call_back />

    </>
    
    
   
  )
       
  
}

export default App

 
const Silbling_component = () =>{
  console.log("Rendering Sibling Component");
  return (
    <h1>Hello this is Sibling</h1>
  )
}
