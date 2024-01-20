import React from 'react'
import Description from './Description'
const Card = ({weather, ChangeUnit, enterKeyPressed, units, currentDate        
    }) => {
       
        
       
  return (
    <div>
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
                <div className='temp flex flex-col'>
                    <h1 className='text-5xl mb-14'>{`${weather.temp.toFixed()} °${units==='metric'?'C':'F'}`}</h1>
                   <h6 className='m-0 p-2'>{`${currentDate.day}/${currentDate.currentDate.month<10?`0${currentDate.currentDate.month}`:`${currentDate.currentDate.month}`}/${currentDate.year}`}</h6>
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

export default Card
