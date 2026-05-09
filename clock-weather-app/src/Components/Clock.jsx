import {useState,useEffect} from 'react'
import './Clock.css'
import {motion} from 'framer-motion'
import sunIcon from '../assets/desktop/icon-sun.svg'
import moonIcon from '../assets/desktop/icon-moon.svg'
import arrowDown from '../assets/desktop/icon-arrow-down.svg'
import arrowUp from '../assets/desktop/icon-arrow-up.svg'



function Clock({expanded,setExpanded}) {
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
  const timezone = "Asia/Kabul";
  const dayOfWeek = time.getDay();
  const dayOfYear = Math.floor((time - new Date(time.getFullYear(), 0, 0)) / 86400000);
  const weekNumber = Math.ceil(dayOfWeek / 7);
  return (
    <div className={`clock_continer ${expanded ? "expanded" : ""}`}>
        <div className="clock_contents">
        
        <p className='message'><img src={icon} alt="icon day/night" /><span>{message}</span></p>
       
        <h1 className='timeShow'>{timeFormat}</h1>
        <p className='city'>{city}</p>
        <div className="btn"> 
          <button onClick={()=> setExpanded(!expanded)}>{expanded ? "Less" : "More"}{""} <img src={expanded ? arrowUp : arrowDown} alt="" /></button>
        </div>
        </div>
        {expanded && (
          <motion.div className="expanded_info"
    initial={{ opacity: 0, y: 50 }}  
    animate={{ opacity: 1, y: 0 }}    
    exit={{ opacity: 0, y: 50 }}      
    transition={{ duration: 0.5, ease: "easeOut" }}>
            <div>
              <p className='lable'>Current Time Zone</p>
              <h2>{timezone}</h2>
            </div>
            <div>
              <p className='lable'>Day of the week</p>
              <h2>{dayOfWeek}</h2>
            </div>
            <div>
              <p className='lable'>Day of the year</p>
              <h2>{dayOfYear}</h2>
            </div>
            <div>
              <p className='label'> Week Number </p>
              <h2>{weekNumber}</h2>
            </div>
           </motion.div>
            )}
      </div>
  )
}

export default Clock