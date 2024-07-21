import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-400 text-black p-5 font-semibold rounded-xl mb-4'>Tailwind Test</h1>
    <Card username="chaiaurcode" btnText="Click Me"/>
    <Card username="Rugved" btnText="Visit Me"/>

    </>
  )
}

export default App
