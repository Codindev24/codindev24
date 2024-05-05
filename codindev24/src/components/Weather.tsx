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


      <div className="flex justify-center">
      <div className="search">

      <input
          className=""
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Weather search..'
          type="text" />


      </div>{/* .search */}
      </div>

        {data.name !== undefined &&
        
          <div className="vedrid">

          {/* /////////////////////////////////////////////// NEW ///////////////////////////////////////////////////////////////////////// */}

           <div className="new">

            <div className="adjust flex justify-evenly">

           <ul className="iconname">
               <span className="flex justify-center">
               <li className="icon"><span><img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} /> </span></li>
               <li className="name"><span>{data.name}</span></li>
               </span>
             </ul>


           <ul className="nameheatclouds">
               <span className="flex justify-evenly">
               <li className="temp">{data.main ? <span><span className="name">Temp</span><span className="temp">{data.main.temp.toFixed()}</span> <p className="cells">°c</p></span> : null}</li>
               <li className="feels">{data.main ? <span><span className="name">Feels</span> <span className="feels">{data.main.feels_like.toFixed()}</span><p className="cells"> °c</p></span> : null}</li>
               <li className="clouds">{data.weather ? <span>{data.weather[0].main}</span> : null}</li>
               <li className="wind">{data.wind ? <span><span className="name">Wind</span> <span className="wind">{data.wind.speed.toFixed()}</span><p className="cells">m/s</p></span> : null}</li>
               <li className="hum">{data.main ? <span><span className="name">Hum</span> <span className="hum">{data.main.humidity}</span><p className="cells">%</p></span> : null}</li>
               </span>
             </ul>
             
             <ul className="below">
             <span className="flex justify-between">
             <li className="mintemp">{data.main ? <span><span className="name">Min</span><span className="mintemp">{data.main.temp_min}</span><p className="cells"> °c</p></span> : null}</li>
             <li className="maxtemp">{data.main ? <span><span className="name">Max</span> <span className="maxtemp">{data.main.temp_max}</span><p className="cells"> °c</p></span> : null}</li>
             <li className="windgust">{data.wind ? <span><span className="name">Gust</span> <span className="windgust">{data.wind.gust.toFixed()}</span> <p className="cells">m/s</p></span> : null}</li>
             <li className="dist">{data.main ? <span><span className="name">Dist</span> <span className="dist">{data.visibility}</span> <p className="cells">km</p></span> : null}</li>
             <li className="sea">{data.main ? <span><span className="name">Sea </span><span className="sea">{data.main.sea_level}</span><p className="cells">Level</p></span> : null}</li>
             </span>
             </ul>

             </div>{/* .adjust */}

           </div>{/* .new */}

          </div>/* .vedrid */
        }

      </div>/* .weather */
  )
}

export default Navbar