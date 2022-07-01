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
        <div className='temp-info'>MinTemp: {cityMinTemp}°C</div>
        <div className='temp-info'>MaxTemp: {cityMaxTemp}°C</div>
        <div className='temp-info'>Feels Like: {cityFeelsLike}°C</div>
        <div className='temp-info'>Humidity: {cityHumidity}%</div>
        <div className='temp-info'>Wind Speed: {cityWind}m/s</div>
      </div>
    </div>
  )
}

export default Weather;