import { useState } from 'react'
import './App.css'
import Project from './components/projects/Projects'
import ParentComp from './components/childernProps/ParentComp'
import LifecycleDemo from './components/LifecycleDemo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Project/> 
      <ParentComp/>
      <LifecycleDemo/> 
    </>
  )
}

export default App
