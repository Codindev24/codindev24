import {React, useState, useEffect} from 'react';
import axios from 'axios';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';



function Navbar() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&lang=is&appid=5b3f550ce1409fd3e0696aa79e6315e6`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  // color temp numbers
  const temp = (count, number) => {
    if (count < 0) return red;
    else if (count > 1) return green;
    else if (count === 0) return red;
    else if (count === 1) return yellow;
    else if (count === 10) return orange;
};

  return (

    <div className="weather">

      <div className="search">

      <input
          className=""
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Weather search..'
          type="text" />


      </div>{/* .search */}

        {data.name !== undefined &&
        
          <div className="vedrid hover:shadow-indigo-500/40 flex justify-center">

            <div className="left">
              <ul className="nameheatclouds">
                <span className="flex justify-between">
                <li className="name">{data.name}</li>
                <li className="c">{data.main ? <span>Temp <span className="tempdata">{data.main.temp.toFixed()}</span><span className="cels">°c</span></span> : null}</li>
                <li className="feels">{data.main ? <p className=''>Feels <span className="feelsdata">{data.main.feels_like.toFixed()}</span><span className="cels">°c</span></p> : null}</li>
                <li className="snow">{data.weather ? <p>{data.weather[0].main}</p> : null}</li>
                <li className="w">{data.wind ? <p className='bold'><span className="wind">Wind</span> <span className="winddata">{data.wind.speed.toFixed()}</span> m/s</p> : null}</li>
                <li className="hum">{data.main ? <p className='bold'><span className="hum">Hum</span> {data.main.humidity}%</p> : null}</li>
                </span>
              </ul>
              <br />
              <ul className="below">
              <span className="flex justify-between">
              <li className="cmin">{data.main ? <span>Min Temp <span className="tempdatamin">{data.main.temp_min}</span><span className="cels">°c</span></span> : null}</li>
              <li className="cmax">{data.main ? <span>Max Temp <span className="tempdatamax">{data.main.temp_max}</span><span className="cels">°c</span></span> : null}</li>
              <li className="windgust">{data.wind ? <p className='bold'><span className="wind">Wind gust</span> <span className="winddata">{data.wind.gust.toFixed()}</span> m/s</p> : null}</li>
              <li className="sea">{data.main ? <span>Sea Level <span className="tempdatamax">{data.main.sea_level}</span></span> : null}</li>
              </span>
              </ul>

            </div>


          </div>/* .vedrid */
        }

      </div>/* .weather */
  )
}

export default Navbar