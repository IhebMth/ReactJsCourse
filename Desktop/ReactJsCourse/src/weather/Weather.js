import React, {useState} from 'react'
import axios from 'axios'
import './Weather.css'

function Weather() {
    let [data, setData] = useState({})
    let [location, setLocation] = useState("")
    

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=5d01a587aeba4a161f4c122e863b8e5c`

    async function searchLocation(e) {
        if(e.key === 'Enter')
         {
        await axios.get(url)
        .then((res) => {
            setData(res.data)
            console.log(res.data)
          
        })
        setLocation('')
    }
}
  return (
    <div className='weather'>
    <div className='search'>
        <input
        value={location}
        onChange={e => setLocation(e.target.value)}
        onKeyUp={searchLocation}
     

        placeholder='Enter Location'
        type='text'
        />
    </div>
    
        <div className='container'>
    <div className='top'>
        <div className='location'>
            <p>{data.name}</p>
        </div>
        <div className='temp'>
            {data.main? <h1>{data.main.temp.toFixed()}°F</h1> : null} 
        </div>
        <div className='description'>
        {data.weather? <p className='bold'>{data.weather[0].main}</p> : null} 
        </div>
    </div>
    {data.name != undefined &&
    
    
    <div className='bottom'>
        
        <div className='feels'>
        {data.main? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}             <p>Feels</p>
        </div>
        <div className='humidity'>
        {data.main? <p className='bold'>{data.main.humidity}%</p> : null} 
            <p>Humidity</p>
        </div>
        <div className='wind'>
        {data.wind? <p className='bold'>{data.wind.speed.toFixed()}MPH</p> : null}   
        <p>Wind</p>
        </div>
    
    </div>
}
    </div>    
    </div>
  )
}

export default Weather
