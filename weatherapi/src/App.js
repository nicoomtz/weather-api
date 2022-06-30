import './assets/css/App.css';
import { useState } from 'react';
import axios from 'axios';
import Weather from './components/Weather';
import Spinner from './components/Spinner';

function App() {
  const [city, setCity] = useState('')
  const [cityData, setCityData] = useState([])
  const [loading, setLoading] = useState(false)

  const getWeather = async () => {
    const toArray = [];
    try{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0d6af36e67177f00ba711bacabf2fa07&units=metric`
    const res = await axios.get(url)
    toArray.push(res.data)
    setCityData(toArray)
    setLoading(false)
    } catch(err) {
      console.log(err)
      setLoading(false)
      document.querySelector('input').classList.add('error')
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true)
    getWeather()
  }

  return (
    <div className='App'>
      <h1 className='app-title'>Weather App</h1>
      <form className='weather-form' onSubmit={handleSubmit}>
        <input type='text' onChange={(e) => setCity(e.target.value)} value={city}/>
      </form>
      <div className='weather-container'>
        {loading ? <Spinner /> : ''}
        {cityData.length === 1 ? <Weather city={cityData} loading={loading} setLoading={setLoading}/> : `Enter a city to search`}
      </div>
    </div>
  );
}

export default App;
