import React, {useState, useEffect} from 'react'
import './Weather.scss'
import hotBg from '../../assets/images/hot.jpg'
import coldBg from '../../assets/images/cold.jpg'
import Description from './description/Description'
import { getFormattedWeatherData } from './weatherService'

const Weather = () => {

  const [weather,setWeather] = useState(null)
  const [units, setUnits] = useState('metric')
  const [city, setCity] = useState ("Oulu")
  const [background, setBackground] = useState(hotBg)

  useEffect(()=>{
    const fetchWeatherData = async() =>{
      
      const data = await getFormattedWeatherData(city,units)
      setWeather(data)

      const threshold = units === 'metric' ? 20 : 60;
      if (data.temp <= threshold) setBackground (coldBg);
      else setBackground(hotBg);
    }
    fetchWeatherData()
  }, [units,city]);
  
  const handleUnitsClick = (e) => {
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1)

    const isCelsius = currentUnit === "C";
    button.innerText = isCelsius ? "˚F" : "˚C";
    setUnits(isCelsius ? "metric" : "imperial");
  }

  const handleSubmit = (e) =>{
    if (e.keyCode === 13){
      setCity(e.currentTarget.value)
      e.currentTarget.blur()
    }
  }
  
  return (
    <div className='weather-app' style={{backgroundImage:`url(${background})`}}>
      <div className="overlay">
        {
          weather && (
            <div className="container">
            <div className="section section__inputs">
              <input onKeyDown={handleSubmit} type="text" name="city" placeholder='Enter City ...'/>
              <button onClick={(e)=>handleUnitsClick(e)}>˚F</button>
            </div>
  
            <div className="section section__temperature">
              <div className="icon">
                <h3>{`${weather.name}, ${weather.country}`}</h3>
                <img src= {weather.iconURL} alt="icon" />
                <h3>{weather.description}</h3>
              </div>
              <div className="temperature">
                <h1>{`${weather.temp.toFixed()} ˚${
                  units==="metric" ? "C" : "F"
                }`}</h1>
              </div>
            </div>
            {/* bottom description */}
            <Description weather={weather} units={units}/>
          </div>
          )
        }
     
      </div>
    </div>
  )
}

export default Weather