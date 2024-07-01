import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Href from './components/atoms/href'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Href/>
      
      <div className='fit-text'>
      <h1>FITNESS</h1>
      <p>CONVIERTETE EN GANADOR</p>
      </div>
    </>
  )
}

export default App
