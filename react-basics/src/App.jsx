import { useState } from 'react'
import Events from "../src/Components/EventHandling"
import { Event_props } from './Components/EventProps'
import { EventPropagate } from './Components/EventPropagation'
import { State } from './Components/Hooks/State'
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

    < State/>
    </>
   
  )
       
  
}

export default App

 
