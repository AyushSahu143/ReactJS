import About from "./Ayush"
import { useState  } from "react"
import "./App.css"

export default function App() {

  let [counter, setCounter] = useState(15)
  
  // let counter = 15

  const addValue = () => {
    // counter = counter + 1
    if(counter < 20) {
    setCounter(counter+1)
    console.log("add", counter) 
    }   
  }

  const removeValue = () => {
    // counter = counter - 1
    if(counter > 0) {
    setCounter(counter-1)   
    console.log("remove", counter) 
    }
  }

  return (
    <>
    <span className="container">
    <About/>
    <h1>useState Hook {counter}</h1>
    <h2>Counter value: {counter}</h2>
    <button onClick={addValue}>Add button</button>
    <br />
    <button onClick={removeValue}>Reduce button</button>
    <p>Footer: {counter}</p>
    </span>
    </>
  )
}

