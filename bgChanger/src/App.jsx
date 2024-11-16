import { useState } from "react"
import ColorCard from "./component/ColorCard"

function App() {
  const [color, setColor] = useState("olive")
   function handleColorChange(colorName){
      setColor(colorName)
   }

  return (
    <>
      <div>
      <div className="w-full h-screen"
      style={{backgroundColor:color}}
      >
      <div className="h-[200px] w-[200px]">
        <ColorCard Colors={handleColorChange} />
      </div>
      

      </div>
      </div>
    </>
  )
}

export default App
