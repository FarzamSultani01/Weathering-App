import { useEffect, useState } from 'react'
import './App.css'
import Clock from './Components/Clock.jsx'
import Weather from './Components/Weather.jsx'
import Motivation from './Components/Motivation.jsx'
import bg_day from './assets/desktop/bg-image-daytime.jfif'
import bg_night from '../src/assets/desktop/bg-night.jpg'

function App() {
 const [bgImage, setBgImage] = useState(bg_day);

 useEffect(()=>{
  const hour = new Date().getHours();
  const isDay = hour >= 6 && hour < 18;
  setBgImage(isDay ? bg_day : bg_night);
 })


  return (
    <>
    <div className="background">
      <img src={bgImage} alt="background-day" className='bg-day' />
      <div className="content">
      <Motivation />
      <Weather />
      <Clock />
      </div>
      </div>
   
   </>
  )
}

export default App
