import {useState,useEffect} from 'react'
import './Clock.css'
import sunIcon from '../assets/desktop/icon-sun.svg'
import moonIcon from '../assets/desktop/icon-moon.svg'
import arrowDown from '../assets/desktop/icon-arrow-down.svg'


function Clock() {
const [time, setTime] = useState(new Date());

  useEffect(()=>{
    const timer =setInterval(()=>{
      setTime(new Date());
    },1000);
    return () => clearInterval(timer);
  })
  const hour = time.getHours();
  const isDay = hour >= 6 && hour < 18;
  const message = isDay ? "Good Morning, its Currently" : "Good Evening, its Currently ";
  const icon = isDay ? sunIcon : moonIcon;
  const timeFormat = time.toLocaleTimeString("en-US",{
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  })
  const city = "In Kabul , Afghanistan";
  return (
    <div className="clock_continer">
        <div className="clock_contents">
        <p className='message'><img src={icon} alt="icon day/night" /><span>{message}</span></p>
        <h1 className='timeShow'>{timeFormat}</h1>
        <p className='city'>{city}</p>
        <div className="btn"> 
          <button>More <img src={arrowDown} alt="" /></button>
        </div>
        
        </div>
      </div>
  )
}

export default Clock