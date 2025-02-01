import { useState } from 'react'
import './index.css'

function App() {
  const [color, setColour] = useState("black")

  return (
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-2 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={()=>setColour("red")} //onclick accept krta hai function toh ek callback chaiye hoga
            className="outline-none px-4 py-2 rounded-full shadow-xl"
            style={{ backgroundColor: "red" }}
          >Red</button>
          <button
           onClick={()=>setColour("green")}
            className="outline-none px-4 py-2 rounded-full shadow-xl"
            style={{ backgroundColor: "green" }}
          >Green</button>
          <button
           onClick={()=>setColour("cyan")}
            className="outline-none px-4 py-2 rounded-full shadow-xl"
            style={{ backgroundColor: "cyan" }}
          >Cyan</button>
          <button
           onClick={()=>setColour("yellow")}
            className="outline-none px-4 py-2 rounded-full shadow-xl"
            style={{ backgroundColor: "yellow" }}
          >Yellow</button>
          <button
           onClick={()=>setColour("blueviolet")}
            className="outline-none px-4 py-2 rounded-full shadow-xl"
            style={{ backgroundColor: "blueviolet" }}
          >violet</button>
          <button
           onClick={()=>setColour("pink")}
            className="outline-none px-4 py-2 rounded-full shadow-xl"
            style={{ backgroundColor: "pink" }}
          >Pink</button>
          <button
           onClick={()=>setColour("lavender")}
            className="outline-none px-4 py-2 rounded-full shadow-xl"
            style={{ backgroundColor: "lavender" }}
          >Lavender</button>
        </div>
      </div>
    </div>
  )
}

export default App
