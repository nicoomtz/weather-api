import '../assets/css/Weather.css'

function Weather({city, loading, setLoading}) {
  const cityData = city[0]

  const url = "http://openweathermap.org/img/w/"
  const iconUrl = `${url+cityData.weather[0].icon}.png`

  const date = new Date()
  const day = `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`

  const cityName = cityData.name;
  const cityCountry = cityData.sys.country;
  const cityDescription = cityData.weather[0].description;
  const cityTemp = cityData.main.temp.toFixed(1);
  const cityMinTemp = cityData.main.temp_min.toFixed(1);
  const cityMaxTemp = cityData.main.temp_max.toFixed(1);
  const cityFeelsLike = cityData.main.feels_like.toFixed(1);
  const cityHumidity = cityData.main.humidity;
  const cityWind = cityData.wind.speed;

  return(
    <div className="weather-data">
      <div className="weather-data-city">
        <h4 className="weather-data-city-day">{day}</h4>
        <div className="weather-icon-info">
        <div className='weather-city-temp'>{cityTemp}°C</div>
          <img src={iconUrl} alt="weather icon"/>
          {cityDescription}
        </div>
        <h3 className="weather-data-city-name">{cityName}, {cityCountry}</h3>
      </div>
      <div className='weather-data-temp'>
        <div className='temp-info'>MinTemp: <span className='temp-info-span'>{cityMinTemp}°C</span></div>
        <div className='temp-info'>MaxTemp: <span className='temp-info-span'>{cityMaxTemp}°C</span></div>
        <div className='temp-info'>Feels Like: <span className='temp-info-span'>{cityFeelsLike}°C</span></div>
        <div className='temp-info'>Humidity: <span className='temp-info-span'>{cityHumidity}%</span></div>
        <div className='temp-info'>Wind Speed: <span className='temp-info-span'>{cityWind}m/s</span></div>
      </div>
    </div>
  )
}

export default Weather;