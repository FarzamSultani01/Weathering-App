import {useState,useEffect} from 'react'
import './Motivation.css'
import refreshIcon from '../assets/desktop/icon-refresh.svg'
import quotes from './quote'


function Motivation() {
  const [quote, setQuote]=useState("");
 const fetchQuote = async()=>{
  const random = quotes[Math.floor(Math.random()*quotes.length)];
  setQuote(`"${random.q}" ${random.a}`);
 }

  useEffect(()=>{
    fetchQuote();
  },[])

  return (
    <div className='motivation'>
      <div className="motivation-content">
        <p className="quote">{quote}</p>
        <img src={refreshIcon} alt="" onClick={fetchQuote}/>
      </div>
    </div>
  )
}

export default Motivation