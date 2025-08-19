import { useState } from 'react'
import './App.css'
import Project from './components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Project/>  
    </>
  )
}

export default App
