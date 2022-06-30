

function Weather({city, loading, setLoading}) {
  const cityData = city[0]

  const url = "http://openweathermap.org/img/w/"
  const iconUrl = `${url+cityData.weather[0].icon}.png`

  const date = new Date()
  const day = `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`


  return(
    <div className="weather-data">
      <div>Hoy es: {day}</div>
      <div>La ciudad es: {cityData.name}, {cityData.sys.country}</div>
      <div className="weather-icon-info">
      <img src={iconUrl} alt="weather icon"/>
      {cityData.weather[0].description}
      </div>
      <div>La temperatura actual es de: {cityData.main.temp.toFixed(1)}°C</div>
      <div>La temperatura minima es de: {cityData.main.temp_min.toFixed(1)}°C</div>
      <div>La temperatura máxima es de: {cityData.main.temp_max.toFixed(1)}°C</div>
      <div>Sensacion termica: {cityData.main.feels_like.toFixed(1)}°C</div>
      <div>Humedad: {cityData.main.humidity}%</div>
      <div>Velocidad del viento: {cityData.wind.speed}m/s</div>

    </div>
  )
}

export default Weather;