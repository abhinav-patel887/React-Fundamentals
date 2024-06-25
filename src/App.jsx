import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('black')
  return (
    <>
    <div className='w-full h-screen duration-200 bg-black' style={{backgroundColor:color}}> 
      -<div className='fixed flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-4 px-3 py-2 rounded-full'>
          <button onClick={()=>{setColor('yellow')}} className='outline-none px-4 py-1 rounded-full text-yellow shadow-lg bg-yellow-200 font-bold'>Yellow</button>
          <button onClick={()=>{setColor('red')}} className='outline-none px-4 py-1 rounded-full text-yellow shadow-lg bg-red-600 font-bold'> Red</button>
          <button onClick={()=>{setColor('blue')}} className='outline-none px-4 py-1 rounded-full text-yellow shadow-lg bg-blue-600 font-bold'> Blue</button>
          <button onClick={()=>{setColor('green')}} className='outline-none px-4 py-1 rounded-full text-yellow shadow-lg bg-green-600 font-bold'> Green</button>
        </div>
        <div className='flex flex-wrap justify-center gap-3 px-3 py-2 rounded-full'>
          <button onClick={()=>{setColor('olive')}} className='outline-none px-4 py-1 rounded-full text-yellow shadow-lg font-bold' style={{backgroundColor:'olive'}}>Olive</button>
          <button onClick={()=>{setColor('violet')}} className='outline-none px-4 py-1 rounded-full text-yellow shadow-lg bg-pink-400 font-bold'> Pink</button>
          <button onClick={()=>{setColor('orange')}} className='outline-none px-4 py-1 rounded-full text-yellow shadow-lg bg-orange-600 font-bold'> Orange</button>
          <button onClick={()=>{setColor('purple')}} className='outline-none px-4 py-1 rounded-full text-yellow shadow-lg bg-violet-600 font-bold'> Violet</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
