import React, { useState } from 'react'

const ColorCard = ({Colors}) => {
  const [newColor, setNewColor] = useState();


  const handleClick = (value) =>{
    setNewColor(value)
    Colors(value)
  }
  return (
    <div className='w-full h-full bg-white rounded-md'>
      <div>
      <div className='grid
       grid-cols-3 gap-3 p-4'>
          <button className='bg-red-700 text-white rounded-md' onClick={() => handleClick("yellow")}>red</button>
          <button className='bg-yellow-400 text-white rounded-md ' onClick={() => handleClick("yellow")}>yellow</button>
          <button className='bg-blue-700 text-white rounded-md' onClick={() => handleClick("blue")}>blue</button>
          <button className='bg-purple-700 text-white rounded-md' onClick={() => handleClick("purple")}>purple</button>
          <button className='bg-green-700 text-white rounded-md' onClick={() => handleClick("green")}>green</button>
          <button className='bg-black text-white rounded-md' onClick={() => handleClick("black")}>black</button>
          <button className='bg-gray-600 text-white rounded-md' onClick={() => handleClick("gray")}>gray</button>
          <button className='bg-orange-700 text-white rounded-md' onClick={() => handleClick("orange")}>orange</button>
          <button className='bg-pink-700 text-white rounded-md' onClick={() => handleClick("pink")}>pink</button>
       </div>
      </div>
    </div>
  )
}

export default ColorCard