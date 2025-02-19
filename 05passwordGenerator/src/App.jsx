import { useState, useCallback } from 'react'
import './index.css'

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "`~!@#$%^&*_-|;:,./?><"
  }, [length, numAllowed, charAllowed, setPassword])


  return (
    <>
      <h1 className='text-4xl text-center underline text-amber-100'>Password Generator</h1>
    </>

  )
}

export default App
