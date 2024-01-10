const apiKey = '782ac01d7c94ec49d9d820fad924c4d9'

const makeIconUrl = (iconId)=> `https://openweathermap.org/img/wn/${iconId}@2x.png`


const getFromattedWeatherData = async (city, units="metric") =>{

    const url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`

    const data = await fetch(url).then((res) => res.json()).then((data)=>data);

    const {weather,
        main: {temp, feels_like, temp_min, temp_max, pressure, humidity},
        wind: {speed},
        sys: {country},
        name
    } = data
    const {description , icon}= weather[0]
    return{
        description, iconUrl : makeIconUrl(icon), temp, feels_like, temp_min, temp_max, pressure, humidity, speed, country, name 
    }
}

export default getFromattedWeatherData