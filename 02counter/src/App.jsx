import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)

  // let counter = 15

  const addValue = () =>{
    if(counter>=20){
      alert("No Values Above 20!!")
    }
    else{
    setCounter(counter+1)
    }
  }
  const removeValue = () =>{
    if(counter<=0){
      alert("No Negative Values!!")
    }
    else{
    setCounter(counter-1)
    }
  }

  return (
    <>
     <h2>chai aur react</h2>
     <h2>Counter value : {counter}</h2>

     <button onClick={addValue}>Add Value : {counter}</button>
     <br/>
     <button onClick={removeValue}>Remove Value : {counter}</button>
     <p>footer : {counter}</p>
    </>
  )
}

export default App
