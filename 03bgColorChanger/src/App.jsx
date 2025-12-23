import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("indigo-600")

  return (
    <>
    <div className='bg-indigo-600 duration-400 w-full h-screen flex flex-col justify-start items-center' style={{backgroundColor: color}}>
    <h1 className='inline-block px-2 py-1.5 border-2 mx-1 my-6 text-3xl text-white rounded-4xl shadow-2xl bg-indigo-600'>Background Color changer</h1>
    <div className='flex flex-wrap justify-center mb-6 mt-auto gap-10 bg-amber-100 rounded-2xl'>
    <button className=' bg-red-600 border-2 px-2 my-2 ml-8 rounded-xl text-white shadow-3xl' onClick={() => {setColor("red")}}>Red</button>
    <button className=' bg-green-600 border-2 px-2 my-2 rounded-xl text-white' onClick={() => {setColor("green")}}>Green</button>
    <button className=' bg-black border-2 px-2 my-2 rounded-xl text-white' onClick={() => {setColor("black")}}>Black</button>
    <button className=' bg-pink-400 border-2 px-2 my-2 rounded-xl text-white' onClick={() => {setColor("pink")}}>Pink</button>
    <button className=' bg-yellow-400 border-2 px-2 my-2 rounded-xl text-white' onClick={() => {setColor("yellow")}}>Yellow</button>
    <button className=' bg-indigo-600 border-2 px-2 my-2 mr-8 rounded-xl text-white' onClick={() => {setColor("#3949AB")}}>Reset</button>
    </div>
    </div>
    </>
  )
}

export default App
