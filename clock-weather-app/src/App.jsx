import { useState } from 'react'
import './App.css'
import Clock from './Components/Clock'
import Weather from './Components/Weather'
import Motivation from './Components/Motivation'

function App() {
 

  return (
    <>
    <Motivation />
    <Weather />
    <Clock />
   </>
  )
}

export default App
