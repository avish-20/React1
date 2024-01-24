import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myArr = [1,2,3]
  return (
    <>
       <h1 className='bg-green-400 text-black rounded-xl'>Tailwind Test</h1>
       <Card/>
       <Card username="chaiorcode" myObj = {myArr}/>
    </>
  )
}

export default App
