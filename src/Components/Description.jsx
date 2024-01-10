import React from 'react'
import { FaArrowUp, FaArrowDown, FaWind } from "react-icons/fa6";

import {BiHappy} from 'react-icons/bi';
import {MdCompress, MdOutlineWaterDrop} from 'react-icons/md'
const Description = ({weather, units}) => {
    const tempUnit = units==='metric'?'°C':'°F'
    const windUnit = units==='metric'?'m/s':'m/h'
    const cards = [
        {
            id:1,
            icon: <FaArrowDown/>,
            title: 'min',
            data: weather.temp_min.toFixed(),
            unit:tempUnit
        },
        {
            id:2,
            icon: <FaArrowUp/>,
            title: 'max',
            data: weather.temp_max.toFixed(),
            unit:tempUnit
        },
        {
            id:3,
            icon: <BiHappy/>,
            title: 'feels like',
            data: weather.feels_like.toFixed(),
            unit:tempUnit
        },
        {
            id:4,
            icon: <MdCompress/>,
            title: 'pressure',
            data: weather.pressure,
            unit:'hPa'
        },
        {
            id:5,
            icon: <MdOutlineWaterDrop/>,
            title: 'humidity',
            data: weather.humidity,
            unit:"%"
        },
        {
            id:6,
            icon: <FaWind/>,
            title: 'wind speed',
            data: weather.speed,
            unit:windUnit
        }
    ]

  return (
    <div className='sec w-full'>
       <div className='Des grid lg:grid-cols-3 gap-10 grid-cols-2  '>
        {cards.map(({id, icon, data,title,unit})=>(
              <div key={id} className='card flex flex-col justify-between items-center p-4 rounded-md  bg-black bg-opacity-60 w-full text-white'>
              <div className='desic w-full flex items-center justify-center flex-row  gap-2 mb-3'>
                  {icon}
                  <small className='captalize '>{title}</small>
                  <h2>{`${data} ${unit}`}</h2>
              </div>
          </div>

        ))}
          
           
           
           
            
            
       </div>
    </div>
  )
}

export default Description
