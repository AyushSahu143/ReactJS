import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)
  const obj = {
    username: "Ayush",
    age: 19.5,
    role: "SDE-1",
    exp: "2 years"
  } 

  return (
    <>
   <h1 className='bg-amber-200 text-black p-4 rounded-xl text-xl md:text-3xl lg:text-5xl'>Tailwind test</h1>
    <Card user={obj} btnTxt = "Visit Profile" />
   </>
  )
}

export default App
