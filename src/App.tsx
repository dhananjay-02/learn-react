import { useState } from 'react'
import './App.css'
import Project from './components/projects/Projects'
import ParentComp from './components/childernProps/ParentComp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Project/> 
      <ParentComp/> 
    </>
  )
}

export default App
