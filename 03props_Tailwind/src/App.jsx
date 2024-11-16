import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  

  let obj = {
    name2: "Aditya",
    age: 21
  }

  const arr = [1,2,3,4,5]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <div className='grid grid-cols-2 gap-3'>
      <Card name="Aditya Upadhyay" myobj={obj} myarr = {arr} />
      
      </div>
    </>
  )
}

export default App
