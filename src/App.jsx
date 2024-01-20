import React, { useEffect, useState } from 'react'
import Card from './Components/Card'
import getFromattedWeatherData from './service/WeatherService'
import ColdBg from './assets/Cold.jpg'
import HotBg from './assets/HOT.jpg'
import Load from './assets/Load.jpg'
const App = () => {
  const [bgr, setbg] = useState(Load)
  const [city, setcity] = useState('Delhi')
  const [weather, setweather] = useState(null)
  const [units, setunits] = useState('metric')
  const date = new Date();
  const currentDate = {
    day :  date.getDate(),
    month:  date.getMonth()+1,
    year : date.getFullYear()
  }
  useEffect(() => {
    const fetchweather= async ()=>{
      const data = await getFromattedWeatherData(city,units)
      setweather(data)

      //dynamic background
      const threshhold = units==='metric'?20:60
      if(data.temp<=threshhold){setbg(ColdBg);
    }
      else{setbg(HotBg); 
    }
    }
    fetchweather();
  }, [units,city])

    const ChangeUnit = ()=>{
      if(units==='metric'){setunits('imperial')}
      else {setunits('metric')}
    }

    const enterKeyPressed = (e)=>{
      if(e.keyCode===13){
        setcity(e.currentTarget.value)
        e.currentTarget.blur()// removes focus form the input field after enter is pressed
      }
    }
  return (
    <div className="bg-cover w-full h-screen bg-center"
      style={{backgroundImage: `url(${bgr})` }}
    >
      <Card weather={weather} ChangeUnit={ChangeUnit} enterKeyPressed={enterKeyPressed} units={units} currentDate={currentDate}/>
    </div>
  )
}

export default App
