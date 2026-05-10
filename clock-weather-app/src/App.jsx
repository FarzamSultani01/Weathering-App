import { useEffect, useState } from 'react'
import { motion} from 'framer-motion'
import './App.css'
import Clock from './Components/Clock.jsx'
import Weather from './Components/Weather.jsx'
import Motivation from './Components/Motivation.jsx'
import bg_day from './assets/desktop/bg-image-daytime.jfif'
import bg_night from '../src/assets/desktop/bg-night.jpg'
import day_video from './assets/desktop/day.mp4'
import night_video from './assets/desktop/night.mp4'

function App() {
  const [expanded, setExpanded] = useState(false);
 const [bgImage, setBgImage] = useState(bg_day);

 useEffect(()=>{
  const hour = new Date().getHours();
  const isDay = hour >= 6 && hour < 18;
  setBgImage(isDay ? day_video : night_video);
 },[])


  return (
    <>
    <div className="background">
      <video src={bgImage} autoPlay loop muted className='bg-video'/>
      <motion.div className="content"
        initial={{ opacity: 1, y: 50}}  
        animate={{ opacity: 1, y: 0 }}    
        transition={{ duration: 1, ease: "easeOut" }} 
      >
     {!expanded &&
     <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9 }}>
     <Motivation />
     </motion.div> }
     <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}>
      <Weather />
      </motion.div>
       <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
      <Clock expanded={expanded} setExpanded={setExpanded}/>
     </motion.div>
      </motion.div>
      </div>
   
   </>
  )
}

export default App
