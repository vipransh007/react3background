import React, { useState } from 'react'

function App() {

  const [color , seteColor] = useState("white")
  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}} >

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"> 
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={() => seteColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>Red</button>
          <button onClick={() => seteColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Green"}}>Green</button>
          <button onClick={() => seteColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Blue"}}>Blue</button>
          <button onClick={() => seteColor("black")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Black"}}>Black</button>
          <button onClick={() => seteColor("olive")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"olive"}}>Olive</button>
          <button onClick={() => seteColor("pink")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"pink"}}>Pink</button>
          <button onClick={() => seteColor("purple")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"purple"}}>Purple</button>
          <button onClick={() => seteColor("yellow")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"yellow"}}>Yellow</button>
          <button onClick={() => seteColor("orange")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"orange"}}>Orange</button>
        </div>
      </div>
    </div>
  )
}

export default App
