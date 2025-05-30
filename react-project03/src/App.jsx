import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const myObj ={
    user : "Archer"
  }
  const myArr = [1,2,3]


  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl' >Tailwind Test</h1>
      <Card  year="2024" btnText='Click here'/>
      <Card year= "2025"/>
      

    </>
  )
}

export default App
