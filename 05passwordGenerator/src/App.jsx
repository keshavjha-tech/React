import { useState, useCallback, useEffect, useRef } from 'react'
import './index.css'

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // "useRef hook"- jab kisi cheej ka reference lena hotahaitab iska use karte hai. aur ye variable me store hota h

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(
    () => {
      let pass = ""
      let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
      if (numAllowed) str += "0123456789"
      if (charAllowed) str += "`~!@#$%^&*_-|;:,./?><"

      for (let i = 1; i <= length; i++) {
        let charIndex = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(charIndex)
      }
      setPassword(pass)
    },

    [length, numAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 50)
    window.navigator.clipboard.writeText(password);
    // alert("Password copied! 🔑");
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])


  return (
    <div className='relative min-h-screen'>
      <div className=' absolute inset-0 flex items-center justify-center bg-gray-800'>
        <div className=' w-full  max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-sky-400 bg-gray-700'
        >
          <h1 className='text-white text-center my-1'>Password generator</h1>

          <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-white">
            <input
              type="text"
              value={password}
              className='outline-none w-full py-1 px-3'
              placeholder='Password' readOnly
              ref={passwordRef}
            />

            <div className='flex'>
              <button
                onClick={copyPasswordToClipboard}
                className='outline-none rounded-tl-lg rounded-bl-lg cursor-pointer bg-blue-700 text-white px-3 py-0.5 shrink-0 active:scale-90 activate:bg-blue-800 transition-transform duration-100 '>
                Copy</button>

              <button
                onClick={passwordGenerator}
                className='outline-none  bg-green-600 text-white px-3 py-0.5 shrink-0 rounded-tl-none rounded-bl-none cursor-pointer active:scale-95 active:bg-green-700 transition-transform duration-100 rounded-l-md'
                title="Refresh Password"
              >
                Refresh
              </button>
            </div>
          </div>

          <div className=' flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input type="range"
                min={6}
                max={75}
                value={length}
                className='cursor-pointer'
                onChange={(e) => { setLength(e.target.value) }}
              />
              <label>Length: {length}</label>
            </div>

            <div className='flex items-center gap-x-1'>
              <input
                type="checkbox"
                defaultChecked={numAllowed}
                id='numberInput'
                className='cursor-pointer'
                onChange={() => { setNumAllowed((prev) => !prev); }}
              />
              <label htmlFor='numberInput'>Numbers</label>
            </div>


            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="characterInput"
                onChange={() => {
                  setCharAllowed((prev) => !prev)
                }}
              />
              <label htmlFor="characterInput">Characters</label>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
