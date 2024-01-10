import React, { useEffect, useState } from 'react'
import Description from './Components/Description'
import getFromattedWeatherData from './service/WeatherService'
import ColdBg from './assets/Cold.jpg'
import HotBg from './assets/HOT.jpg'

const App = () => {
  const [bgr, setbg] = useState(HotBg)
  const [city, setcity] = useState('Delhi')
  const [weather, setweather] = useState(null)
  const [units, setunits] = useState('metric')
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
      <div className='app  w-full h-lvh bg-opacity-20 bg-black'>
      <div className='over flex items-center justify-center w-full h-lvh bg-black bg-opacity-10'>
        {weather && (
            <div className='contain max-w-3xl h-full flex items-center justify-between flex-col p-4'>
            <div className='secinp w-full rounded-lg text-white flex items-center justify-between bg-black bg-opacity-60 p-4'> 
                <input type="text"
                className='rounded border border-white bg-transparent text-white p-2 font-light focus:outline-none capitalize'
                name='city'
                placeholder='Enter City....'
                onKeyDown={enterKeyPressed}
                 />
                <button
                className=' lg:pl-10 lg:pr-10 lg:pt-2 lg:pb-2 pl-5 pr-5 pt-1 pb-1 bg-white text-black  w-20 text-center rounded-xl border-none font-medium text-xl hover:cursor-pointer hover:bg-gray-200  lg:m-0 ml-1 '
                onClick={ChangeUnit}
                >
                  {`°${units==='metric'?'F':'C'}`}
                </button>
            </div>
            <div className='sectemp flex items-center justify-between bg-black rounded-lg text-white bg-opacity-60 p-4 w-full  '>
                <div className='ic flex flex-col items-center justify-center '>
                    <div className='flex flex-row gap-3'><h3 
                    className='m-0 text-sm font-extralight capitalize '
                    >{`${weather.name}, ${weather.country}`}</h3> <img src={`https://flagsapi.com/${weather.country}/shiny/24.png`} alt="" /></div>
                    <img src={weather.iconUrl} alt='Weather Icon'/>
                    <h3>{weather.description}</h3>
                </div>
                <div className='temp text-5xl'>
                    <h1>{`${weather.temp.toFixed()} °${units==='metric'?'C':'F'}`}</h1>
                </div>
            </div>
            {/* bottom Description */}
            <Description weather={weather} units={units}/>
          </div>
        )}
        
      </div>
    </div>
    </div>
  )
}

export default App
