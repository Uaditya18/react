import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  const  [Counter,setCounter ] =useState(15)
  // let Counter = 15

  const addValue = () =>{
    // Counter ++;
    if(Counter<20){
      // setCounter(prevCounter => prevCounter + 1)  // setCounter(couter +1) we cann't do it multiple times as reacts new feature fibre send all these updated in bunch and consider only one 
      // // so we can pass a setter function to setter methods like this 
      // setCounter(prevCounter => prevCounter + 1)
      // setCounter(prevCounter => prevCounter + 1)
      // setCounter(prevCounter => prevCounter + 1)
      // setCounter(prevCounter => prevCounter + 1)


      // setCounter(Counter+1)
      // setCounter(Counter+2)
      // setCounter(Counter+3)  // will again consider as batches and all line will execute on origin value of Counter at last lastly updated value is being considered
      
        setCounter(Counter+1) // for now let make it simple
      console.log(Counter)
    }
  }

  const removeValue = () =>{
    // Counter--;
    if(Counter>0){
      setCounter(Counter-1)
      console.log(Counter);
    }
    
    
  }

  return (
    <>
      <h1>React</h1>
      <h2>Counter Value: {Counter}</h2>


      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
