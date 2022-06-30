
function Weather({city}) {
  const cityData = city[0]

  const url = "http://openweathermap.org/img/w/"
  const iconUrl = `${url+cityData.weather[0].icon}.png`

  return(
    <div className="weather-data">
      <div>La ciudad es: {cityData.name}</div>
      <div>La temperatura actual es de: {cityData.main.temp}°C</div>
      <div>La temperatura minima es de: {cityData.main.temp_min}°C</div>
      <div>La temperatura máxima es de: {cityData.main.temp_max}°C</div>
      <div>Sensacion termica: {cityData.main.feels_like}°C</div>
      <div>Humedad: {cityData.main.humidity}%</div>
      <div>Velocidad del viento: {cityData.wind.speed}m/s</div>
      <div className="weather-icon-info">
      <img src={iconUrl} alt="weather icon"/>
      {cityData.weather[0].description}
      </div>
    </div>
  )
}

export default Weather;