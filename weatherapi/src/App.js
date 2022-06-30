import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Weather from './Weather';

function App() {
  const [city, setCity] = useState('')
  const [cityData, setCityData] = useState([])

  const getWeather = async () => {
    const toArray = [];
    try{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0d6af36e67177f00ba711bacabf2fa07&units=metric`
    const res = await axios.get(url)
    toArray.push(res.data)
    setCityData(toArray)
    } catch(err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getWeather()
    }, [])

  function handleSubmit(e) {
    e.preventDefault();
    getWeather()
  }

  return (
    <div className="App">
      <form className='weather-form' onSubmit={handleSubmit}>
        <input type='text' onChange={(e) => setCity(e.target.value)} />
      </form>
      <div className='weather-container'>
        {cityData.length === 1 ? <Weather city={cityData}/> : `Enter a city to search`}
      </div>
    </div>
  );
}

export default App;
