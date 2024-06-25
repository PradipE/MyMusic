import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='w-20 h-20 bg-green-600 text-xl'>
      <h1 className=''>Flowbeat</h1>
    </div>
    </>
  )
}

export default App
 