import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 let [counter, setCounter] = useState(10) //usestate is a hook ye UI m value ko change krne m help krte h
 // method h jo control krega iss variable ko like [login, setlogin]

 // let counter = 15;
 

  const addValue =() => {
    if(counter <20){ 

      counter +=  1 // sirf ese update nahi hoga function call krna pdega
      setCounter(counter)
    }
    else setCounter(20)
    
    // console.log("clicked", counter);
  }

  const removeValue =() => {
    if(counter>0){
  setCounter(counter - 1) // function ese bhi call hota hai, ab mat bhooliyo
    }
    else {
      setCounter(0)
    }
    // console.log("clicked", counter);
  }
  
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}
      >Add Value </button>
      <br />
      
      <button onClick={removeValue}>Remove Value </button>
      {/* <p>footer {counter}</p> */}
    </>
  )
}

export default App
